import React from "react";
import {
  FaGithub,
  FaCamera,
  FaCircleNotch,
  FaApple,
  FaFileVideo,
  FaSearchDollar,
} from "react-icons/fa";

export default function Service() {
  const Aarryy1 = {
    mainHeader: "SERVICES",
    subHeading: "My Services",
    text: "Customers don’t expect you to be perfect. They do expect you to fix things when they go wrong.",
  };
  const Aarryy2 = [
    {
      id: 1,
      icon: <FaGithub />,
      headline: "Web Develpment",
      text: "Web development builds and maintains websites and applications using programming languages, frameworks, and tools for online access.",
    },
    {
      id: 2,
      icon: <FaCircleNotch />,
      headline: "Web Desing",
      text: "Web design is the process of creating visually appealing and user-friendly websites using various design tools and techniques.",
    },
    {
      id: 3,
      icon: <FaCamera />,
      headline: "Photography",
      text: "Photography is the art and practice of capturing and producing images using a camera and various techniques to convey a message or tell a story.",
    },
    {
      id: 4,
      icon: <FaApple />,
      headline: "App devlopment",
      text: "App development is the process of creating software applications for mobile devices or computers using programming languages and frameworks.",
    },
    {
      id: 5,
      icon: <FaFileVideo />,
      headline: "Video Editing",
      text: "Video editing is the process of manipulating and rearranging video footage, adding special effects and sound to create a final product.",
    },

    {
      id: 6,
      icon: <FaSearchDollar />,
      headline: "SEO Expert",
      text: "An SEO expert is a professional who uses various techniques to optimize websites and increase their visibility in search engine results.",
    },
  ];
  return (
    <div className="container-fluid service" id="services">
      <div className="top_Pice">
        <p className="service_Main_Heading">{Aarryy1.mainHeader}</p>
        <h1 className="service_Sub_Heading">{Aarryy1.subHeading}</h1>
        <p className="service_text">{Aarryy1.text}</p>
        <p className="service_line"></p>
      </div>
      <div className="bottom_Pice">
        <div className="section">
          {Aarryy2.map((obj) => {
            return (
              <div className="service_bottom_section" key={obj.id}>
                <div className="service-icon">{obj.icon}</div>
                <h2 className="service_bottom_heading">{obj.headline}</h2>
                <p className="service_bottom_text">{obj.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
