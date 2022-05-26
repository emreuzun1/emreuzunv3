import "./Home.css";
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { AiFillLinkedin, AiFillInstagram, AiFillGithub } from "react-icons/ai";
import Navbar from "../components/Navbar";

gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(ScrollTrigger);

export const Home = () => {
  useEffect(() => {
    let tl = gsap.timeline({
      delay: 0.1,
    });

    gsap.to(".first-section", {
      scrollTrigger: {
        trigger: ".section-cap",
        end: "+=300",
        scrub: 1,
      },
      y: -20,
      opacity: 0,
    });

    tl.fromTo(".caption-title", { y: -20, opacity: 0 }, { y: 0, opacity: 1 });

    tl.fromTo(
      ".h1",
      {
        x: -20,
        opacity: 0,
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

    let secondtl = gsap.timeline({
      scrollTrigger: {
        trigger: ".second-cap",
        end: "+=500",
        scrub: 1,
      },
    });
    secondtl.fromTo(
      ".second-title",
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1 }
    );
    secondtl.fromTo(
      ".second-p",
      {
        x: -20,
        opacity: 0,
      },
      { duration: 0.2, x: 0, ease: "power4.inOut", opacity: 1, stagger: 0.2 }
    );
    secondtl.fromTo(
      ".about-text",
      { x: -20, opacity: 0 },
      {
        opacity: 1,
        x: 0,
        ease: "power4.inOut",
      }
    );
  }, []);

  return (
    <div className="container" id="container">
      <div className="contact">
        <div className="contact-item">
          <div className="contact-bar" />
          <AiFillLinkedin size={24} className="contact-icon" />
        </div>
        <div className="contact-item">
          <div className="contact-bar" />
          <AiFillInstagram size={24} className="contact-icon" />
        </div>
        <div className="contact-item">
          <div className="contact-bar" />
          <AiFillGithub size={24} className="contact-icon" />
        </div>
      </div>
      <Navbar />
      <div className="sections"></div>
      <div className="first-section">
        <div className="h1-container">
          <div className="caption">
            <div className="caption-title">01. Hello World!</div>
          </div>
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
        <div className="section-caption">
          <div className="caption second-cap">
            <div className="caption-title second-title">02. About Me</div>
            <div className="p-title second-p">{"<p>"}</div>
            <div className="about-text">
              I was born in İzmir in 1999. I've started to write code when I was
              14. At my 16, I built a trojan virus. I graduated from Yaşar
              University in 2022. I've done my internship at Jotform. Since
              then, I am working at Cevher Digital Solutions as a Software
              Engineer.
            </div>
            <div className="p-title second-p">{"</p>"}</div>
            <div className="about-image-list">
              <div className="about-image-item">
                <img
                  src={require("../assets/images/img1.png")}
                  alt="1"
                  className="about-image c-ratio"
                />
              </div>
              <div className="about-image-item">
                <img
                  src={require("../assets/images/img2.png")}
                  alt="1"
                  className="about-image c-ratio"
                />
              </div>
              <div className="about-image-item">
                <img
                  src={require("../assets/images/img1.png")}
                  alt="1"
                  className="about-image c-ratio"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
