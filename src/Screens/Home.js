import "./Home.css";
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { AiFillLinkedin, AiFillInstagram, AiFillGithub } from "react-icons/ai";

gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(ScrollTrigger);

export const Home = () => {
  useEffect(() => {
    let tl = gsap.timeline({ delay: 0.1 });

    tl.fromTo(
      ".h1",
      {
        x: -20,
      },
      { duration: 0.2, x: 0, ease: "power4.inOut", opacity: 1, stagger: 0.2 }
    );
    tl.fromTo(
      ".hi",
      { y: 20 },
      {
        y: 0,
        opacity: 1,
        duration: 0.3,
        ease: "power4.inOut",
        delay: 0.1,
        stagger: 0.1,
      }
    );

    tl.fromTo(".mouse", { opacity: 0 }, { opacity: 1 });

    gsap.fromTo(
      ".scroll",
      { y: 0 },
      {
        y: 10,
        duration: 1,
        ease: "power4.inOut",
        repeat: -1,
        yoyo: true,
      }
    );
    tl.fromTo(".contact-bar", { width: 0 }, { width: "50%" });
    tl.fromTo(".contact-icon", { opacity: 0 }, { opacity: 1 });
  }, []);

  return (
    <div className="container" id="container">
      <div className="contact">
        <div className="contact-item">
          <div className="contact-bar" />
          <AiFillLinkedin size={24} color="black" className="contact-icon" />
        </div>
        <div className="contact-item">
          <div className="contact-bar" />
          <AiFillInstagram size={24} color="black" className="contact-icon" />
        </div>
        <div className="contact-item">
          <div className="contact-bar" />
          <AiFillGithub size={24} color="black" className="contact-icon" />
        </div>
      </div>
      <div className="sections"></div>
      <div className="first-section">
        <div className="h1-container">
          <p className="h1 h1-open">{"<h1>"}</p>
          <div className="hi-container">
            <p className="hi">
              Hi<span className="hi"> there</span>
              <p className="hi">My name is </p>
              <p className="hi">Emre</p>
            </p>
          </div>
          <p className="h1 h1-close">{"</h1>"}</p>
        </div>
        <div className="mouse">
          <div className="scroll" />
        </div>
      </div>
      <div className="second-section">
        
      </div>
    </div>
  );
};
