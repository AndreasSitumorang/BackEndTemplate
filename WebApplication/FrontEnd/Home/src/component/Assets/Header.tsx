import React from "react";
import "../ui/styles/Header.css"; // You can create a separate CSS file for styling
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header style={styles.header} hidden = {true}>
      {/* Header section: title/logo */}
      <div style={styles.headerContent}>
        <h1 style={styles.title}>My Website</h1>
        <p style={styles.subtitle}>Welcome to our site</p>
      </div>

      {/* NavBar section */}
      {/* <nav style={styles.navBar}>
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
            <Link to="/dashboard" style={styles.link}>
              Contact
            </Link>
          </li>
        </ul>
      </nav> */}
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: "#333",
    color: "white",
    padding: "5px 0",
    textAlign: "center" as "center",
  },
  headerContent: {
    marginBottom: "5px",
  },
  title: {
    margin: 0,
    fontSize: "30px",
  },
  subtitle: {
    margin: 0,
    fontSize: "14px",
    color: "#ccc",
  },
  navBar: {
    backgroundColor: "#444",
    padding: "5px 0",
  },
  navList: {
    listStyle: "none",
    margin: 0,
    padding: 0,
    display: "flex",
    justifyContent: "center",
  },
  navItem: {
    margin: "0 15px",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "13px",
  },
};

export default Header;
