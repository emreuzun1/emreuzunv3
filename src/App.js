import { Home } from "./Screens/Home";
import gsap, { Power3 } from "gsap";
import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.add("start")
      .fromTo(
        ".progress_text",
        {
          opacity: 0,
          y: -20,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          ease: "power4.easeInOut",
        },
        "start"
      )
      .to(
        ".progress_fill",
        {
          width: "100%",
          duration: 4,
          ease: "power4.easeInOut",
        },
        "start"
      )
      .to(
        ".black-bg",
        {
          width: "100%",
          duration: 4,
          ease: "power4.easeInOut",
        },
        "start"
      );
    tl.add("end")
      .to(
        ".progress",
        {
          y: -20,
          opacity: 0,
          duration: 0.5,
          ease: Power3.easeIn,
        },
        "end"
      )
      .to(
        ".progress_text",
        {
          y: -20,
          opacity: 0,
          duration: 0.5,
          ease: Power3.easeIn,
          delay: 0.2,
          onComplete: () => setIsFinished(true),
        },
        "end"
      );
  }, []);

  if (isFinished) {
    return <Home />;
  }

  return (
    <>
      <div className="splash" id="splash">
        <div className="text-container">
          <p className="progress_text">You</p>
          <p className="progress_text">are</p>
          <p className="progress_text">entering</p>
          <p className="progress_text">my</p>
          <p className="progress_text">world</p>
        </div>
        <div className="progress">
          <div className="progress_fill" id="fill"></div>
        </div>
        <div className="splash-anim black-bg"></div>
        <div className="splash-anim white-bg"></div>
      </div>
    </>
  );
}

export default App;
