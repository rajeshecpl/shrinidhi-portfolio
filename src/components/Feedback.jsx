import React from "react";
import "../assets/scss/index.scss";
import { Container, Row } from "react-bootstrap";
import Research_and_Planning_Image from "../assets/images/Research_and_Planning_Image.png";
import feedback from "../../src/json/feedback.json";
import FeedbackCard from "./FeedbackCard";
import tree from "../assets/images/treeConnect.svg";
import "../../src/assets/scss/Feedback.scss";

export default function Feedback() {
  return (
    <div className="bgFeedback customCard">
      <Container className="py-5">
        <Row className="mt-4">
          <div className="col-lg-6">
            <div>
              <h3 className="text-white">
                Take a journey through my work experience
              </h3>
              <h6 className="text-white">
                Discover the key highlights of my professional experience
              </h6>
            </div>
            <div className="">
              <button className="btn btn-success">Contact Me</button>
            </div>
          </div>
          <div className="col-lg-6">
            <Row xs={1} md={2} lg={2}>
              <FeedbackCard
                feedbackImage={Research_and_Planning_Image}
                headerTitle="Research and Planning"
                headerText="Identify the target audience, research methods, and plan for data collection."
              />
            </Row>
          </div>
        </Row>

        <Row className="justify-content-center hide-on-small">
          <img src={tree} alt="" className="treeConnectWidth" />
        </Row>

        <Row xs={1} md={3} lg={4}>
          {feedback.map((item) => (
            <FeedbackCard
              key={item.id}
              feedbackImage={item.feedbackImage}
              headerTitle={item.headerTitle}
              headerText={item.headerText}
            />
          ))}
        </Row>
      </Container>
    </div>
  );
}
