import React from "react";
import pic from "./images/man-03.jpg"
import {
  FaFacebookF,
  FaTwitter,
  FaPinterest,
  FaInstagram,
  FaPlay,
} from "react-icons/fa";
export default function Home() {
  return (
    <div className="container-fluid home" path="">
      <div className="roww">
        <div className="left">
          <div className="social-media-icons">
            <li className="icon">
              <FaFacebookF />
            </li>
            <li className="icon">
              <FaTwitter />
            </li>
            <li className="icon">
              <FaPinterest />
            </li>
            <li className="icon">
              <FaInstagram />
            </li>
          </div>
          <div className="ownerName">
            <h1>I`m Harsh</h1>
          </div>
          <div className="dicription">
            <p>
              i,m Harsh, professional MERN Stack Developer with long time
              experience in this field​
            </p>
          </div>
          <div className="buttons">
            <button type="button" className="button1">
              <a href="#portfolio">Portfolio</a>
            </button>
            <button type="button" className="button2">
              <FaPlay />
            </button>
          </div>
        </div>
        <div className="right">
          <img className="man-pic" src={pic} alt="hardyal" />
        </div>
      </div>
    </div>
  );
}
