import React, { useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faShieldAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('home');

  const handleItemClick = (item) => {
    setActiveItem(item);
    // Perform navigation or other actions based on the selected item
    switch (item) {
      case 'home':
        console.log('Navigate to Home');
        break;
      case 'security':
        console.log('Navigate to Security');
        break;
      case 'logout':
        console.log('Logout');
        break;
      default:
        break;
    }
  };

  return (
    <div className="sidebar">
      <ul>
        <li className={activeItem === 'home' ? 'active' : ''} onClick={() => handleItemClick('home')}>
          <a href="#">
            <FontAwesomeIcon icon={faHome} className="icon" />
            Home
          </a>
        </li>
        <li className={activeItem === 'security' ? 'active' : ''} onClick={() => handleItemClick('security')}>
          <a href="#">
            <FontAwesomeIcon icon={faShieldAlt} className="icon" />
            Security
          </a>
        </li>
        <li className={activeItem === 'logout' ? 'active' : ''} onClick={() => handleItemClick('logout')}>
          <a href="#">
            <FontAwesomeIcon icon={faSignOutAlt} className="icon" />
            Logout
          </a>
        </li>
      </ul>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="content">
        <h1>Main Content</h1>
        <p>This is the main content area.</p>
      </div>
    </div>
  );
}

export default App;
