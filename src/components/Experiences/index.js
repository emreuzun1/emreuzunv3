import gsap from "gsap";
import { useEffect } from "react";
import "./Experience.styles.css";

const Experiences = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        start: ".forth-section",
        end: ".end-ul",
        scrub: 1,
      },
    });
  }, []);

  return (
    <div className="forth-section" id="my-experience">
      <div className="section-caption">
        <div className="caption forth-cap">
          <div className="caption-title forth-title">04. My Experience</div>
          <div className="ul-text first-exp-ul tag">{"<ul>"}</div>
          <div className="exp-list">
            <div className="exp-content first-exp">
              <div className="li-text first-exp-li tag">{"<li>"}</div>
              <div className="e-caption">
                <div className="e-description">
                  <div className="">
                    <p className="e-title" id="exp-first-title">
                      Burger King - <span>Cashier / Line Cook</span>
                    </p>
                    <p className="e-title" id="exp-first-date"></p>
                  </div>

                  {/* <div className="e-text" id="first-exp-text">
                    This is my intern project which is a mobile app for Jotform
                    data. View your forms and forms' submissions. You can edit
                    or delete the submissions or you can create a new one.
                  </div>
                  <ul className="e-list">
                    <div className="e-list-item exp-item">Redux Saga</div>
                  </ul> */}
                </div>
                <div className="e-image-container">
                  <img
                    className="exp-image c-ratio"
                    src={require("../../assets/images/cds/cds_logo.png")}
                    alt="BK"
                  />
                </div>
              </div>
              <div className="li-text end-li tag">{"</li>"}</div>
            </div>
          </div>
          <div className="ul-text end-exp-ul tag">{"</ul>"}</div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
