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

  return <Home />;
}

export default App;
