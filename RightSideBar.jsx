// RightSidebar.jsx

import React from 'react';
import './RightSidebar.css';

const RightSidebar = () => {
  return (
    <div className="right-sidebar">
      <div className="profile-info">
        <img
          src="path_to_profile_picture.jpg"
          alt="Profile"
          className="profile-picture"
        />
        <p className="username">John Doe</p>
      </div>
      <ul className="sidebar-list">
        <li>View Generated Alerts</li>
        <li>Fall Reports</li>
        <li>User Management</li>
      </ul>
    </div>
  );
};

export default RightSidebar;
