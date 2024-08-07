import React from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
const Main = () => {
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        <div className="greet">
          <p>
            <span>Hello, Dev.</span>
          </p>
          <p>How can I help you today?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Tiến bộ về công nghệ</p>
            <img src={assets.compass_icon} alt="" />
          </div>
          <div className="card">
            <p>Môn thể thao theo mùa</p>
            <img src={assets.bulb_icon} alt="" />
          </div>
          <div className="card">
            <p>Bảng so sánh</p>
            <img src={assets.message_icon} alt="" />
          </div>
          <div className="card">
            <p>Eat Healthy</p>
            <img src={assets.code_icon} alt="" />
          </div>
        </div>
        <div className="main-bottom">
          <div className="search-box">
            <input type="text" placeholder="Enter a prompt here" />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img src={assets.send_icon} alt="" />
            </div>
          </div>
          <div className="bottom-infor">
            Gemini có thể đưa ra thông tin không chính xác, kể cả thông tin về
            con người, vì vậy, hãy xác minh các câu trả lời của Gemini. Quyền
            riêng tư của bạn và Các ứng dụng Gemini
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
