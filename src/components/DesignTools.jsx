import React, { useState } from "react";
import { Container} from "react-bootstrap";
import "../assets/scss/index.scss";
import designTool_Icon_1 from "../../src/assets/images/designTool_1.svg";
import designTool_Icon_2 from "../../src/assets/images/designTool_2.svg";
import designTool_Icon_3 from "../../src/assets/images/designTool_3.svg";
import designTool_Icon_4 from "../../src/assets/images/designTool_4.svg";
import designTool_Icon_5 from "../../src/assets/images/designTool_5.svg";
import designTool_Icon_6 from "../../src/assets/images/designTool_6.svg";
import designTool_Icon_7 from "../../src/assets/images/designTool_7.svg";
import designTool_Icon_8 from "../../src/assets/images/designTool_8.svg";
import designTool_Icon_9 from "../../src/assets/images/designTool_9.svg";
import designTool_Icon_10 from "../../src/assets/images/designTool_10.svg";
import designTool_Icon_11 from "../../src/assets/images/designTool_11.svg";
import designTool_Icon_12 from "../../src/assets/images/designTool_12.svg";
import designTool_Icon_13 from "../../src/assets/images/designTool_13.svg";
import arrowRight from "../../src/assets/images/arrowRight.svg";

const designTools = [
  { icon: designTool_Icon_1, name: "Figma" },
  { icon: designTool_Icon_2, name: "Sketch" },
  { icon: designTool_Icon_4, name: "Adobe Illustrato" },
  { icon: designTool_Icon_5, name: "Adobe Photoshop" },
  { icon: designTool_Icon_6, name: "Invision Studio" },
  { icon: designTool_Icon_9, name: "Adobe Lightroom" },
  { icon: designTool_Icon_3, name: "Adobe XD" },
  { icon: designTool_Icon_7, name: "Jira" },
  { icon: designTool_Icon_8, name: "zeplin" },
  { icon: designTool_Icon_10, name: "Adobe Indesign" },
  { icon: designTool_Icon_11, name: "bugherd" },
  { icon: designTool_Icon_12, name: "Teams" },
  { icon: designTool_Icon_13, name: "Adobe Premiere Pro" }
];

export default function DesignTools() {
  const [startIndex, setStartIndex] = useState(0);
  const handleNext = () => {
    setStartIndex(prev => prev + 6);
  };

  const handlePrev = () => {
    setStartIndex(prev => prev - 6);
  };
  return (
    <div className="my-lg-5 my-4">
      <div className="">
        <div className="fw-600 fs-32 text-center">
          Design tools/ communication
        </div>
      </div>
      <div className="designToolBG py-5 mb-lg-4">
        <Container>
          <div className="d-flex justify-content-between">
            {startIndex > 0 && (
              <div className="" onClick={handlePrev}>
                <img src={arrowRight} alt="arrowLeft" style={{ transform: "rotate(180deg)" }} />
              </div>
            )}

            {designTools.slice(startIndex, startIndex + 6).map(tool => (
              <div key={tool.name} className="text-center">
                <img src={tool.icon} alt={tool.name} />
                <h5>{tool.name}</h5>
              </div>
            ))}

            {startIndex + 6 < designTools.length && (
              <div className="" onClick={handleNext}>
                <img src={arrowRight} alt="arrowRight" />
              </div>
            )}
          </div>
        </Container>
      </div>
    </div>
  );
}