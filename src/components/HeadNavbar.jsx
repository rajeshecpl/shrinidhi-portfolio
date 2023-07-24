import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Navbar } from "react-bootstrap";
import { Button } from "react-bootstrap";
import shrinidhi from "../assets/images/shrinidhi.png";
import "../assets/scss/index.scss";
import "../assets/scss/Header.scss";
import resume from "../../src/assets/resume/resume.pdf";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Sticky from "react-sticky-el";

const HeadNavbar = () => {
  const handleDownload = () => {
    window.open(resume, "_blank");
  };

  const [isOpen, setIsOpen] = useState(false);
  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div>
         <Sticky topOffset={0} >
          <Navbar className="navbar">
            <Container>
              <div className="d-flex justify-content-between w-100">
                <div className="">
                  <img src={shrinidhi} alt="logo" className="me-2" />
                  Shrinidhi Upadhya
                </div>
                <Nav className="align-items-center d-flex justify-content-end ms-5">
                  <Nav.Link className="me-3 headerText" href="#pricing">
                    Testimonial
                  </Nav.Link>
                  <Nav.Link className="me-3 headerText" href="#pricing">
                    Skills
                  </Nav.Link>
                  <DropdownButton
                    id="dropdown-basic-button"
                    title="Project"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    show={isOpen}
                    className="me-3"
                  >
                    <Dropdown.Item href="https://www.eraofwe.com/" target="_blank">
                      Era of we
                    </Dropdown.Item>
                    <Dropdown.Item href="https://opsiocloud.com/" target="_blank">
                      Opsio
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="https://www.softobotics.com/"
                      target="_blank"
                    >
                      Softobotics
                    </Dropdown.Item>
                    <Dropdown.Item href="https://dxia.co.jp/" target="_blank">
                      DXIA
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="https://staging.seqops.io/en/"
                      target="_blank"
                    >
                      Seqops
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="https://dev.mjin.space/login"
                      target="_blank"
                    >
                      Mjin
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="https://www.cloudshrub.com/"
                      target="_blank"
                    >
                      Cloudshrub
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="https://portal.softobotics.com/"
                      target="_blank"
                    >
                      TMS-Team Management System
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="https://tofes4.co.il/auth?returnUrl=%2F"
                      target="_blank"
                    >
                      TOFES4
                    </Dropdown.Item>
                  </DropdownButton>
                  <Nav.Link className="me-3 headerText" href="#pricing">
                    Portfolio
                  </Nav.Link>
                  <Nav.Link className="" href="#pricing">
                    <Button
                      className="bg-white border border-2 btn btn-light downloadBorder headerText"
                      variant="light"
                      onClick={handleDownload}
                    >
                      Download CV
                    </Button>
                  </Nav.Link>
                </Nav>
              </div>
            </Container>
          </Navbar>
         </Sticky>
    </div>
  );
};

export default HeadNavbar;
