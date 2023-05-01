import React from "react";
import earth from "../assets/images/img/earth.png";
import { Col, Row } from "react-bootstrap";
import map from "../assets/images/img/map.png";
const Target = () => {
  return (
    <section className="py-5">
      <div className="custom_container pb-lg-5">
        <Row className=" justify-content-between">
          <Col
            lg={5}
            className="text-center text-lg-start"
            data-aos="fade-up-right"
          >
            <div>
              <p className=" ff_Segoe fw-semibold fs_7xl clr_black">
                Your Target Market
              </p>
              <div className="d-flex align-items-center justify-content-center justify-content-lg-start">
                <img src={earth} alt="earth" />
                <p className=" ff_Segoe fw-normal fs_md clr_black mb-0 ms-3">
                  Nationwide coverage
                </p>
              </div>
              <p className=" ff_Segoe fw-normal fs_md mt-3">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters.
              </p>
              <button className="mt-lg-4 p_12_49  green_boder_1px transition bg_green clr_white border_r_4 get_started_btn_hover fs_md">
                Get started
              </button>
            </div>
          </Col>
          <Col lg={5} className="mt-5" data-aos="fade-up-left">
            <img src={map} className="w-100" alt="map" />
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Target;
