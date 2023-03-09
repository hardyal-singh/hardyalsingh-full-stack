import React from "react";
import pis from "./images/man-02.jpg"
import {
  faHtml5,
  faCss3,
  faJs,
  faReact,
  faNode,
  faSass,
  faGithub,faAngular
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DiMongodb } from "react-icons/di";
export default function About() {
  return (
    <div className="about" id="about">
      <div className="about_first">
        <img className="about_first_01" src={pis} alt="hardyal" />
      </div>
      <div className="about_second">
        <p className="about_second_01">HELLO EVERYBODY,I AM</p>
        <h1 className="about_second_02">HARDYAL SINGH</h1>
        <h3 className="about_second_03">MERN STACK DEV</h3>
        <p className="about_second_04">
          I love solving problems using JavaScript and represent Data in a
          meaningful way. Also, I like pushing myself and taking up new
          challenges.
        </p>
      </div>
      <div className="about_third">
        <h1 className="about_third_01">ABOUT MYSELF</h1>
        <p className="about_third_2">
          I'm a Freshman pursuing B.Sc at MDSU University, Ajmer. I am always
          ready to have new experiences, meet new people and learn new things. I
          find the idea of creating value for people and impacting the world
          through my work gratifying.
        </p>
      </div>
      <div className="about_forth">
        <h1 className="about_forth_01">MY SKILLS</h1>
        <div className="about_forth_02">
          <FontAwesomeIcon className="about_forth_icon" icon={faHtml5} />
          <FontAwesomeIcon className="about_forth_icon" icon={faCss3} />
          <FontAwesomeIcon className="about_forth_icon" icon={faJs} />
          <FontAwesomeIcon className="about_forth_icon" icon={faReact} />
          <FontAwesomeIcon className="about_forth_icon" icon={faNode} />
          <FontAwesomeIcon  className="about_forth_icon"icon={faSass} />
          <FontAwesomeIcon className="about_forth_icon" icon={faGithub} />
          <FontAwesomeIcon className="about_forth_icon" icon={faAngular} />
          <DiMongodb className="about_forth_icon"/>
        </div>
      </div>
    </div>
  );
}
