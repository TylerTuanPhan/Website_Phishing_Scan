import { RiHomeLine } from "react-icons/ri";
import { MdOutlineContacts } from "react-icons/md";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { ImCreditCard } from "react-icons/im";

const Navbar = () => {
  const styles = {
    navbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 20px",
      height: "50px",
      backgroundColor: "#192841",
      color: "white",
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      fontFamily: "'Poppins', sans-serif",
    },
    logo: {
      display: "flex",
      alignItems: "center",
      fontSize: "42px",
      fontWeight: "700",
      color: "#1b85db",
      cursor: "pointer",
      letterSpacing: "2px",
    },
    logoText: {
      marginLeft: "8px",
      fontSize: "16px",
      fontWeight: "500",
    },
    navLinks: {
      display: "flex",
      gap: "50px",
      listStyle: "none",
      justifyContent: "center",
      alignItems: "center",
    },
    navLink: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textDecoration: "none",
      color: "white",
      fontSize: "10px",
      fontWeight: "500",
      transition: "color 0.3s, transform 0.3s",
    },
    navLinkHover: {
      color: "#1b85db",
      transform: "scale(1.1)",
    },
    icon: {
      fontSize: "17px",
      marginBottom: "4px",
    },
    authButtons: {
      display: "flex",
      gap: "10px",
    },
    button: {
      position: "relative",
      padding: "1rem 2rem",
      borderRadius: "0.5rem",
      border: "none",
      fontSize: "1rem",
      fontWeight: "400",
      color: "#f4f0ff",
      textAlign: "center",
      cursor: "pointer",
      backgroundColor: "transparent",
      overflow: "hidden",
    },
    buttonBefore: {
      content: "''",
      display: "block",
      position: "absolute",
      left: 0,
      top: 0,
      height: "100%",
      width: "100%",
      borderRadius: "0.5rem",
      background: `
        linear-gradient(180deg, rgba(8, 77, 126, 0) 0%, rgba(8, 77, 126, 0.42) 100%),
        rgba(47, 255, 255, 0.24)
      `,
      boxShadow: "inset 0 0 12px rgba(151, 200, 255, 0.44)",
      zIndex: -1,
    },
    buttonAfter: {
      content: "''",
      display: "block",
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "0.5rem",
      background: `
        linear-gradient(180deg, rgba(8, 77, 126, 0) 0%, rgba(8, 77, 126, 0.42) 100%),
        rgba(47, 255, 255, 0.24)
      `,
      boxShadow: "inset 0 0 12px rgba(151, 200, 255, 0.44)",
      opacity: 0,
      zIndex: -1,
      transition: "all 0.3s ease-in",
    },
    buttonHover: {
      opacity: 1,
    },
  };

  return (
    <div style={styles.navbar}>
      {/* Logo */}
      <div style={styles.logo}>
        <div>Σ</div>
        <div style={styles.logoText}>URL SCAN</div>
      </div>

      {/* Navigation Links */}
      <ul style={styles.navLinks}>
        <li>
          <a
            href="#"
            style={styles.navLink}
            onMouseEnter={(e) => {
              e.target.style.color = styles.navLinkHover.color;
              e.target.style.transform = styles.navLinkHover.transform;
            }}
            onMouseLeave={(e) => {
              e.target.style.color = "white";
              e.target.style.transform = "none";
            }}
          >
            <RiHomeLine style={styles.icon} />
            Home
          </a>
        </li>
        <li>
          <a
            href="#"
            style={styles.navLink}
            onMouseEnter={(e) => {
              e.target.style.color = styles.navLinkHover.color;
              e.target.style.transform = styles.navLinkHover.transform;
            }}
            onMouseLeave={(e) => {
              e.target.style.color = "white";
              e.target.style.transform = "none";
            }}
          >
            <MdOutlineContacts style={styles.icon} />
            Contact
          </a>
        </li>
        <li>
          <a
            href="#"
            style={styles.navLink}
            onMouseEnter={(e) => {
              e.target.style.color = styles.navLinkHover.color;
              e.target.style.transform = styles.navLinkHover.transform;
            }}
            onMouseLeave={(e) => {
              e.target.style.color = "white";
              e.target.style.transform = "none";
            }}
          >
            <IoIosInformationCircleOutline style={styles.icon} />
            About
          </a>
        </li>
        <li>
          <a
            href="#"
            style={styles.navLink}
            onMouseEnter={(e) => {
              e.target.style.color = styles.navLinkHover.color;
              e.target.style.transform = styles.navLinkHover.transform;
            }}
            onMouseLeave={(e) => {
              e.target.style.color = "white";
              e.target.style.transform = "none";
            }}
          >
            <ImCreditCard style={styles.icon} />
            Cards
          </a>
        </li>
      </ul>

      {/* Authentication Buttons */}
      <div style={styles.authButtons}>
        <button
          style={styles.button}
          onMouseEnter={(e) => {
            e.target.style.opacity = styles.buttonHover.opacity;
          }}
          onMouseLeave={(e) => {
            e.target.style.opacity = 0;
          }}
        >
          Sign in
        </button>
        <button
          style={styles.button}
          onMouseEnter={(e) => {
            e.target.style.opacity = styles.buttonHover.opacity;
          }}
          onMouseLeave={(e) => {
            e.target.style.opacity = 0;
          }}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
