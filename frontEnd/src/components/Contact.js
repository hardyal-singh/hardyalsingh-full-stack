import React, { useState } from "react";
import axios from "axios";
import { faAddressCard, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Contact() {
  const [user, setUser] = useState({ name: "", email: "", message: "" });
  
  const justChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const result = () => {
    const { name, email, message } = user;
    if (name && email && message) {
      axios
        .post("http://localhost:5000/message", user)
        .then((res) => {
          alert(res.data.message)
         
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert("invalid input");
    }
  };

  return (
    <div className="contact" id="contact">
      <div className="contact_top">
        <p className="contact_top_heading">Contact</p>
        <p className="contact_top_subHeading">
          Learning the theory is good, but applying your knowledge on a project
          is AWESOME!!
        </p>
        <div className="service_line"></div>
      </div>
      <div className="contact_bottom">
        <div className="contact_left">
          <FontAwesomeIcon className="contact_left_icon" icon={faAddressCard} />
        </div>
        <div className="contact_right">
          <div className="contact_right_form">
            <form className="contact_form" onSubmit={(event) => event.preventDefault()}>
              <div className="forName">
                <label htmlFor="fullName" className="label">
                  Full Name:
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="name"
                  value={user.name}
                  className="form-control"
                  onChange={justChange}
                />
              </div>
              <div className="forEmail">
                <label htmlFor="email" className="label">
                  Enter Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={user.email}
                  className="form-control"
                  onChange={justChange}
                />
              </div>
              <div className="fortextarea">
                <label htmlFor="textarea" className="label">
                  Enter Masseage:
                </label>
                <textarea
                  id="textarea"
                  value={user.message}
                  name="message"
                  className="form-control"
                  rows="3"
                  onChange={justChange}
                />
              </div>

              <button
                type="submit"
                className="form-control contact_form_submit"
                onClick={result}
              >
                Send
              </button>
            </form>
          </div>

          <div className="contact_right_icons">
            <a href="mailto:hardyalsinghdaudsar@gmail.com" target="_blank" rel="noreferrer"><FontAwesomeIcon className="contact_right_icon" icon={faEnvelope} /></a>

            <a href="https://www.linkedin.com/in/hardyal-singhh/" target="_blank" rel="noreferrer" > <FontAwesomeIcon className="contact_right_icon" icon={faLinkedin} /></a>
            <a href="https://www.instagram.com/harsh.badgujars" target="_blank" rel="noreferrer"><FontAwesomeIcon className="contact_right_icon"  icon={faSquareInstagram} /></a>
          </div>
        </div>
      </div>
    </div>
  );
}
