const Navbar = () => {
  // CSS styles
  const styles = {
    navbar: {
      display: "flex",
      justifyContent: "space-between", // Khoảng cách đều giữa các nút
      alignItems: "center",
      backgroundColor: "rgb(27, 133, 219)",
      padding: "10px 20px", // Thêm padding để nội dung thoáng hơn
      width: "100%", // Chiếm toàn bộ chiều ngang màn hình
      boxShadow: "rgba(0, 0, 0, 0.15) 0px 4px 6px",
      position: "fixed", // Giữ cố định thanh navbar
      top: 0,
      zIndex: 1000,
    },
    button: {
      outline: "0",
      border: "0",
      width: "50px",
      height: "50px",
      borderRadius: "50%",
      backgroundColor: "transparent",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#fff",
      fontSize: "20px", // Đảm bảo kích thước biểu tượng phù hợp
      transition: "transform 0.3s ease-in-out",
      cursor: "pointer",
    },
    buttonHover: {
      transform: "translateY(-3px)",
    },
    icon: {
      fontSize: "24px", // Kích thước biểu tượng lớn hơn
    },
  };

  return (
    <div style={styles.navbar}>
      {/* Button 1 */}
      <button
        style={styles.button}
        onMouseEnter={(e) => (e.target.style.transform = "translateY(-3px)")}
        onMouseLeave={(e) => (e.target.style.transform = "none")}
      >
        <svg
          style={styles.icon}
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 1024 1024"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"></path>
        </svg>
      </button>
      {/* Button 2 */}
      <button
        style={styles.button}
        onMouseEnter={(e) => (e.target.style.transform = "translateY(-3px)")}
        onMouseLeave={(e) => (e.target.style.transform = "none")}
      >
        <svg
          style={styles.icon}
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          aria-hidden="true"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
      </button>
      {/* Button 3 */}
      <button
        style={styles.button}
        onMouseEnter={(e) => (e.target.style.transform = "translateY(-3px)")}
        onMouseLeave={(e) => (e.target.style.transform = "none")}
      >
        <svg
          style={styles.icon}
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 24 24"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2.5a5.5 5.5 0 0 1 3.096 10.047 9.005 9.005 0 0 1 5.9 8.181.75.75 0 1 1-1.499.044 7.5 7.5 0 0 0-14.993 0 .75.75 0 0 1-1.5-.045 9.005 9.005 0 0 1 5.9-8.18A5.5 5.5 0 0 1 12 2.5ZM8 8a4 4 0 1 0 8 0 4 4 0 0 0-8 0Z"></path>
        </svg>
      </button>
      {/* Button 4 */}
      <button
        style={styles.button}
        onMouseEnter={(e) => (e.target.style.transform = "translateY(-3px)")}
        onMouseLeave={(e) => (e.target.style.transform = "none")}
      >
        <svg
          style={styles.icon}
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>
      </button>
    </div>
  );
};

export default Navbar;
