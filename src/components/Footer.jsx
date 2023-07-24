// Import the necessary dependencies
import React from "react";
import { Container, Row } from "react-bootstrap";
import Insta_Icon from "../../src/assets/images/Insta_Icon.svg";
import linkedin_Icon from "../../src/assets/images/linkedin_Icon.svg";
import Call_Icon from "../../src/assets/images/Call_Icon.svg";
import Message_Icon from "../../src/assets/images/Message_Icon.svg";
import WhatsApp_Icon from "../../src/assets/images/WhatsApp_Icon.svg";
import Be_Icon from "../../src/assets/images/Be_Icon.svg";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <Container className="my-4">
      <Row className="border-3 border-top pt-2">
        <div className="col-lg-6 col-12">
          <div className="my-3">
            <a
              href="https://www.linkedin.com/in/shrinidhi-upadhya-b68307220"
              target="_blank"
            >
              <img src={linkedin_Icon} alt="in" className="me-3" />
            </a>
            <a href="https://www.behance.net/shrinidhi_upadhya" target="_blank">
              <img src={Be_Icon} alt="Be" className="me-3" />
            </a>
            <a
              href="https://instagram.com/shrinidhiupadhya?igshid=OGQ5ZDc2ODk2ZA=="
              target="_blank"
            >
              <img src={Insta_Icon} alt="Instagram" className="me-3" />
            </a>
          </div>
          <div className="">
            <a
              href="mailto:Shrinidhi100@gmail.com"
              className="text-decoration-none text-dark"
              target="_blank"
            >
              <img src={Message_Icon} alt="message" className="me-3" />
            </a>

            <a
              href="mailto:Shrinidhi100@gmail.com"
              className="text-decoration-none text-dark"
              target="_blank"
            >
              Shrinidhi100@gmail.com
            </a>
          </div>
          <div className="mt-3">
            <a href="tel:+91 9986706697">
              <img src={Call_Icon} alt="call" className="me-3" />
            </a>
            Contact me{" "}
            <a
              href="tel:+91 9986706697"
              className="text-decoration-none text-dark"
            >
              +91 9986706697
            </a>
          </div>

          <div className="mt-3">
            <img src={WhatsApp_Icon} alt="Whatapp" className="me-3" />
            WhatsApp me : +91 9986706697
          </div>
        </div>
        <div className="col-lg-6 col-12">
          <div className="">
            <h6 className="text-end">Designed by: Shrinidhi Upadhya</h6>
            <h6 className="text-end">Developed by: Rajesh Kumar</h6>
          </div>
        </div>
      </Row>
      <div className="text-center">
        <div className="fw-400 fs-16">@ 2023 | All Rights Reserved</div>
      </div>
    </Container>
  );
}
