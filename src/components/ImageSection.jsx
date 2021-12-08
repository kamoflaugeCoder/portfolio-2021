import React from "react";
import about from "../img/portImages/about.png";

function ImageSection() {
  return (
    <div className="ImageSection">
      <div className="img">
        <img src={about} alt="" />
      </div>
      <div className="about-info">
        <h4>
          Hello, my name is <span>Thomas Crowell</span>
        </h4>
        <p className="about-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="about-details">
          <div className="left-section">
            <p>Full Name:</p>
            <p>Age:</p>
            <p>Nationality:</p>
            <p>Languages:</p>
            <p>Address:</p>
            <p>Countries:</p>
          </div>
          <div className="right-section">
            <p>Thomas Crowell</p>
            <p>41</p>
            <p>American</p>
            <p>English</p>
            <p>123 Street, Indianapolis, IN 46220</p>
            <p>United States</p>
          </div>
        </div>
        <button className="btn">Download CV</button>
      </div>
    </div>
  );
}

export default ImageSection;
