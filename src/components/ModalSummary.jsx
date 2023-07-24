import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Row } from "react-bootstrap";

export default function ModalSummary({
  showModal,
  setShowModal,
  companyModalData,
}: any) {
  const handleClose = () => setShowModal(false);

  // console.log(companyModalData,"data")
  return (
    <div>
      <Modal
        show={showModal}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className=" modal-xl"
      >
        <Modal.Header closeButton className="flex-column-reverse">
          <Modal.Title>
            <img
              src={companyModalData[0].modaImage}
              alt={companyModalData[0].modalHeader}
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Modal.Title>
            <h1>{companyModalData[0].modalHeader}</h1>
          </Modal.Title>
          <h2>About</h2>
          {/* <h5>{companyModalData[0].about}</h5> */}
          <div className="color-white ps-3 ps-md-0">
            {companyModalData[0].about?.map((item: any) => {
              return (
                <h5 className=" fnt-16 fw-400 lh-26 mobCompanyDetail  mb-3">
                  {item}
                </h5>
              );
            })}
          </div>
          <Modal.Title>
            <img
              src={companyModalData[0].modalBodyImage}
              alt={companyModalData[0].modalHeader}
            />
          </Modal.Title>
          <h2>Worked On</h2>

          <div className="color-white ps-3 ps-md-0">
            {companyModalData[0].workOn?.map((item: any) => {
              return (
                <h5 className=" fnt-16 fw-400 lh-26 mobCompanyDetail  mb-3">
                  {item}
                </h5>
              );
            })}
          </div>
          <h2>Our Mission</h2>
          <div className="color-white ps-3 ps-md-0">
            {companyModalData[0].ourMission?.map((item: any) => {
              return (
                <h5 className=" fnt-16 fw-400 lh-26 mobCompanyDetail  mb-3">
                  {item}
                </h5>
              );
            })}
          </div>
          <Row>
            <div className="col-lg-6 col-12">
              <h2>The purpose {companyModalData[0].header}</h2>
              <h5>{companyModalData[0].purpose}</h5>
              <div className="">
                <button className="btn btn-success">How it works</button>
              </div>
              <div className="">
                <a href={companyModalData[0].modalUrl} target="_blank"  rel="noreferrer" class="text-decoration-none">{companyModalData[0].modalUrl}</a>
              </div>
            </div>

            <div className="col-lg-6 col-12">
              <div className="color-white ps-3 ps-md-0">
                {companyModalData[0].purposeArray?.map((item: any) => {
                  return (
                    <div className="">
                      <img src={item.headerImg} alt="" />
                      <h5 className=" fnt-16 fw-400 lh-26 mobCompanyDetail  mb-3">
                        {item.header}
                      </h5>
                    </div>
                  );
                })}
              </div>
            </div>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
