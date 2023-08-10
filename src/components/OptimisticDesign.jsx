import React from 'react'
import { Container, Row } from "react-bootstrap";
import design from "../assets/images/design.svg";
import resume from "../../src/assets/resume/resume.pdf";

export default function OptimisticDesign() {
  const handleDownload = () => {
    window.open(resume, "_blank");
  };
  return (
    <Container className='my-5'>
      <Row>
        <div className="col-7"><img src={design} alt="optimisticsDesign" className='w-100' /></div>
        <div className="align-items-center col-lg-5 d-flex justify-content-center">
            <div className="">
            <div>
                <h4 className='text-uppercase fs-16'>New optimistic Design thinking</h4>
                <h4 className='fs-32'>Shaping a world where innovation and purpose intertwine.</h4>
                <h6 className='fs-20'>Design weaves through life in a beautiful circular rhythm.</h6>
            </div>
            <div className="mt-4">
                <button className='bgButton border-0 btn btn-primary'   onClick={handleDownload}>Download Resume</button>
            </div>
            </div>
        </div>
      </Row>
      <Row className='mt-5'>
        <div className="col-4">
            <div>
                <h1 className='fs-48'>28+</h1>
                <h3 className='fs-28'>Satisfied clients</h3>
            </div>
        </div>
        <div className="border-1 border-start border-success col-4 d-flex justify-content-center">
            <div className="">
                <h1 className='fs-48'>22+</h1>
                <h3 className='fs-28'>Projects completed</h3>
            </div>
        
        </div>
        <div className="border-1 border-start border-success col-4 d-flex justify-content-center">
            <div className='float-end'>
                <h1 className='fs-48'>30+</h1>
                <h3 className='fs-28'>Reviews given</h3>
            </div>
        </div>
      </Row>
    </Container>
  )
}
