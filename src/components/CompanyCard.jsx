import React, { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import "../assets/scss/index.scss";
import ModalSummary from "./ModalSummary";

function CompanyCard({ data }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="mob-description">
      <Col className="my-lg-3 my-2">
        <Card className="benefit-card h-100">
          <div className="cursorPointer" onClick={() => setShowModal(true)}>
            <Card.Title className="">
              <div className="">
                <img
                  className="rounded-top w-100"
                  src={data.blogImage}
                  alt=""
                />
              </div>
            </Card.Title>
            <Card.Body>
              <Card.Title className="mb-2 mt-lg-3 text-muted">
                <div className="color-black fnt-lg-20 fnt-md-20 fnt-sm-18 fnt-sm-18 fw-700 lh-lg-28 lh-md-24 lh-sm-18 m-0">
                  {data.header}
                </div>
              </Card.Title>
              <Card.Text>
                <div className="color-black fnt-lg-16 fnt-md-16 fnt-sm-14 fw-400 lh-lg-28 lh-md-24 lh-sm-18">
                  {data.headerText}
                </div>
              </Card.Text>
            </Card.Body>
          </div>

          <div className="color-black fnt-lg-16 fnt-md-16 fnt-sm-14 fw-400 lh-lg-28 lh-md-24 lh-sm-18 mb-3 px-3">
            <a
              href={data.companyUrl}
              className="text-decoration-none"
              target="_blank"
            >
              {" "}
              {data.companyUrl}
            </a>
          </div>
        </Card>
      </Col>

      <ModalSummary
        showModal={showModal}
        setShowModal={setShowModal}
        companyModalData={data.companyModal}
      />
    </div>
  );
}

export default CompanyCard;
