import React from "react";

const SocialLinks = () => {
  return (
    <div className="social-links">
      <div className="s-links">
        <a href="#">
          <i className="fab fa-facebook-messenger fa-2x"></i>
        </a>

        <a href="#">
          <i className="fab fa-facebook fa-2x"></i>
        </a>
        <a href="#">
          {" "}
          <i className="fab fa-instagram fa-2x"></i>
        </a>
        <a href="#">
          <i className="fab fa-whatsapp fa-2x"></i>
        </a>
        <a href="#">
          {" "}
          <i className="fab fa-twitter-square fa-2x"></i>
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
