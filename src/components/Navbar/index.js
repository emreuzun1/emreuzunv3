import gsap from "gsap";
import { useEffect } from "react";
import "./Navbar.styles.css";

const Navbar = () => {
  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.1 });
    tl.fromTo(
      ".section-item",
      { y: -10, opacity: 0 },
      { y: 0, opacity: 1, ease: "power4.inOut", stagger: 0.2 }
    );
  }, []);

  return (
    <div className="e-navbar">
      <div
        className="section-item"
        onClick={() =>
          document
            .getElementById("first-section")
            .scrollIntoView({ behavior: "smooth" })
        }
      >
        <span className="section-button">Home</span>
      </div>
      <div
        className="section-item"
        onClick={() =>
          document
            .getElementById("about-me")
            .scrollIntoView({ behavior: "smooth" })
        }
      >
        <span className="section-button">About</span>
      </div>
      <div
        className="section-item"
        onClick={() =>
          document
            .getElementById("my-projects")
            .scrollIntoView({ behavior: "smooth" })
        }
      >
        <span className="section-button">Projects</span>
      </div>
      <div
        className="section-item"
        onClick={() =>
          document
            .getElementById("my-experience")
            .scrollIntoView({ behavior: "smooth" })
        }
      >
        <span className="section-button">Experience</span>
      </div>
      <div
        className="section-item"
        onClick={() =>
          document
            .getElementById("my-contact")
            .scrollIntoView({ behavior: "smooth" })
        }
      >
        <span className="section-button">Contact</span>
      </div>
    </div>
  );
};

export default Navbar;
