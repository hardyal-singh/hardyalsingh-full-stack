import React from "react";
import img1 from "./images/pro-01.jpg"
import img2 from "./images/pro-02.jpg"
import img3 from "./images/pro-03.jpg"
import img4 from "./images/pro-04.jpg"

export default function Portfolio() {
  const projectItem = [
    {
      id: 1,
      img: img1,
      title: "Profolio Website",
      url: "#",
      alt: "porfolio_pic_01",
    },
    {
      id: 2,
      img:img2,
      title: "Profolio Website",
      url: "#",
      alt: "porfolio_pic_02",
    },

    {
      id: 3,
      img: img3,
      title: "Profolio Website",
      url: "#",
      alt: "porfolio_pic_03",
    },
    {
      id: 4,
      img: img4,
      title: "Profolio Website",
      url: "#",
      alt: "porfolio_pic_04",
    },
  ];
  return (
    <div className="container-fluid portfolio" id="portfolio">
      <div className="portfolio_top">
        <h2 className="my_project">My Latest Project</h2>
        <p className="my_project_text">
          Learning the theory is good, but applying your knowledge on a project
          is AWESOME!!
        </p>
        <div className="service_line"></div>
      </div>
      <div className="portfolio_bottoms">
        <div className="portfolio_bottom">
          {projectItem.map((item) => {
            return (
              <div className="portfolio_item" key={item.id}>
                <div>
                  <img
                    className="portfolio_img "
                    src={item.img}
                    alt={item.alt}
                  />
                </div>
                <div>
                  <p className="portfolio_title">{item.title}</p>

                  <a className="source_code_url" href={item.url}>
                    Source Code
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
