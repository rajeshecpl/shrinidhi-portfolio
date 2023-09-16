import React from 'react'
import "../assets/scss/CompanyList.scss"
// import CompanyListCard from './CompanyListCard'
import { Container, Row } from "react-bootstrap";

export default function CompanyList() {
  return (
    <div className="BG_CompanyList mb-5">
     <div className="align-items-center d-flex justify-content-center p-5">
  <div className="">
    <h5 className='text-white'>Indulge in a delightful sip of my portfolio, where each project is a small but powerful shot of creativity, leaving a lasting impression on your senses.</h5>
    <div className="">
        <h1>list of CompanyList</h1>

        <Container className="pe-1 ps-0">
        <Row xs={1} md={4} lg={4}>
          {/* {rentTypeList.map((item) => (
            <RentTypeCard key={item.id} data={item} />
          ))} */}
          {/* <CompanyListCard/> */}
        </Row>
      </Container>
    </div>
  </div>
     </div>
    </div>
  )
}
