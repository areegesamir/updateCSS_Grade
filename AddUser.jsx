import React from 'react';

const AddUser = () => {
    const navigate = (destination) => {
        // Define navigate function logic here
        console.log(`Navigating to ${destination}`);
    };

    const cancelForm = () => {
        alert("Form canceled!");
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
                    <li>Fall Reports</li>
                    <li>User Management</li>
                </ul>
            </div>

            {/* Main Content */}
            <div className="container">
                <h2>Add New User</h2>
                <form id="userForm" action="submit_form.php" method="post">
                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input type="text" id="username" name="username" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="fullName">Full Name:</label>
                        <input type="text" id="fullName" name="fullName" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="mobile">Mobile:</label>
                        <input type="text" id="mobile" name="mobile" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="userGroup">User Group:</label>
                        <input type="text" id="userGroup" name="userGroup" required />
                    </div>
                    <div className="form-group">
                        <button type="button" className="btn btn-save">Save</button>
                        <button type="button" className="btn btn-cancel" onClick={cancelForm}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddUser;
