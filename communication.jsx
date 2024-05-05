import React from 'react';
import './LeftSideBar.css';
import './RightSideBar.css';
import './communication.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faShieldAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'; // Import specific icons

const CommunicationWithStaff = () => {
    const navigate = (page) => {
        // Implement your navigation logic here
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

            {/* Communication Form */}
            <h1>Communication With Staff</h1>

            <div className="form-group">
                <label htmlFor="to">To:</label>
                <input type="radio" id="all" name="all" />
                <label htmlFor="all">Select All</label>
                <input type="text" id="user" name="user" placeholder="Enter User name" required />
            </div>

            <div className="form-group">
                <label htmlFor="message">Write your message:</label>
                <textarea id="message" name="message" required></textarea>
            </div>

            <button type="submit" className="btn-save">Send</button>
            <button type="reset" className="btn-cancel">Cancel</button>
        </div>
    );
};

export default CommunicationWithStaff;
