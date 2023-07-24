import "../assets/scss/index.scss";
import "../assets/scss/Project.scss";
import React from "react";
import { Container, Row } from "react-bootstrap";
import CompanyCard from "../components/CompanyCard"
import companyList from "../json/companyList.json"

export default function Project() {
    
  return (
    <Container>
      <div className="mt-5">
        <div className="d-flex justify-content-center">
          <h1 className="fw-600">My Creative Works Latest Projects</h1>
        </div>
      </div> 

      <div className="py-lg-5 py-4">
        <Container>
        <Row xs={1} md={2} lg={3}>
          {companyList.map((item) => (
              <CompanyCard key={item.id} data={item} />
            ))}
        </Row>
        </Container>
      </div>
   

      
    <div className="d-flex justify-content-center mb-5">
        <button className="btn btn-outline-dark">View more projects</button>
    </div>
    </Container>
  );
}
