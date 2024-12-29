from flask import Blueprint, request, render_template,jsonify
from flask_cors import CORS
from .utils.extract_features import extract_features
import joblib
import mysql.connector  # Import thư viện MySQL


main = Blueprint('main', __name__)

# Enable CORS for React frontend on http://localhost:5173
CORS(main, origins=["http://localhost:5173"])

# Load mô hình
model_url = joblib.load('model/url_model.pkl')
model_email = joblib.load('model/random_forest_model.pkl')
tfidf_vectorizer = joblib.load('model/tfidf_vectorizer.pkl')

# Kết nối cơ sở dữ liệu
db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="",
    database="phishing_checker"
)
cursor = db.cursor()

@main.route('/')
def index():
   return render_template('index.html')


@main.route('/predict', methods=['POST'])
def predict_url():
    if request.is_json:
        url = request.json.get('url')
        if not url:
            return jsonify({'error': 'No URL provided'}), 400

        try:
            # Extract features and make prediction
            features = extract_features(url)
            prediction = model_url.predict([features])
            result = "Phishing" if prediction[0] == 1 else "Legitimate"

            # Lưu kết quả vào cơ sở dữ liệu
            cursor.execute(
                "INSERT INTO history (url, result) VALUES (%s, %s)",
                (url, result)
            )
            db.commit()  # Ghi dữ liệu vào DB

            return jsonify({
                'url': url,
                'result': result
            }), 200
        except Exception as e:
            return jsonify({'error': f'Error processing the URL: {str(e)}'}), 500
    else:
        return jsonify({'error': 'Request must be JSON'}), 415


# Endpoint để lấy lịch sử kiểm tra
@main.route('/history', methods=['GET'])
def get_history():
    try:
        cursor.execute("SELECT url, result, checked_at FROM history ORDER BY checked_at DESC")
        history = cursor.fetchall()  # Lấy tất cả dữ liệu
        history_list = [
            {'url': row[0], 'result': row[1], 'checked_at': row[2].strftime('%Y-%m-%d %H:%M:%S')}
            for row in history
        ]
        return jsonify(history_list), 200
    except Exception as e:
        return jsonify({'error': f'Error fetching history: {str(e)}'}), 500


@main.route('/scan_email', methods=['POST'])
def scan_email():
    if request.is_json:
        data = request.json
        email_text = data.get('email_text')
        if not email_text:
            return jsonify({'error': 'No email text provided'}), 400

        try:
            text_vectorized = tfidf_vectorizer.transform([email_text])
            prediction = model_email.predict(text_vectorized)
            result = 'Phishing' if prediction[0] == 1 else 'Legitimate'

            # Lưu vào database
            cursor.execute(
                "INSERT INTO history_email (email_text, result) VALUES (%s, %s)",(email_text, result)
            )
            db.commit()

            return jsonify({'email_text': email_text, 'result': result}), 200
        except Exception as e:
            return jsonify({'error': f'Error processing the email: {str(e)}'}), 500
    else:
        return jsonify({'error': 'Request must be JSON'}), 415


@main.route('/history_email', methods=['GET'])
def get_history_email():
    try:
        cursor.execute("SELECT email_text, result, created_at FROM history_email ORDER BY created_at DESC")
        history = cursor.fetchall()  # Lấy tất cả dữ liệu
        history_list_email = [
            {'email_text': row[0], 'result': row[1], 'created_at': row[2].strftime('%Y-%m-%d %H:%M:%S')}
            for row in history
        ]
        return jsonify(history_list_email), 200
    except Exception as e:
        return jsonify({'error': f'Error fetching history: {str(e)}'}), 500