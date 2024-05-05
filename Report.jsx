import React from 'react';
import './MainContent.css'; // Import CSS for styling

const MainContent = () => {
    return (
        <div className="wrapper">
            {/* Sidebar */}
            <div className="sidebar">
                {/* Sidebar Content */}
                Sidebar Content
            </div>

            {/* Main Content Area */}
            <div className="main-content">
                {/* Profile Section */}
                <div className="profile">
                    <div className="profile-info">
                        <img src="path_to_profile_picture.jpg" alt="Profile Picture" className="profilePicture" />
                        <h2 className="username">John Doe</h2>
                    </div>
                    <div className="profile-details">
                        <div className="counter">
                            <p>Alerts Count: <span className="count">10</span></p>
                        </div>
                        <div className="icon">
                            <i className="fa fa-eye"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainContent;
