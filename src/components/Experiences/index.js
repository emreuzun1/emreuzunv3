import gsap from "gsap";
import { useEffect } from "react";
import { BsFillCaretRightFill } from "react-icons/bs";
import "./Experience.styles.css";

const Experiences = () => {
  useEffect(() => {
    const expTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".forth-section",
        end: "+=1600",
        scrub: 1,
      },
    });

    expTl.fromTo(
      ".forth-title",
      {
        y: 10,
        opacity: 0,
      },
      { y: 0, opacity: 1 }
    );
    expTl.fromTo(
      ".exp-anim",
      { x: -10, opacity: 0 },
      { x: 0, opacity: 1, stagger: 0.2 }
    );
  }, []);

  return (
    <div
      className="forth-section"
      id="my-experience"
      style={{ paddingBottom: "6rem" }}
    >
      <div className="section-caption">
        <div className="caption forth-cap">
          <div className="caption-title forth-title">04. My Experience</div>
          <div className="ul-text tag exp-anim">{"<ul>"}</div>
          <div className="exp-list">
            <div className="exp-content exp-anim">
              <div className="li-text exp-anim tag">{"<li>"}</div>
              <div
                className="e-caption"
                style={{ marginTop: "1rem", marginBottom: "1rem" }}
              >
                <div className="e-description">
                  <div className="">
                    <div className="e-title exp-anim">
                      Cevher Digital Solutions
                      <div className="e-job-title exp-anim">
                        Software Engineer
                      </div>
                    </div>
                  </div>

                  <div
                    className="e-text exp-anim"
                    style={{ fontStyle: "italic", marginTop: "0.5rem" }}
                  >
                    01/2022 - Present
                  </div>
                  <div
                    style={{ display: "flex", marginTop: "1rem" }}
                    className="exp-anim"
                  >
                    <BsFillCaretRightFill size={18} color="#2f334c" />
                    <div
                      className="e-text"
                      id="first-exp-text"
                      style={{ maxWidth: "95%" }}
                    >
                      Write modern and clean code for client
                    </div>
                  </div>
                  <div
                    className="exp-anim"
                    style={{ display: "flex", marginTop: "0.5rem" }}
                  >
                    <BsFillCaretRightFill size={18} color="#2f334c" />
                    <div className="e-text" style={{ maxWidth: "95%" }}>
                      Work with a variety of different languages, platforms and
                      frameworks such as JavaScript, TypeScript, React, React
                      Native, NestJS
                    </div>
                  </div>
                  <div
                    className="exp-anim"
                    style={{ display: "flex", marginTop: "0.5rem" }}
                  >
                    <BsFillCaretRightFill size={18} color="#2f334c" />
                    <div className="e-text" style={{ maxWidth: "95%" }}>
                      Communicate with engineers, managers and designers.
                    </div>
                  </div>
                </div>
                <div className="e-image-container spike-image exp-anim">
                  <img
                    className="exp-image c-ratio"
                    src={require("../../assets/images/cds/cds_logo.png")}
                    alt="CDS"
                  />
                </div>
              </div>
              <div className="li-text exp-anim tag">{"</li>"}</div>
            </div>
            <div className="exp-content exp-anim">
              <div className="li-text exp-anim tag">{"<li>"}</div>
              <div
                className="e-caption"
                style={{ marginTop: "1rem", marginBottom: "1rem" }}
              >
                <div className="e-description">
                  <div className="">
                    <div className="e-title exp-anim">
                      Cevher Jant Sanayii A.Ş
                      <div className="e-job-title">Software Engineer</div>
                    </div>
                  </div>
                  <div
                    className="e-text exp-anim"
                    style={{ fontStyle: "italic", marginTop: "0.5rem" }}
                  >
                    11/2021 - 01/2022
                  </div>
                  <div
                    style={{ display: "flex", marginTop: "1rem" }}
                    className="second-exp-desc-item exp-anim"
                  >
                    <BsFillCaretRightFill size={18} color="#2f334c" />
                    <div
                      className="e-text exp-anim"
                      style={{ maxWidth: "95%" }}
                    >
                      Experienced backend development with NestJS
                    </div>
                  </div>
                  <div
                    style={{ display: "flex", marginTop: "0.5rem" }}
                    className="third-exp-desc-item exp-anim"
                  >
                    <BsFillCaretRightFill size={18} color="#2f334c" />
                    <div
                      className="e-text exp-anim"
                      style={{ maxWidth: "95%" }}
                    >
                      Built a mobile application with React Native that includes
                      Google Maps API to import Google Maps
                    </div>
                  </div>
                </div>
                <div className="e-image-container spike-image exp-anim">
                  <img
                    className="exp-image c-ratio"
                    src={require("../../assets/images/cevher/cevher.png")}
                    alt="Cevher"
                  />
                </div>
              </div>
              <div className="li-text exp-anim tag">{"</li>"}</div>
            </div>
            <div className="exp-content exp-anim">
              <div className="li-text exp-anim tag">{"<li>"}</div>
              <div
                className="e-caption"
                style={{ marginTop: "1rem", marginBottom: "1rem" }}
              >
                <div className="e-description">
                  <div className="">
                    <div className="e-title exp-anim">
                      Jotform
                      <div className="e-job-title">Intern</div>
                    </div>
                  </div>
                  <div
                    className="e-text exp-anim"
                    style={{ fontStyle: "italic", marginTop: "0.5rem" }}
                  >
                    06/2021 - 09/2021
                  </div>
                  <div
                    style={{ display: "flex", marginTop: "1rem" }}
                    className="second-exp-desc-item exp-anim"
                  >
                    <BsFillCaretRightFill size={18} color="#2f334c" />
                    <div
                      className="e-text exp-anim"
                      style={{ maxWidth: "95%" }}
                    >
                      Experienced new technologies such as TypeScript and
                      Redux-Saga
                    </div>
                  </div>
                  <div
                    style={{ display: "flex", marginTop: "0.5rem" }}
                    className="third-exp-desc-item exp-anim"
                  >
                    <BsFillCaretRightFill size={18} color="#2f334c" />
                    <div
                      className="e-text exp-anim"
                      style={{ maxWidth: "95%" }}
                    >
                      Developed a mobile application for company with a mentor
                      and UI team
                    </div>
                  </div>
                  <div
                    style={{ display: "flex", marginTop: "0.5rem" }}
                    className="third-exp-desc-item exp-anim"
                  >
                    <BsFillCaretRightFill size={18} color="#2f334c" />
                    <div
                      className="e-text exp-anim"
                      style={{ maxWidth: "95%" }}
                    >
                      Published source code in{" "}
                      <a href="https://github.com/emreuzun1/JotForm-Tables">
                        Github
                      </a>
                    </div>
                  </div>
                </div>
                <div className="e-image-container spike-image exp-anim">
                  <img
                    className="exp-image c-ratio"
                    src={require("../../assets/images/jotform/jotform.png")}
                    alt="Jotform"
                  />
                </div>
              </div>
              <div className="li-text exp-anim tag">{"</li>"}</div>
            </div>
            <div className="exp-content exp-anim">
              <div className="li-text exp-anim tag">{"<li>"}</div>
              <div
                className="e-caption"
                style={{ marginTop: "1rem", marginBottom: "1rem" }}
              >
                <div className="e-description">
                  <div className="">
                    <div className="e-title exp-anim">
                      Burger King
                      <div className="e-job-title">Cashier / Line Cook</div>
                    </div>
                  </div>
                  <div
                    className="e-text exp-anim"
                    style={{ fontStyle: "italic", marginTop: "0.5rem" }}
                  >
                    03/2018 - 05/2018
                  </div>
                  <div
                    style={{ display: "flex", marginTop: "1rem" }}
                    className="second-exp-desc-item exp-anim"
                  >
                    <BsFillCaretRightFill size={18} color="#2f334c" />
                    <div
                      className="e-text exp-anim"
                      style={{ maxWidth: "95%" }}
                    >
                      Worked in multi-tasking: casiher, fries, cleaning, dishes
                      and grill
                    </div>
                  </div>
                  <div
                    style={{ display: "flex", marginTop: "0.5rem" }}
                    className="third-exp-desc-item exp-anim"
                  >
                    <BsFillCaretRightFill size={18} color="#2f334c" />
                    <div
                      className="e-text exp-anim"
                      style={{ maxWidth: "95%" }}
                    >
                      Experienced teamwork and hierarchy
                    </div>
                  </div>
                </div>
                <div className="e-image-container spike-image exp-anim">
                  <img
                    className="exp-image c-ratio"
                    src={require("../../assets/images/bk/burgerking.png")}
                    alt="BK"
                  />
                </div>
              </div>
              <div className="li-text exp-anim tag">{"</li>"}</div>
            </div>
          </div>
          <div
            className="ul-text exp-anim tag end-exp-ul"
            style={{ margin: 0 }}
          >
            {"</ul>"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
