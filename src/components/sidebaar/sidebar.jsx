import React from "react";
import "./sidebar.css";
import { assets } from "../../assets/assets";
import { useState } from "react";

const Sidebar = () => {
  const [extented, setExtended] = useState(false);

  return (
    <div className="sidebar">
      <div className="top">
        <img
          onClick={() => {
            setExtended(prev=>!prev);
          }}
          className="menu"
          src={assets.menu_icon}
          alt="Menu Icon"
        />
        <div className="new-chat">
          <img src={assets.plus_icon} alt="Plus Icon" />
          {extented ? <p>new chat</p> : null}
        </div>
        {extented ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            <div className="recent-entry">
              <img src={assets.message_icon} alt="Message Icon" />
              <p>what is React...</p>
            </div>
          </div>
        ) : null}
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="Question Icon" />
          {extented ? <p>Help</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="History Icon" />
          {extented ? <p>Activity</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="Settings Icon" />
          {extented ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
