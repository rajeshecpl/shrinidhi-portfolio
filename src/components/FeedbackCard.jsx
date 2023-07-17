import React from "react";
import { Card } from "react-bootstrap";

export default function FeedbackCard({ feedbackImage,headerTitle,headerText}) {
  
  return (
    <div>
      <Card className="h-100 rounded-5">
          <Card.Title className="m-0">
            <img src={feedbackImage} alt="" className="w-100" />
          </Card.Title>
        <Card.Body>
          <Card.Title>
            <div className="fs-14 fw-400 fw-semibold">{headerTitle}</div>
          </Card.Title>
          <Card.Text>{headerText}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
