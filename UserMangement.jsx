import React from 'react';
import './RightSideBar.css';
import './LeftSideBar.css';
import './UserManagement.css';

const UserManagement = () => {
  return (
    <div className="main-content">
      <div className="card-container">
        <div className="card">
          <div className="card-content">
            <div className="card-text"><a href="#">Add User</a></div>
            <img src="App_Browsing_2.png" alt="" />
          </div>
        </div>
      </div>
      {/* Profile Section */}
      <div className="profile">
        <div className="profile-info">
          <img src="./Profile.png" alt="Profile Picture" className="profilePicture" />
          <h2 className="username">Roshdy</h2>
        </div>
        <div className="profile-details">
          <div className="icon">
            <p className="delete">
              <a href="#">Delete User</a>
              <a href="#"><i className="fas fa-trash"></i></a>
            </p>
            <p className="edit">
              <a href="#">Edit User</a>
              <a href="#"><i className="fas fa-pencil-alt"></i></a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;


