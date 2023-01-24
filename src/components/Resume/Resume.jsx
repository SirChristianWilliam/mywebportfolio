import React from "react";
import "./Resume.css";
function Resume() {
  return (
    <>
       <div className="resumeContainer">
        <h3 className="clickToOpen">
          <a href="images/Christian Maki Resume.pdf" target="_blank">
            Click here to view Resume in new tab
          </a>
        </h3>
        <iframe
          width="75%"
          height="1100px"
          src="images/Christian Maki Resume.pdf"
          title="My Resume"
        ></iframe>
      </div>
    </>
  );
}

export default Resume;
