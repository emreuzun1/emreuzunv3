import { useEffect } from "react";
import gsap from "gsap";
import "./Projects.styles.css";

const Projects = () => {
  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".third-cap",
        end: "+=1500",
        scrub: 1,
      },
    });
    timeline.fromTo(
      ".third-title",
      { y: -20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
      }
    );
    timeline.fromTo(
      ".first-ul",
      { x: -10, opacity: 0 },
      { x: 0, opacity: 1, delay: 0.2 }
    );

    timeline.fromTo(
      ".first-li",
      { x: -10, opacity: 0 },
      { x: 0, opacity: 1, delay: 0.2 }
    );
    timeline.fromTo(
      "#first-title",
      { x: -10, opacity: 0 },
      { x: 0, opacity: 1, delay: 0.1 }
    );
    timeline.fromTo(
      "#first-text",
      { x: -10, opacity: 0 },
      { x: 0, opacity: 1, delay: 0.2 }
    );
    timeline.fromTo(
      ".first-project",
      { y: -10, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2 }
    );

    timeline.fromTo(
      ".first-container",
      { x: 10, opacity: 0 },
      { x: 0, opacity: 1, delay: 0.3 }
    );

    timeline.fromTo(
      ".end-li",
      { x: -10, opacity: 0 },
      { x: 0, opacity: 1, delay: 0.2 }
    );
    timeline.fromTo(
      "#second-start-li",
      { x: -10, opacity: 0 },
      { x: 0, opacity: 1, delay: 0.2 }
    );
    timeline.fromTo(
      "#second-title",
      { x: -10, opacity: 0 },
      { x: 0, opacity: 1, delay: 0.1 }
    );

    timeline.fromTo(
      "#second-text",
      { x: -10, opacity: 0 },
      { x: 0, opacity: 1, delay: 0.2 }
    );

    timeline.fromTo(
      ".second-project",
      { y: -10, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2 }
    );

    timeline.fromTo(
      ".second-container",
      { x: 10, opacity: 0 },
      { x: 0, opacity: 1, delay: 0.3 }
    );

    timeline.fromTo(
      "#second-end-li",
      { x: -10, opacity: 0 },
      { x: 0, opacity: 1, delay: 0.2 }
    );

    timeline.fromTo(
      "#third-start-li",
      { x: -10, opacity: 0 },
      { x: 0, opacity: 1, delay: 0.2 }
    );
    timeline.fromTo(
      "#third-title",
      { x: -10, opacity: 0 },
      { x: 0, opacity: 1, delay: 0.2 }
    );

    timeline.fromTo(
      "#third-text",
      { x: -10, opacity: 0 },
      { x: 0, opacity: 1, delay: 0.2 }
    );

    timeline.fromTo(
      "#third-project",
      { x: -10, opacity: 0 },
      { x: 0, opacity: 1, delay: 0.2, stagger: 0.2 }
    );
    timeline.fromTo(
      "#third-container",
      { x: -10, opacity: 0 },
      { x: 0, opacity: 1, delay: 0.2 }
    );
    timeline.fromTo(
      "#third-end-li",
      { x: -10, opacity: 0 },
      { x: 0, opacity: 1, delay: 0.2 }
    );

    timeline.fromTo(
      "#end-ul",
      { x: -10, opacity: 0 },
      { x: 0, opacity: 1, delay: 0.2 }
    );
  }, []);

  return (
    <div className="third-section">
      <div className="section-caption">
        <div className="caption third-cap">
          <div className="caption-title third-title" id="my-projects">
            03. My Projects
          </div>
          <div className="ul-text first-ul tag">{"<ul>"}</div>
          <div className="project-list">
            <div className="project-content first-project">
              <div className="li-text first-li tag">{"<li>"}</div>
              <div className="e-caption">
                <div className="e-description">
                  <p className="e-title" id="first-title">
                    Jotform Tables
                  </p>
                  <div className="project-text" id="first-text">
                    This is my intern project which is a mobile app for Jotform
                    data. View your forms and forms' submissions. You can edit
                    or delete the submissions or you can create a new one.
                  </div>
                  <ul className="project-technologies">
                    <div className="e-list-item">
                      React Native
                    </div>
                    <div className="e-list-item first-project">
                      Typescript
                    </div>
                    <div className="e-list-item first-project">
                      Jotform API
                    </div>
                    <div className="e-list-item first-project">
                      Styled Components
                    </div>
                    <div className="e-list-item first-project">
                      Redux Saga
                    </div>
                  </ul>
                </div>
                <div className="e-image-container first-container">
                  <img
                    src={require("../../assets/images/jotform/thumb.png")}
                    alt="1"
                    className="e-image c-ratio image-1"
                  />
                </div>
              </div>
              <div className="li-text end-li tag">{"</li>"}</div>
            </div>
            <div className="project-content second-project">
              <div className="li-text tag" id="second-start-li">
                {"<li>"}
              </div>
              <div className="e-caption">
                <div className="e-description">
                  <p className="e-title" id="second-title">
                    Spike Rush
                  </p>
                  <div className="project-text" id="second-text">
                    This is my first experience with Unity. I've struggled with
                    understanding how the Unity works. After 1-1.5 month later,
                    I built this game and published it on{" "}
                    <a href="#">Google Play Store</a>.
                  </div>
                  <ul className="project-technologies">
                    <div className="e-list-item second-project">
                      Unity
                    </div>
                    <div className="e-list-item second-project">
                      C#
                    </div>
                  </ul>
                </div>
                <div className="e-image-container spike-image second-container">
                  <img
                    src={require("../../assets/images/spikerush/spikerush.png")}
                    alt="1"
                    className="e-image"
                  />
                </div>
              </div>
              <div className="li-text tag" id="second-end-li">
                {"</li>"}
              </div>
            </div>
            <div className="project-content third-project">
              <div className="li-text tag" id="third-start-li">
                {"<li>"}
              </div>
              <div className="e-caption">
                <div className="e-description">
                  <p className="e-title" id="third-title">
                    Master Mind
                  </p>
                  <div className="project-text" id="third-text">
                    This is my first mobile game. I developed with Android
                    Studio. I tried to stick in rules of object-oriented
                    programming. I published this game on{" "}
                    <a href="#">Google Play Store</a>.
                  </div>
                  <ul className="project-technologies">
                    <div className="e-list-item third-project">
                      Android Studio
                    </div>
                    <div className="e-list-item third-project">
                      Java
                    </div>
                  </ul>
                </div>
                <div className="e-image-container spike-image third-container">
                  <img
                    src={require("../../assets/images/mastermind/mastermind.png")}
                    alt="1"
                    className="e-image"
                  />
                </div>
              </div>
              <div className="li-text tag" id="third-end-li">
                {"</li>"}
              </div>
            </div>
          </div>
          <div className="ul-text end-ul tag">{"</ul>"}</div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
