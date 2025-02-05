import { Link } from "react-router-dom";

const Footer = () => {
  const styles = {
    footer: {
      backgroundColor: "#333", // Dark background for the footer
      color: "white", // Text color
      padding: "10px 0", // Padding for spacing
      position: "relative",
      bottom: "0",
      width: "100%", // Ensure it spans the full width of the screen
    },
    footerContent: {
      textAlign: "center", // Center the content
    },
    title: {
      fontSize: "24px",
      fontWeight: "bold",
    },
    subtitle: {
      fontSize: "14px",
      fontStyle: "italic",
    },
    navList: {
      listStyleType: "none", // Remove default list styles
      paddingLeft: 0, // Remove padding
      display: "flex", // Use flexbox for horizontal layout
      justifyContent: "center", // Center the links
      marginTop: "10px",
    },
    navItem: {
      margin: "0 15px", // Space between links
    },
    link: {
      color: "white", // White text for the links
      textDecoration: "none", // Remove underline
      fontSize: "12px", // Set font size
      transition: "color 0.3s", // Smooth transition for hover effect
    },
    linkHover: {
      color: "#f39c12", // Change color on hover
    },
  };

  return (
    <footer style={styles.footer as React.CSSProperties} hidden={true}>
      {/* Footer Content */}
      <div style={styles.footerContent  as React.CSSProperties}>
        <h2 style={styles.title}>My Website</h2>
        <p style={styles.subtitle}>Thank you for visiting</p>
      </div>

      {/* Footer Navigation */}
      <nav>
        <ul style={styles.navList}>
          <li style={styles.navItem}>
            <Link to="/" style={styles.link}>
              Home
            </Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/about" style={styles.link}>
              About
            </Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/contact" style={styles.link}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
