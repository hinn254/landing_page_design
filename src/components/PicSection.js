import React from "react";

const PicSection = () => {
  return (
    <div className="pic-section">
      <img src="./backg.jpeg" alt="" />
      <div className="det">
        <h2>Woman</h2>
        <h2 className="side">Lookbook</h2>
        <i className="fal fa-arrow-right arr"></i>
      </div>
      <div className="details">
        <h1>ICON</h1>
        <br />
        <h1 className="sec">YOURSELF</h1>
      </div>
      <div className="copyright">
        <p>
          &copy;<a href="https://github.com/hinn254">BennyWorld</a>
        </p>
      </div>
    </div>
  );
};

export default PicSection;
