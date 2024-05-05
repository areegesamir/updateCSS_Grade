import React from 'react';
import './LeftSideBar.css';
import './RightSideBar.css';
import './viewReports.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faShieldAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const ReportCard = () => {
  const navigate = (destination) => {
    // Handle navigation logic here
    console.log(`Navigating to ${destination}`);
  };

  return (
    <div>
      {/* Left Sidebar */}
      <div className="sidebar" id="sidebar">
        <ul>
          <li><a href="#" onClick={() => navigate('home')}><FontAwesomeIcon icon={faHome} /></a></li>
          <li><a href="#" onClick={() => navigate('security')}><FontAwesomeIcon icon={faShieldAlt} /></a></li>
          <li><a href="#" onClick={() => navigate('logout')}><FontAwesomeIcon icon={faSignOutAlt} /></a></li>
        </ul>
      </div>
      
      {/* Right Sidebar */}
      <div className="right-sidebar">
        <div className="profileInfo">
          <img src="./roshdy abaza.jpg" alt="Profile" className="profile-picture" />
          <p className="username">John Doe</p>
        </div>
        <ul className="sidebar-list">
          <li>Fall Reports</li>
          <li>User Management</li>
        </ul>
      </div>

      {/* Report Card */}
      <div className="report-card">
        <div className="card-content">
          <h2>Report Title</h2>
          <p className="report-date">Submitted: May 4, 2024</p>
          <div className="container">
            <div className="label">
              Action Taken
            </div>
            <div className="box">
              <p>This is the content inside the box.</p>
            </div>
          </div>
          <div className="container">
            <div className="label">
              Observed Injuries
            </div>
            <div className="box">
              <p>This is the content inside the box.</p>
            </div>
          </div>
          <div className="container">
            <div className="label">
              Reasons for Fall
            </div>
            <div className="box">
              <p>This is the content inside the box.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportCard;
