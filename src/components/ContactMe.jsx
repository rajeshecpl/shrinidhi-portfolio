import React from "react";
import { Container } from "react-bootstrap";
import "../assets/scss/index.scss";
import arrow from "../assets/images/Arrow_Green_Icon.svg"

export default function ContactMe() {
  return (
    <Container>
      <div className="bgFeedback">
     
          <div className="py-lg-5 py-4">
            <div className="fw-600 fs-32 text-white  text-center">
              Lets be in touch
            </div>
            <div className="fw-400 fs-18 text-white  text-center">
              Let's stay intertwined, like the delicate dance of sun and moon.
              Our connection, a tapestry of moments, forever in bloom.
            </div>
            <div className="d-flex justify-content-center my-4">
              <button className="getInTouchBG btn btn-success">
                Get in touch
              </button>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-4 col-12 text-center ContactColor">
                Whatsapp - 9986706697 <img src={arrow} alt="arrow" class="ms-1" />
              </div>
              <div className="col-lg-4 col-md-4 col-12 text-center ContactColor">
                Call me +91 9986706697<img src={arrow} alt="arrow"class="ms-2" />
              </div>
              <div className="col-lg-4 col-md-4 col-12 text-center ContactColor">
                View Portfolio<img src={arrow} alt="arrow"class="ms-2" />
              </div>
            </div>
     
        </div>
      </div>
      <div className="row my-lg-5 my-4">
        <div className="col-lg-3 col-md-3 col-12">
          <h4>Anti corruption and anti bribery</h4>
          The voice of coffee that fights to rebalance rewards{" "}
        </div>
        <div className="col-lg-3 col-md-3 col-12">
          <h4>Discrimination against individuals </h4>
          No individual is discriminated based on sexual orientation, age, race,
          color, nationality, ethnic origin, religion, beliefs, disability, or
          marital status.
        </div>
        <div className="col-lg-3 col-md-3 col-12">
          <h4> Human rights and labour</h4>
          We are committed to acting ethically and with integrity in all our
          business relationships, and will not stand for child labour and/or
          modern slavery with any of our partners.
        </div>
        <div className="col-lg-3 col-md-3 col-12">
          <h4>Legal and ethical compliance</h4>
          Era of we conducts its business in compliance with all applicable
          laws, rules and regulations.
        </div>
      </div>
    </Container>
  );
}
