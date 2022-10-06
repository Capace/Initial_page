import React, { Component } from "react";
import { MainTitle } from "../components/hero/title-box";

import symbol from "../components/imgs/symbolnew.svg";

import "../pages/hero.css";

const Hero = () => {
  return (
    <div>
      <div className="hero-container"></div>

      <div className="main-header">
        <h1>XLEARN</h1>
        <span className="subtitle">The new way of mastering medical sh!t</span>
        <button className="btn">Learn More</button>
      </div>
      <div className="svg-container">
        <img src={symbol} className="symbol-svg" />
        {/* <svg>
          <use xlinkHref={symbol} />
        </svg> */}
      </div>
    </div>
  );
};

export default Hero;
