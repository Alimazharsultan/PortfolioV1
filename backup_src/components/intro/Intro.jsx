import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import ResumePDF from './ali.pdf'


export default function Intro() {
  
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["Python (Web Scraping, ML, CV, etc.)","Django (Full Stack)", "Flutter (Android Development)", "React (Front-End)", "MATLAB (Robotics and ML)", "ESP32 and Arduino (Embedded)","Proteus (Circuit Design)", "SolidWorks"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/aliv2.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Welcome to my Portfolio Site</h2>
          <div className="nameIntro">
            <h1> <span>I'm</span> Ali Bin Mazhar</h1>
            <h4>A mechatronics engineer and IoT Expert</h4>
            <h3>
              With hands-on experience 
            </h3>
            <h3>on <span ref={textRef}></span></h3>
          </div>
      

        <button
          className='CVButton'
          type='submit'
          onClick={() => window.open(ResumePDF)}
        >
         CV
        </button>
      

     
      </div>
        </div>
      
    </div>
  );
}
