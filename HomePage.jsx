import React from 'react';
import './HomePage.css'; 


// Functional component for the main page
const HomePage = () => {
    // Function to handle navigation (left sidebar)
    const navigate = (section) => {
        console.log(`Navigating to ${section} section`);
        // Implement navigation logic here
    };

    // Function to handle click events on right sidebar items
    const handleRightSidebarItemClick = (item) => {
        console.log(`Clicked on ${item}`);
        // Implement logic for handling right sidebar item clicks
    };

    return (
        <div>
            {/* Left Sidebar */}
            <div className="sidebar" id="sidebar">
                <ul>
                    <li><a href="#" onClick={() => navigate('home')}><i className="fas fa-home"></i></a></li>
                    <li><a href="#" onClick={() => navigate('security')}><i className="fas fa-shield-alt"></i></a></li>
                    <li><a href="#" onClick={() => navigate('logout')}><i className="fas fa-sign-out-alt"></i></a></li>
                </ul>
            </div>
            
            {/* Right Sidebar */}
            <div className="right-sidebar">
                <div className="profileInfo">
                    <img src="./roshdy abaza.jpg" alt="Profile" className="profile-picture" />
                    <p className="username">John Doe</p>
                </div>
                <ul className="sidebar-list">
                    <li><a href="#" onClick={() => handleRightSidebarItemClick('Fall Reports')}>Fall Reports</a></li>
                    <li><a href="#" onClick={() => handleRightSidebarItemClick('User Management')}>User Management</a></li>
                </ul>
            </div>

            {/* Main Content Container */}
            <div className="main-container">
                {/* Upper Section - Card Container */}
                <div className="card-container">
                    <div className="card">
                        <div className="card-content">
                            <i className="fas fa-check-circle icon"></i>
                            <div className="card-text">Detected Falls</div>
                        </div>
                        <div className="card-counter" id="fallsCounter">15</div>
                    </div>
                    <div className="card">
                        <div className="card-content">
                            <i className="fas fa-bell icon"></i>
                            <div className="card-text">Alerts Sent</div>
                        </div>
                        <div className="card-counter" id="alertsCounter">3</div>
                    </div>
                    <div className="card">
                        <div className="card-content">
                            <i className="fas fa-user-circle icon"></i> 
                            <div className="card-text">Health Providers</div>
                        </div>
                        <div className="card-counter" id="profilesCounter">50</div>   
                    </div>
                </div>

                {/* Stream Section */}
                <div className="stream-section">
                    <div className="stream-container">
                        <h1>Live Stream</h1>
                        <h3>Camera1</h3>
                        <div className="video-player" id="videoPlayer"></div>
                    </div>
                </div>
            </div>

            {/* Right Section - Sidebar */}
            <div className="right-section">
                <div className="right-card">
                    <div className="right-card-content">
                        <div className="right-card-text">Detected Falls</div>
                        <div className="progress-circle" data-percent="70"></div>
                    </div>
                </div>
                <div className="right-card">  
                    <div className="right-card-content">
                        <div className="right-card-text">Alerts</div>
                        <div className="progress-circle" data-percent="45"></div>
                    </div>
                </div>
                <div className="right-card"> 
                    <div className="right-card-content">
                        <div className="right-card-text">
                            <a href="#"><p>Communication Center</p></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
