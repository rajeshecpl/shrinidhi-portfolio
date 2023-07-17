import React from 'react'
import { Container, Row } from "react-bootstrap";
import "../assets/scss/index.scss";
import "../assets/scss/WhyHireMe.scss";
import WhyHireMe_1 from "../assets/images/WhyHireMe_1.svg";
import WhyHireMe_2 from "../assets/images/WhyHireMe_2.svg";
import WhyHireMe_3 from "../assets/images/WhyHireMe_3.svg";
import WhyHireMe_4 from "../assets/images/WhyHireMe_4.svg";
import WhyHireMe_5 from "../assets/images/WhyHireMe_5.svg";
import WhyHireMe_6 from "../assets/images/WhyHireMe_6.svg";
import WhyHireMe_7 from "../assets/images/WhyHireMe_7.svg";
import WhyHireMe_8 from "../assets/images/WhyHireMe_8.svg";
import WhyHireMe_9 from "../assets/images/WhyHireMe_9.svg";

export default function WhyHireMe() {
  return (
    <div className="WhyHireMeBG">
        <Container className='py-5'>
            <div className="mt-4">
                <h2>Why Hire Me For Your <br/>
                    Next Project?</h2>
                    <h6>Unleash the power of user experience and interface design as my skills create seamless digital journeys. Witness the fusion of aesthetics and functionality, shaping immersive user interactions with every pixel.</h6>
            </div>
            <Row className='mt-5 mb-4'>
                <div className="col-3 text-center">
                    <div className="">
                        <img src={WhyHireMe_1} alt="" />
                    </div>
                    <div className="mt-3">
                        <h6>User Interface Design</h6>
                    </div>
                </div>
                <div className="col-2 text-center">
                    <div className="">
                        <img src={WhyHireMe_2} alt="" />
                    </div>
                    <div className="mt-3">
                        <h6>User Experience Design</h6>
                    </div>
                </div>
                <div className="col-2 text-center">
                    <div className="">
                        <img src={WhyHireMe_3} alt="" />
                    </div>
                    <div className="mt-3">
                        <h6>Prototyping</h6>
                    </div>
                </div>
                <div className="col-2 text-center">
                        <div className="">
                            <img src={WhyHireMe_4} alt="" />
                        </div>
                        <div className="mt-3">
                            <h6>Testing</h6>
                        </div>
                </div>
                <div className="col-3 text-center">
                        <div className="">
                            <img src={WhyHireMe_5} alt="" />
                        </div>
                        <div className="mt-3">
                            <h6>Visual Design</h6>
                        </div>
                </div>
            </Row>
            <Row className='justify-content-center mb-4 mt-5'>
                <div className="col-3 text-center">
                    <div className="">
                        <img src={WhyHireMe_6} alt="" />
                    </div>
                    <div className="mt-3">
                        <h6>Web Design</h6>
                    </div>
                </div>
                <div className="col-2 text-center">
                    <div className="">
                        <img src={WhyHireMe_7} alt="" />
                    </div>
                    <div className="mt-3">
                        <h6>Mobile Design</h6>
                    </div>
                </div>
                <div className="col-2 text-center">
                    <div className="">
                        <img src={WhyHireMe_8} alt="" />
                    </div>
                    <div className="mt-3">
                        <h6>Branding & Logo</h6>
                    </div>
                </div>
                <div className="col-3 text-center">
                    <div className="">
                        <img src={WhyHireMe_9} alt="" />
                    </div>
                    <div className="mt-3">
                        <h6>Storytelling</h6>
                    </div>
                </div>
            </Row>
        </Container>
    </div>
  )
}
