import React from "react";
import hutimg from "../assets/images/img/hut.png";
import cons from "../assets/images/img/cons.png";
import { Col, Row } from "react-bootstrap";
import demoicon from "../assets/images/svg/demoicon.svg";
const Deals = () => {
  return (
    <section className="py-4 py-lg-5">
      <div className="custom_container py-4 py-lg-5">
        <Row className=" justify-content-between">
          <Col md={6} lg={4} data-aos="fade-up-right">
            <img src={hutimg} alt="hutimg" className="w-100" />
          </Col>
          <Col md={6} lg={3} className="mt-4 mt-lg-0" data-aos="flip-down">
            <div className="ps-5 d-flex flex-column justify-content-between h-100 align-items-start">
              {" "}
              <p className=" ff_Segoe fw-normal fs_md clr_black pe-4 me- 5">
                Leverage big data and artificial intelligence to identify your
                next Client
              </p>
              <p className=" ff_Segoe fw-normal fs_md clr_5d5d5d pe-4 me -5">
                Compliment your current business development with Unconstrained
                predictive analytics.
              </p>
              <img src={cons} alt="cons" />
            </div>
          </Col>{" "}
          <Col md={6} lg={3} className="mt-4 mt-lg-0" data-aos="fade-up-left">
            <div className="d-flex flex-column h-100 justify-content-around">
              <p className=" ff_Segoe fw-semibold fs_7xl clr_black pe-5">
                Close More Deals
              </p>{" "}
              <button className=" p_15_45 border-0 ms-2  transition trns_demoicon bg-transparent clr_green border_r_4 ms_21 fs_md ">
                Book a demo{" "}
                <img
                  src={demoicon}
                  alt="demoicon"
                  className="ms-3 transition"
                />
              </button>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Deals;
