import React from 'react';

function UpdateUser() {
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
                <h2>Update User</h2>
                <form id="userForm" action="submit_form.php" method="post">
                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input type="text" id="username" name="User Name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="Password" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="fullName">Full Name:</label>
                        <input type="text" id="fullName" name="Full Name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="mobile">Mobile:</label>
                        <input type="text" id="mobile" name="Mobile" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="Email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="userGroup">User Group:</label>
                        <input type="text" id="userGroup" name="User Group" required />
                    </div>
                    <div className="form-group">
                        <button type="button" className="btn btn-save">Update</button>
                        <button type="button" className="btn btn-cancel" onClick={cancelForm}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default UpdateUser;
