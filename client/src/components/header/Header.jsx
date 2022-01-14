import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import './header.scss';
import { IMG_NOT_AVAILABLE } from './../../constants';

const Header = () => {
  const { user } = useContext(UserContext);
  const logout = () => {
    localStorage.clear();
    window.location.href = '/';
  };
  return (
    <header className="header">
      <div className="headerLeft">
        <Link to="/" className="link">
          <div className="headerLogo">MovieWorld</div>
        </Link>
        {user && (
          <>
            <Link to="/movies/" className="link">
              <div className="linkItem">Movies</div>
            </Link>
            <Link to="/serials/" className="link">
              <div className="linkItem">Serials</div>
            </Link>
            <Link to="/actors/" className="link">
              <div className="linkItem">Actors</div>
            </Link>
          </>
        )}
      </div>

      <div className="headerRight">
        {user && (
          <>
            <img src={user.profilePicture ? user.profilePicture : IMG_NOT_AVAILABLE} alt="" className="headerUserImg" />
            <span className="headerUserName">{user?.username}</span>
            <button className="logoutButton" onClick={logout}>
              Logout
            </button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
