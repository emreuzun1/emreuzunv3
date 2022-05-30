import gsap from "gsap";

const About = () => {
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

  return (
    <div className="second-section">
      <div className="section-caption">
        <div className="caption second-cap">
          <div className="caption-title second-title" id="about-me">
            02. About Me
          </div>
          <div className="p-title second-p tag">{"<p>"}</div>
          <div className="about-text">
            I was born in İzmir in 1999. I've started to write code when I was
            14. At my 16, I built a trojan virus. I graduated from Yaşar
            University in 2022. I've done my internship at Jotform. Since then,
            I am working at Cevher Digital Solutions as a Software Engineer.
          </div>
          <div className="p-title second-p tag">{"</p>"}</div>
        </div>
      </div>
    </div>
  );
};

export default About;
