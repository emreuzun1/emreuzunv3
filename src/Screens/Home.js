import "./Home.css";
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { TextPlugin } from "gsap/TextPlugin";
import { AiFillLinkedin, AiFillInstagram, AiFillGithub } from "react-icons/ai";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Experiences from "../components/Experiences";
import Contact from "../components/Contact";
import About from "../components/About";

gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

const words = ["Front-end Developer", "Mobile Developer", "Gamer"];

export const Home = () => {
  useEffect(() => {
    let textTl = gsap.timeline({ repeat: -1 });
    words.forEach((word) => {
      let tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1 });
      tl.to(".job-title", { text: word, duration: 2 });
      textTl.add(tl);
    });

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
        y: 5,
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
          <a href="https://www.linkedin.com/in/emreuzun1/">
            <AiFillLinkedin size={24} className="contact-icon" />
          </a>
        </div>
        <div className="contact-item">
          <div className="contact-bar" />
          <a href="https://www.instagram.com/emre.uzunn/">
            <AiFillInstagram size={24} className="contact-icon" />
          </a>
        </div>
        <div className="contact-item">
          <div className="contact-bar" />
          <a href="https://github.com/emreuzun1">
            <AiFillGithub size={24} className="contact-icon" />
          </a>
        </div>
      </div>
      <Navbar />
      <div className="sections"></div>
      <div className="first-section" id="first-section">
        <div className="h1-container">
          <div className="caption">
            <div className="caption-title" id="hello-world">
              01. Hello World!
            </div>
          </div>
          <div className="h1 h1-open tag">{"<h1>"}</div>
          <div className="hi-container">
            <p className="hi">
              <span className="hi hi-text">Hi, my name is</span>
              <p className="hi">Emre Uzun</p>
              <div className="job-title-container">
                I'm a <span className="hi job-title"></span>
              </div>
            </p>
          </div>
          <p className="h1 h1-close tag">{"</h1>"}</p>
        </div>
        <div className="mouse">
          <div className="scroll" />
        </div>
      </div>
      <About />
      <Projects />
      <Experiences />
      <Contact />
    </div>
  );
};
