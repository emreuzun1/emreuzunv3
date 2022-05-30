import gsap from "gsap";
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".fifth-cap",
        end: "+=400",
        scrub: 1,
      },
    });

    tl.fromTo(
      ".contact-title-anim",
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1 }
    );

    tl.fromTo(
      ".contact-anim",
      { x: -10, opacity: 0 },
      { x: 0, opacity: 1, stagger: 0.2 }
    );
  }, []);

  return (
    <div className="fifth-section " id="my-contact">
      <div className="section-caption">
        <div className="caption fifth-cap">
          <div className="caption-title contact-title-anim">05. Contact</div>
          <div className="p-title tag contact-anim">{"<p>"}</div>
          <div
            className="about-text contact-anim"
            style={{ paddingLeft: "1rem" }}
          >
            My inbox is always open. If you have any questions, please ask me.
          </div>
          <div className="p-title tag contact-anim">{"</p>"}</div>
          <div
            className="button-title tag contact-anim"
            style={{ marginTop: "1rem" }}
          >
            {"<button>"}
          </div>
          <div className="mail-btn-container contact-anim">
            <a href="mailto:uzun.emre1@outlook.com" className="mail-btn">
              Text Me!
            </a>
          </div>
          <div className="button-title tag contact-anim">{"</button>"}</div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
