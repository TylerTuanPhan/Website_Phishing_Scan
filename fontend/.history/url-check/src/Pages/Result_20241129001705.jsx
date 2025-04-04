import { useState } from "react";

const Result = () => {
  const [activeTab, setActiveTab] = useState("Detection");

  const styles = {
    container: {
      backgroundColor: "#1a1a1a",
      color: "white",
      padding: "24px",
      fontFamily: "Arial, sans-serif",
    },
    header: {
      display: "flex",
      gap: "16px",
      marginBottom: "24px",
    },
    cardSquare: {
      backgroundColor: "#2d2d2d",
      borderRadius: "8px",
      width: "150px",
      height: "150px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    },
    cardRectangle: {
      backgroundColor: "#2d2d2d",
      borderRadius: "8px",
      flexGrow: 1,
      padding: "16px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    },
    tabs: {
      display: "flex",
      justifyContent: "space-between",
      borderBottom: "2px solid #444",
      marginBottom: "16px",
    },
    tab: {
      flex: 1,
      textAlign: "center",
      padding: "12px 16px",
      fontSize: "16px",
      fontWeight: "500",
      color: "#aaa",
      cursor: "pointer",
      position: "relative",
    },
    tabActive: {
      color: "white",
      fontWeight: "600",
    },
    tabUnderline: {
      position: "absolute",
      bottom: "0",
      left: "0",
      width: "100%",
      height: "10px",
      backgroundColor: "#87cefa",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      marginTop: "16px",
      backgroundColor: "#2d2d2d",
    },
    tableHead: {
      backgroundColor: "#333",
      color: "#ccc",
      textAlign: "left",
      textTransform: "uppercase",
    },
    tableBody: {
      color: "#ddd",
    },
    tableRow: {
      borderBottom: "1px solid #444",
      cursor: "pointer",
    },
    tableRowHover: {
      backgroundColor: "#3d3d3d",
    },
    tableCell: {
      padding: "12px 16px",
    },
    cleanStatus: {
      color: "#4ade80",
    },
  };

  const tabs = ["Detection", "Details", "Associations", "Community"];
  const rows = [
    { vendor: "Abusix", status: "Clean" },
    { vendor: "ADMINUSLabs", status: "Clean" },
    { vendor: "AlienVault", status: "Clean" },
  ];

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <div style={styles.cardSquare}>
          <h1 style={{ fontSize: "36px", margin: "0" }}>0</h1>
          <p style={{ color: "#4ade80", margin: "4px 0" }}>Community Score</p>
          <p style={{ fontSize: "14px", color: "#aaa" }}>/96</p>
        </div>
        <div style={styles.cardRectangle}>
          <h2>No security vendors flagged this URL as malicious</h2>
          <p style={{ color: "#4ade80", margin: "8px 0" }}>
            https://www.youtube.com/
          </p>
          <p style={{ color: "#aaa" }}>www.youtube.com</p>
          <div style={{ marginTop: "16px" }}>
            <span
              style={{
                display: "inline-block",
                backgroundColor: "#3b82f6",
                color: "white",
                borderRadius: "4px",
                padding: "4px 8px",
                marginRight: "8px",
                fontSize: "12px",
              }}
            >
              text/html
            </span>
            <span
              style={{
                display: "inline-block",
                backgroundColor: "#3b82f6",
                color: "white",
                borderRadius: "4px",
                padding: "4px 8px",
                marginRight: "8px",
                fontSize: "12px",
              }}
            >
              external-resources
            </span>
            <span
              style={{
                display: "inline-block",
                backgroundColor: "#3b82f6",
                color: "white",
                borderRadius: "4px",
                padding: "4px 8px",
                fontSize: "12px",
              }}
            >
              third-party-cookies
            </span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div style={styles.tabs}>
        {tabs.map((tab) => (
          <div
            key={tab}
            style={{
              ...styles.tab,
              ...(activeTab === tab ? styles.tabActive : {}),
            }}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
            {activeTab === tab && <div style={styles.tabUnderline}></div>}
          </div>
        ))}
      </div>

      {/* Table */}
      {activeTab === "Detection" && (
        <table style={styles.table}>
          <thead style={styles.tableHead}>
            <tr>
              <th style={styles.tableCell}>Security Vendor</th>
              <th style={styles.tableCell}>Analysis</th>
            </tr>
          </thead>
          <tbody style={styles.tableBody}>
            {rows.map((row, index) => (
              <tr
                key={index}
                style={styles.tableRow}
                onMouseOver={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    styles.tableRowHover.backgroundColor)
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.backgroundColor = "transparent")
                }
              >
                <td style={styles.tableCell}>{row.vendor}</td>
                <td style={{ ...styles.tableCell, ...styles.cleanStatus }}>
                  {row.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Result;
