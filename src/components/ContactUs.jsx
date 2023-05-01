import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Footer from "./Footer";

const ContactUs = () => {
  const [first, setfirst] = useState(0);
  return (
    <section className="bg_darkblue pt-lg-5 m_5 br_15 mt_118 position-relative">
      <div className="blue_box_bg position-absolute"></div>
      <div className="custom_container py-4">
        <Row className="border_btm pb-5">
          <Col md={8} className="mb-4 mb-lg-5">
            <Row>
              <Col lg={6}>
                <input
                  type="text"
                  className=" ff_Segoe fw-semibold clr_lgtwhite bg_lightblue border_r_4 border-0 p_13_10 w-100"
                  placeholder="Name"
                />
                <input
                  type="email"
                  className=" ff_Segoe fw-semibold clr_lgtwhite bg_lightblue border_r_4 border-0 p_13_10 w-100 mt-2"
                  placeholder="Email"
                />
                <div className="d-flex align-items-center justify-content-between mt-2">
                  <button
                    onClick={() => {
                      setfirst(0);
                    }}
                    className={
                      first === 0
                        ? "ff_Segoe fw-semibold fs_md clr_green bg-transparent py_13 px-1   border_r_4 border_green px-3"
                        : "ff_Segoe fw-semibold fs_md clr_lgtwhite bg-transparent py_13 px-1  border_1px_white border_r_4 px-3"
                    }
                  >
                    <div
                      onClick={() => {
                        setfirst(0);
                      }}
                      className={
                        first === 0
                          ? "green_crcle d-inline-block me-2 mt- 2"
                          : "white_crcle d-inline-block me-2 mt- 2"
                      }
                    ></div>
                    Financial Services
                  </button>
                  <button
                    onClick={() => {
                      setfirst(1);
                    }}
                    className={
                      first === 1
                        ? "ff_Segoe fw-semibold fs_md clr_green bg-transparent py_13 px-1 px-sm-2  border_r_4 border_green px-xl-4"
                        : "ff_Segoe fw-semibold fs_md clr_lgtwhite bg-transparent py_13 px-1 px-sm-2 border_1px_white border_r_4 px-xl-4"
                    }
                  >
                    <div
                      onClick={() => {
                        setfirst(1);
                      }}
                      className={
                        first === 1
                          ? "green_crcle d-inline-block me-2 mt- 2"
                          : "white_crcle d-inline-block me-2 mt- 2"
                      }
                    ></div>
                    Real Estate
                  </button>
                </div>
              </Col>
              <Col lg={6}>
                <textarea
                  placeholder="Message.."
                  className="w-100 min_h_108 ff_Segoe fw-semibold clr_lgtwhite bg_lightblue border_r_4 border-0 p_13_10 w-100"
                ></textarea>
                <button className="w-100 py_13 ff_Segoe fw-semibold fs_md clr_white bg_green border_r_4  bg_darkgreen_onhovr transition border_green1px mt-1">
                  Submit
                </button>
              </Col>
            </Row>
          </Col>
          <Col md={4}>
            <div className="ps-4 ps-lg-5">
              <p className=" ff_Segoe fw-semibold fs_5xl clr_white">
                Contact us
              </p>
              <p className=" ff_Segoe fw-normal fs_md clr_light-white pe-3">
                Our Predictive Analytics utilize a combination of event-driven
                data, historical data.
              </p>
            </div>
          </Col>
        </Row>
        <Footer />
      </div>
    </section>
  );
};

export default ContactUs;
