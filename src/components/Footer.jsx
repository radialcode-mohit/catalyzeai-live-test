import React from "react";
import { Col, Row } from "react-bootstrap";
import footerlogo from "../assets/images/img/footerimg.png";
const Footer = () => {
  return (
    <footer className="pt-lg-5">
      <div className="custom_container pt-4">
        <Row>
          <Col md={4}>
            <div>
              <img src={footerlogo} alt="footerlogo" />
              <div className="mt-3">
                {" "}
                <a
                  href="#"
                  className=" ff_Segoe fw-semibold fs_md clr_white mt-3"
                >
                  info@catalyzeai.com <br />
                </a>
                <a href="#" className=" ff_Segoe fw-semibold fs_md clr_white">
                  (941) 867-1761
                </a>
              </div>
            </div>
          </Col>
          <Col md={7}>
            <Row className="mt-4 mt-md-0">
              <Col sm={4} xs={6} className="mt-4 mt-sm-0" md={4}>
                <ul className="mb-0 ps-0">
                  <li className=" ff_Segoe fw-semibold fs_md clr_white">
                    Financial Services
                  </li>
                  <li
                    className="
                  mt-3"
                  >
                    <a
                      href="#"
                      className=" ff_Segoe fw-normal fs_md clr_white "
                    >
                      {" "}
                      Pricing
                    </a>
                  </li>
                  <li
                    className="
                  mt-2"
                  >
                    <a
                      href="#"
                      className=" ff_Segoe fw-normal fs_md clr_white "
                    >
                      {" "}
                      Blog
                    </a>
                  </li>
                </ul>
              </Col>
              <Col sm={4} xs={6} className="mt-4 mt-sm-0" md={4}>
                <ul className="mb-0 ps-0">
                  <li className=" ff_Segoe fw-semibold fs_md clr_white">
                    Real Estate
                  </li>
                  <li
                    className="
                  mt-3"
                  >
                    <a
                      href="#"
                      className=" ff_Segoe fw-normal fs_md clr_white "
                    >
                      {" "}
                      Pricing
                    </a>
                  </li>
                  <li
                    className="
                  mt-2"
                  >
                    <a
                      href="#"
                      className=" ff_Segoe fw-normal fs_md clr_white "
                    >
                      {" "}
                      Blog
                    </a>
                  </li>
                </ul>
              </Col>
              <Col sm={4} xs={6} className="mt-4 mt-sm-0" md={4}>
                <ul className="mb-0 ps-0">
                  <li className=" ff_Segoe fw-semibold fs_md clr_white">
                    LinkedIn
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
        <div className="d-flex justify-content-between col- 10 mt-4 pt-3 w-100 flex-column flex-sm-row">
          <p className=" ff_Segoe fw-normal fs_sm clr_light-white ">
            All rights reserved.©20022 Catalyze AI
          </p>
          <a
            href="#"
            className=" ff_Segoe fw-normal fs_sm clr_light-white footer_hovr_underline me-5 pe-5"
          >
            Do not sell my data
          </a>
          <div className="me-3 pe-2">
            {" "}
            <a
              href="#"
              className=" ff_Segoe fw-normal fs_sm clr_light-white footer_hovr_underline d-inline-block"
            >
              Terms & Conditions
            </a>{" "}
            <a
              href="#"
              className=" ff_Segoe fw-normal fs_sm clr_light-white footer_hovr_underline d-inline-block  ms-md-5"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
