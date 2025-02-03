import React from 'react';
import { useEffect } from 'react';
import '../ui/styles/Sidebar.css'; // You can create a separate CSS file for styling
import { useSidebar } from '../Context/SidebarContext';
import { useLocation } from 'react-router-dom';

const Sidebar: React.FC = () => {
    
    const { isSidebarVisible, setSidebarVisible } = useSidebar();
    const location = useLocation(); // Get current location
  
    useEffect(() => {
      // Hide the sidebar on the login page
      if (location.pathname === '/login') {
        setSidebarVisible(false);
      } else {
        setSidebarVisible(true);
      }
    }, [location, isSidebarVisible]);

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