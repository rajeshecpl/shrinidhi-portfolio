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
import Offcanvas from 'react-bootstrap/Offcanvas';

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
    <Navbar expand="md" className="navbar mb-3">
      <Container fluid className="container">
        <Navbar.Brand href="#">
        <div className="align-items-center d-flex">
                  <img src={shrinidhi} alt="logo" className="me-2" />
              
                  <Nav.Link className="me-3 headerText" href="#action2">Shrinidhi Upadhya</Nav.Link>
                </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">
            Shrinidhi Upadhya
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 align-items-lg-center">
              <Nav.Link className="me-3 headerText" href="#action1">Testimonial</Nav.Link>
              <Nav.Link className="me-3 headerText" href="#action2">Skills</Nav.Link>
              <DropdownButton
                    id="dropdown-basic-button"
                    title="Project"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    show={isOpen}
                    className="me-3"
                  >
                    <Dropdown.Item href="https://www.eraofwe.com/" target="_blank"   rel="noreferrer">
                      Era of we
                    </Dropdown.Item>
                    <Dropdown.Item href="https://opsiocloud.com/" target="_blank"   rel="noreferrer">
                      Opsio
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="https://www.softobotics.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Softobotics
                    </Dropdown.Item>
                    <Dropdown.Item href="https://dxia.co.jp/" target="_blank"   rel="noreferrer">
                      DXIA
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="https://staging.seqops.io/en/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Seqops
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="https://dev.mjin.space/login"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Mjin
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="https://www.cloudshrub.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Cloudshrub
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="https://portal.softobotics.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      TMS-Team Management System
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="https://tofes4.co.il/auth?returnUrl=%2F"
                      target="_blank"
                      rel="noreferrer"
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
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
    </Sticky>
    </div>
  );
}

export default HeadNavbar;
