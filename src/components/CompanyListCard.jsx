import companylist from "../json/companyList.json"
import React, { useState } from "react";
import { Col } from "react-bootstrap";
import arrow from '../assets/images/arrow_black.svg';
import { Link } from "react-router-dom";

export default function CompanyListCard() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="">
      <Col className="h-100">
        <div
          className={`benefit-card h-100 cursorPointer ${hovered ? "hovered" : ""}`}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <div className="image-wrapper">
            <img
              className="rounded-top w-100"
              src={companylist.blogImage}
              alt="blogImage"
            />
          </div>
          <div className={`hover-content ${hovered ? "active" : ""}`}>
            <div className="">
              <h2 className="text-start">{companylist.header}</h2>
            </div>
            <div className="">
              <p className="text-start">{companylist.headerText}</p>
              <Link to={companylist.slug}>
                     <img src={arrow} alt="Arrow" className="float-start" />
                </Link>
            </div>
          </div>
        </div>
      </Col>
    </div>
  );
}
