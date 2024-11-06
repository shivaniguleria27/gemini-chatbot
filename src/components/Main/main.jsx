import React, { useState } from "react";
import "./main.css";
import { assets } from "../../assets/assets";
import runChat from "./runchat";

const Main = () => {
  const [value, setValue] = useState("");
  const [answers, setAnswers] = useState([]);

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        <div className="greet">
          <p>
            <span>Gemini clone</span>
          </p>
          <p>how can i help you</p>
        </div>
        {!answers.length > 0 ? (
          <>
            <div className="cards">
              <div className="card">
                <p>suggest some beautiful places for the upcoming road trip</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className="card">
                <p>suggest some beautiful places for the urban planning</p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div className="card">
                <p>suggest some beautiful places for the upcoming road trip</p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div className="card">
                <p>suggest some beautiful places for the upcoming road trip</p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title answers">
              {answers.map((text) => (
                <p>{text}</p>
              ))}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setValue(e.target.value)}
              value={value}
              type="text"
              placeholder="enter your prompt"
            />
            <div>
              <img src={assets.gallery_icon} alt="" />

              <img src={assets.mic_icon} alt="" />

              <img
                src={assets.send_icon}
                onClick={() => {
                  console.log("please provide me");
                  runChat(value);
                }}
                alt=""
              />
            </div>
          </div>
          <p className="bottom-info">gemini may display inaccurate info</p>
        </div>
      </div>
    </div>
  );
};
export default Main;
