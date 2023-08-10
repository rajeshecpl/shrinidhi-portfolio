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
          <h1 className="fw-600 fs-32">My Creative Works Latest Projects</h1>
        </div>
        <div className="d-flex justify-content-center">
          <p className="fs-20 fw-400 text-center w-75">Embark on a journey through my latest creative works, where imagination meets reality. Discover the artistry that breathes life into my projects, a testament to boundless creativity.</p>
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
