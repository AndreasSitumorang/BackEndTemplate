import React from 'react';
import '../ui/styles/Sidebar.css'; // You can create a separate CSS file for styling
import { useLocation } from 'react-router-dom';

const Sidebar: React.FC = () => {    

  return (
    <div className="sidebar">
      <ul>
        <li>Home</li>
        <li>Dashboard</li>
        <li>Settings</li>
        <li>Logout</li>
      </ul>
    </div>
  );
};

export default Sidebar;