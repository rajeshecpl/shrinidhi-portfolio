import "../assets/scss/index.scss";
import React from "react";
import ProfileImage from "../assets/images/ShrinidhiImage.svg";
import line from "../assets/images/line.svg";
import facebook from "../assets/images/facebook.svg";
import instragram from "../assets/images/instagram.svg";
import linkedin from "../assets/images/linkedin.svg";
import arrow from "../assets/images/arrow.svg";
import { Container,Row } from "react-bootstrap";

const Shrinidhi = () => {
  return (
    <Container>
      <Row>
        <div className="align-items-center col-6 d-flex">
          <div className="col-10">
            <div className="">
              <h1 className="fw-600 fs-58">
                I have <span className="creativeDesign">Creative Design</span>{" "}
                Experience
              </h1>
              <h5 className="fw-400 fs-16">
                Experienced Product Designer and UX/UI designer skilled in
                creating intuitive and visually appealing digital experiences.
                Passionate about user-centric design that merges functionality
                and aesthetics seamlessly.
              </h5>
            </div>
            <div className="">
              <button className="bgButton border-0 btn btn-info text-white">
                Contact Me
              </button>
              <button className="btn btn-outline-dark ms-3">
                View Portfolio <img src={arrow} className="ms-1" alt="arrow" />
              </button>
            </div>
          </div>
        </div>
        <div className="align-items-center col-6 d-flex">
          <div className="col-11">
            <img src={ProfileImage} alt="ProfileImage" />
          </div>
          <div className="col-1 h-100">
            <div className="h-25">
              <h6 className="m-0 px-4 rotate-90 h-25">Follow me on:</h6>
            </div>

            <div className="d-flex justify-content-center">
              <img src={line} alt="" />
            </div>
            <div className="d-flex justify-content-center mt-3">
              <a
                href="https://instagram.com/shrinidhiupadhya?igshid=OGQ5ZDc2ODk2ZA=="
                target="_blank"
                rel="noreferrer"
              >
                <img src={facebook} alt="Instagram" className="" />
              </a>
            </div>
            <div className="d-flex justify-content-center mt-3">
              <a
                href="https://instagram.com/shrinidhiupadhya?igshid=OGQ5ZDc2ODk2ZA=="
                target="_blank"
                rel="noreferrer"
              >
                <img src={instragram} alt="Instagram" className="" />
              </a>
            </div>
            <div className="d-flex justify-content-center mt-3">
              <a
                href="https://www.linkedin.com/in/shrinidhi-upadhya-b68307220"
                target="_blank"
                rel="noreferrer"
              >
                <img src={linkedin} alt="in" className="" />
              </a>
            </div>
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default Shrinidhi;

