import React from "react";
import { Col, Row } from "react-bootstrap";
import colimg1 from "../assets/images/img/col1img.png";
import colimg2 from "../assets/images/img/col2.png";
import colimg3 from "../assets/images/img/col3.png";
const Identify = () => {
  return (
    <section className=" position-relative ">
      <div className="blue_box_crcle position-absolute"></div>
      <div className="identify_sec_green_box position-absolute"></div>
      <div className="custom_container brdr_top_btm mt-lg-5 py-lg-5">
        <p className=" ff_Segoe  fw-semibold fs_7xl text-center max_w_750 mx-auto py-5">
          Identify Inherited Properties in your local area that will sell
        </p>
        <Row className=" justify-content-between pt-sm-5 mt-sm-5">
          <Col sm={6} lg={3} data-aos="fade-up">
            <div className="text-center h-100 position-relative d-flex flex-column align-items-center">
              <p className=" ff_Segoe fw-normal fs_xl clr_black  position_p">
                Industry High
                <br />
                Prediction Rate
              </p>
              <p className=" ff_Segoe fw-semibold fs_5xl  clr_black">40%</p>
              <img
                src={colimg1}
                alt="colimg1"
                className="w-100  mt-3  mt-lg-5 max_w_h "
              />
              <p className=" ff_Segoe fw-normal fs_md mt-3  clr_black mt_50_pt_2 0 mt-lg-5 pt-lg-5">
                Roughly 4 out of 10 property leads sell within 12 months.
              </p>
            </div>
          </Col>
          <Col sm={6} lg={3} data-aos="fade-down">
            <div className="text-center h-100 d-flex flex-column  align-items-center">
              <p className=" ff_Segoe fw-semibold fs_5xl  clr_black">$77Bn</p>
              <img
                src={colimg2}
                alt="colimg2"
                className="w-100 max_w192 mt-3 mt-lg-5 max_w_h "
              />
              <p className=" ff_Segoe fw-normal fs_md mt-3  clr_black mt-lg-5 pt-lg-5">
                Predicted total property value that will sell per year.
              </p>
            </div>
          </Col>
          <Col sm={6} lg={3} data-aos="fade-up">
            <div className="text-center h-100 d-flex flex-column align-items-center">
              <p className=" ff_Segoe fw-semibold fs_5xl  clr_black ">77%</p>
              <img
                src={colimg3}
                alt="colimg3"
                className="w-100 max_w192 mt-3 mt-lg-5 max_w_h "
              />
              <p className=" ff_Segoe fw-normal fs_md mt-3  clr_black mt-lg-5 pt-lg-3">
                Of recent seller contacted only one agent before finding the
                right agent they worked with to sell their home.
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Identify;
