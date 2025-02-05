import React from "react";
import "../ui/styles/Sidebar.css"; // You can create a separate CSS file for styling
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    // <div className="wrapper d-flex align-items-stretch">
    //   <div className="sidebar">
    //     <div className="custom-menu">
    //       <button
    //         type="button"
    //         id="sidebarCollapse"
    //         className="btn btn-primary"
    //       >
    //         <i className="fa fa-bars"></i>
    //         <span className="sr-only">Toggle Menu</span>
    //       </button>
    //     </div>
    //     <ul>
    //       <li>Home</li>
    //       <li>Dashboard</li>
    //       <li>Settings</li>
    //       <li>Logout</li>
    //     </ul>
    //   </div>
    // </div>
    <div id="nav-bar" className="sidebar">
      <input id="nav-toggle" type="checkbox" />
      <div id="nav-header" className="custom-menu">
        <a id="nav-title" target="_blank">
          {/* C<i className="fab fa-codepen">Web Template</i>DEPEN */}
          Web Template
        </a>
        <label>
          <span id="nav-toggle-burger"></span>
        </label>
        <hr />
      </div>
      <div id="nav-content">
        <div className="nav-button">
          <i className="fas fa-palette"></i>
          <Link to="/about">
            <span>Your Work</span>
          </Link>
        </div>
        <div className="nav-button">
          <i className="fas fa-images"></i>
          <Link to="/formregister">
            <span>Assets</span>
          </Link>
        </div>
        <div className="nav-button">
          <i className="fas fa-thumbtack"></i>
          <Link to="/dashboard">
            <span>Pinned Items</span>
          </Link>
        </div>
        <hr />
        <div className="nav-button">
          <i className="fas fa-heart"></i>
          <Link to="/about">
            <span>Following</span>
          </Link>
        </div>
        <div className="nav-button">
          <i className="fas fa-chart-line"></i>
          <Link to="/about">
            <span>Trending</span>
          </Link>
        </div>
        <div className="nav-button">
          <i className="fas fa-fire"></i>
          <Link to="/about">
            <span>Challenges</span>
          </Link>
        </div>
        <div className="nav-button">
          <i className="fas fa-magic"></i>
          <Link to="/about">
            <span>Spark</span>
          </Link>
        </div>
        <hr />
        <div className="nav-button">
          <i className="fas fa-gem"></i>
          <Link to="/about">
            <span>Codepen Pro</span>
          </Link>
        </div>
        <div id="nav-content-highlight"></div>
      </div>
      <input id="nav-footer-toggle" type="checkbox" />
      <div id="nav-footer">
        <div id="nav-footer-heading">
          <div id="nav-footer-avatar">
            <img src="https://gravatar.com/avatar/4474ca42d303761c2901fa819c4f2547" />
          </div>
          <div id="nav-footer-titlebox">
            <a
              id="nav-footer-title"
              href="https://codepen.io/uahnbu/pens/public"
              target="_blank"
            >
              uahnbu
            </a>
            <span id="nav-footer-subtitle">Admin</span>
          </div>
          <label>
            <i className="fas fa-caret-up"></i>
          </label>
        </div>
        <div id="nav-footer-content"></div>
      </div>
    </div>
  );
};

export default Sidebar;
