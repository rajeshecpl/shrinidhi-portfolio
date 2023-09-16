import React from "react";
import Shrinidhi from "../components/Shrinidhi";
import Project from "../components/Project";
import WhyHireMe from "../components/WhyHireMe";
import OptimisticDesign from "../components/OptimisticDesign";
import Feedback from "../components/Feedback";
import DesignTools from "../components/DesignTools";
import ContactMe from "../components/ContactMe";
import Footer from "../components/Footer";
import HeadNavbar from "../components/HeadNavbar";
import CompanyList from "../components/CompanyList";

export default function MainPage() {
  return (
    <div>
      <HeadNavbar />
      <Shrinidhi />
      <Project />
      <WhyHireMe />
      <OptimisticDesign />
      <Feedback />
      <DesignTools />
      <CompanyList/>
      <ContactMe />
      <Footer />
    </div>
  );
}
