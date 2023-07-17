import React from "react";
import { Container } from "react-bootstrap";
import Insta_Icon from "../../src/assets/images/Insta_Icon.svg";
import linkedin_Icon from "../../src/assets/images/linkedin_Icon.svg";
import Call_Icon from "../../src/assets/images/Call_Icon.svg";
import Message_Icon from "../../src/assets/images/Message_Icon.svg";
import WhatsApp_Icon from "../../src/assets/images/WhatsApp_Icon.svg";
import Be_Icon from "../../src/assets/images/Be_Icon.svg";

export default function Footer() {
  return (
    <Container className=" my-4">
      <div className="border-3 border-top container">
        <div className="my-3">
            <img src={linkedin_Icon} alt="in" className="me-3" />
            <img src={Be_Icon} alt="Be" className="me-3" />
            <img src={Insta_Icon} alt="Instagram" className="me-3" />
            <img src={WhatsApp_Icon} alt="Whatapp" className="" />
        </div>
        <div className="">
            <img src={Message_Icon} alt="message" className="me-3" />Shrinidhi100@gmail.com
        </div>
        <div className="mt-3">
            <img src={Call_Icon} alt="call" className="me-3"/>Whatsapp/Contact me +91 9986706697
            
        </div>
      </div>
      <div className="text-center">
        <div className="fw-400 fs-16">@ 2023 | All Rights Reserved</div>
      </div>
    </Container>
  );
}
