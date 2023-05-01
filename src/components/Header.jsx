import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import demoicon from "../assets/images/svg/demoicon.svg";
import heroimg from "../assets/images/svg/heroimg.svg";
import overview from "../assets/images/svg/overview.svg";
import search from "../assets/images/svg/search.svg";
import mike from "../assets/images/svg/mike.svg";

export const Header = () => {
  const [first, setfirst] = useState(0);
  return (
    <section className="py-5 over_flow_x _hiden">
      <div className="custom_container py-lg-4">
        <Row className="flex-column-reverse flex-lg-row">
          <Col lg={6} className="text-center text-lg-start mt-5 mt-lg-0">
            <div>
              <p className=" ff_Segoe fw-semibold  fs_9xl pe-lg-5">
                Event-Driven Listing Leads
              </p>
              <p className=" ff_Segoe fw-normal fs_md pe-lg-5 me-lg-5">
                Not your average smart farming, not statistical analysis, but
                actionable behaviors.
              </p>
              <div className="d-flex mt-5 pt-lg-3 justify-content-center justify-content-lg-start position-relative z_index_43">
                <button className="p_15_50  green_boder_1px transition bg_green clr_white border_r_4 get_started_btn_hover fs_md">
                  Get started
                </button>
                <button className=" p_15_45 border-0 ms-2  transition trns_demoicon bg-transparent clr_green border_r_4 ms_21 fs_md ">
                  Book a demo{" "}
                  <img
                    src={demoicon}
                    alt="demoicon"
                    className="ms-3 transition"
                  />
                </button>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className=" position-relative">
              <img
                src={overview}
                alt="overview"
                className=" position-absolute overview_pos max_w_58 w-100"
              />
              <img
                src={search}
                alt="search"
                className=" position-absolute search_pos"
              />
              <img
                src={mike}
                alt="mike"
                className=" position-absolute mike_pos "
              />
              <img src={heroimg} className="w-100" alt="heroimg" />
            </div>
          </Col>
        </Row>
      </div>
      <div className="green_box_div position-absolute end-0 top-0 z_index_minus_1 max_h_596"></div>
    </section>
  );
};
