import React from "react";
import "../css/Banner.css";
import image1 from "../assets/girlmusic.png";

function Banner() {
  return (
    <div className="banner_container">
      <h2 className="banner_text">
        Grab up to 50% off on <br />
        selected headphone
      </h2>
      <div>
        <img src={image1} width={220} height={310} alt="" />
      </div>
    </div>
  );
}

export default Banner;
