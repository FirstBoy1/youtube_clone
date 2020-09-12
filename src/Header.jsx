import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';

import './Header.css';

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <img
          className="header__logo"
          src="https://i.ytimg.com/vi/NlVpLOb_7c0/maxresdefault.jpg"
          alt="youtube"
        />
      </div>
      <div className="header__input">
        <input placeholder="Search" type="text" />
        <SearchIcon className="header__inputButton" />
      </div>
      <div className="header__icons">
        <VideoCallIcon className="header__icon" />
        <AppsIcon className="header__icon" />
        <NotificationsIcon className="header__icon" />
        <Avatar
          alt="Sarah"
          src="https://instagram.flhe7-1.fna.fbcdn.net/v/t51.2885-19/s150x150/117729899_358751148865320_1047082825971456018_n.jpg?_nc_ht=instagram.flhe7-1.fna.fbcdn.net&_nc_ohc=68eZy-XYIQQAX_JOQkd&oh=764128950aeb4be4c235f6349b5a0ceb&oe=5F7D2C24"
          className="header__icon"
        />
      </div>
    </div>
  );
}

export default Header;
