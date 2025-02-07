import React from "react";
import "../ui/styles/Sidebar.css"; // You can create a separate CSS file for styling
import { Link, useNavigate } from "react-router-dom";
import Profile from "../Assets/Image/1-intro-photo-final.jpg";
import PathConstants from "../router/pathConstants";

interface sidebarProps {
  namePage: string;
}


const Sidebar: React.FC = () => {
  const username = localStorage.getItem("username");
  const navigate = useNavigate();



  return (
    <div id="nav-bar" className="sidebar">
      <input id="nav-toggle" type="checkbox" />
      <div id="nav-header" className="custom-menu">
        <a id="nav-title" target="_blank">
          Web Template
        </a>
        <label>
          <span id="nav-toggle-burger"></span>
        </label>
        <hr />
      </div>
      <div id="nav-content">
        <div className="nav-button" >
          <i className="fas fa-palette"></i>
          <Link to={PathConstants.ABOUT}>
            <span>Your Work</span>
          </Link>
        </div>
        <div className="nav-button" >
          <i className="fas fa-images"></i>
          <Link to={PathConstants.FORM}>
            <span>Assets</span>
          </Link>
        </div>
        <div className="nav-button" >
          <i className="fas fa-thumbtack" ></i>
          <Link to={PathConstants.HOME}>
            <span>Pinned Items</span>
          </Link>
        </div>
        <hr />
        <div className="nav-button" >
          <i className="fas fa-heart"></i>
          <Link to={PathConstants.ABOUT}>
            <span>Following</span>
          </Link>
        </div>
        <div className="nav-button" >
          <i className="fas fa-chart-line"></i>
          <Link to={PathConstants.ABOUT}>
            <span>Trending</span>
          </Link>
        </div>
        <div className="nav-button" >
          <i className="fas fa-fire"></i>
          <Link to={PathConstants.ABOUT}>
            <span>Challenges</span>
          </Link>
        </div>
        <div className="nav-button" >
          <i className="fas fa-magic"></i>
          <Link to={PathConstants.ABOUT}>
            <span>Spark</span>
          </Link>
        </div>
        <hr />
        <div className="nav-button" >
          <i className="fas fa-gem"></i>
          <Link to={PathConstants.ABOUT}>
            <span>Codepen Pro</span>
          </Link>
        </div>
        <div id="nav-content-highlight"></div>
      </div>
      <input id="nav-footer-toggle" type="checkbox" />
      <div id="nav-footer">
        <div id="nav-footer-heading">
          <div id="nav-footer-avatar">
            <img src={Profile} alt=""  />
          </div>
          <div id="nav-footer-titlebox">
              {username}
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

