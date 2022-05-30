import { useEffect } from "react";
import gsap from "gsap";
import "./Projects.styles.css";

const Projects = () => {
  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".third-cap",
        end: "+=1400",
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
      ".anim",
      { x: -10, opacity: 0 },
      { x: 0, opacity: 1, stagger: 0.2 }
    );
  }, []);

  return (
    <div className="third-section">
      <div className="section-caption">
        <div className="caption third-cap">
          <div className="caption-title third-title" id="my-projects">
            03. My Projects
          </div>
          <div className="ul-text tag anim">{"<ul>"}</div>
          <div className="project-list">
            <div className="project-content ">
              <div className="li-text tag anim">{"<li>"}</div>
              <div className="e-caption">
                <div className="e-description">
                  <p className="e-title anim">Jotform Tables</p>
                  <div className="project-text anim">
                    This is my intern project which is a mobile app for Jotform
                    data. View your forms and forms' submissions. You can edit
                    or delete the submissions or you can create a new one.
                  </div>
                  <ul className="project-technologies">
                    <div className="e-list-item anim">React Native</div>
                    <div className="e-list-item anim">Typescript</div>
                    <div className="e-list-item anim">Jotform API</div>
                    <div className="e-list-item anim">Styled Components</div>
                    <div className="e-list-item anim">Redux Saga</div>
                  </ul>
                </div>
                <div className="e-image-container anim">
                  <img
                    src={require("../../assets/images/jotform/thumb.png")}
                    alt="1"
                    className="e-image c-ratio image-1"
                  />
                </div>
              </div>
              <div className="li-text tag anim">{"</li>"}</div>
            </div>
            <div className="project-content">
              <div className="li-text tag anim">{"<li>"}</div>
              <div className="e-caption">
                <div className="e-description">
                  <p className="e-title anim">Spike Rush</p>
                  <div className="project-text anim">
                    This is my first experience with Unity. I've struggled with
                    understanding how the Unity works. After 1-1.5 month later,
                    I built this game and published it on{" "}
                    <a href="#">Google Play Store</a>.
                  </div>
                  <ul className="project-technologies">
                    <div className="e-list-item anim">Unity</div>
                    <div className="e-list-item anim">C#</div>
                  </ul>
                </div>
                <div className="e-image-container spike-image anim">
                  <img
                    src={require("../../assets/images/spikerush/spikerush.png")}
                    alt="1"
                    className="e-image"
                  />
                </div>
              </div>
              <div className="li-text tag anim">{"</li>"}</div>
            </div>
            <div className="project-content">
              <div className="li-text tag anim">{"<li>"}</div>
              <div className="e-caption">
                <div className="e-description">
                  <p className="e-title anim">Master Mind</p>
                  <div className="project-text anim">
                    This is my first mobile game. I developed with Android
                    Studio. I tried to stick in rules of object-oriented
                    programming. I published this game on{" "}
                    <a href="#">Google Play Store</a>.
                  </div>
                  <ul className="project-technologies">
                    <div className="e-list-item anim">Android Studio</div>
                    <div className="e-list-item anim">Java</div>
                  </ul>
                </div>
                <div className="e-image-container spike-image anim">
                  <img
                    src={require("../../assets/images/mastermind/mastermind.png")}
                    alt="1"
                    className="e-image"
                  />
                </div>
              </div>
              <div className="li-text tag anim">{"</li>"}</div>
            </div>
          </div>
          <div className="ul-text end-ul tag anim" style={{ margin: 0 }}>
            {"</ul>"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
