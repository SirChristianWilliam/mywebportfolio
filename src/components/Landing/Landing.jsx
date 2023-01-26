import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import "./Landing.css";
function Landing() {

  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (!isFirstRender.current) {
      setIsVisible(false);
    }
    isFirstRender.current = false;
  }, [location.pathname]);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 100);
  }, [isVisible]);
  
  const [checked, setChecked] = React.useState(false);
  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <>
      <div className={`fade-in ${isVisible ? 'visible' : 'hidden'} landingPageContainer`}>
        
        <div className="profileImgContainer">
          <img src="/ignoredImages/mePro2.jpg" width="400px" />
          <div className="landingAboutContainer">
          <h2>Christian W Maki </h2>
          <h3>
            Full Stack Software Engineer
          </h3>
        </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
