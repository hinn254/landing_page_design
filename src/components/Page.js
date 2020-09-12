import React from "react";
import Navbar from "./Navbar";
import SocialLinks from "./SocialLinks";
import PicSection from "./PicSection";
const Page = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="main-section">
        <SocialLinks />
        <PicSection />
      </div>
    </div>
  );
};

export default Page;
