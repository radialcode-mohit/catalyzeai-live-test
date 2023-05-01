import React from "react";
import { Col, Row } from "react-bootstrap";
import diamond from "../assets/images/img/diamond.png";
import rail from "../assets/images/img//rail.png";
import doller from "../assets/images/img/doller.png";
import percentage from "../assets/images/img/percentage.png";
import notes from "../assets/images/img/notes.png";
import eye from "../assets/images/img/eye.png";
import graph from "../assets/images/img/graph.png";
import grencrd from "../assets//images/img//greencard.png";
import arrow from "../assets/images/img/arroe.png";
const OurPlatform = () => {
  return (
    <section className="py-3 py-lg-5">
      <div className="custom_container py-3 py-lg-5">
        <Row className="pb-5">
          <Col lg={3}>
            <p className=" ff_Segoe fw-semibold fs_7xl clr_black">
              Our Platform
            </p>
          </Col>
          <Col lg={9}>
            <Row>
              <Col lg={6} className="p-1" data-aos="fade-right">
                <div className="sec4_bg_rgb br_10 px_52 h-100 d-flex flex-column justify-content-between">
                  <div className="d-flex align-items-center justify-content-between pt-5">
                    <p className=" ff_Segoe fw-semibold fs_xl clr_black">
                      Exclusive
                    </p>
                    <img src={diamond} alt="diamond" />
                  </div>
                  {/* <p className="pt-4"></p> */}
                  <p className="pt-5"></p>
                  <p className="pb-5 pt-5">
                    200 exclusive prospects pushed to your platfrom monthly.
                  </p>
                </div>
              </Col>
              <Col lg={6} className="p-1" data-aos="fade-left">
                <div className="sec4_bg_rgb br_10 px_52 h-100 d-flex flex-column justify-content-between">
                  <div className="d-flex align-items-center justify-content-between pt-5">
                    <p className=" ff_Segoe fw-semibold fs_xl clr_black">
                      In your
                      <br />
                      backyard
                    </p>
                    <img src={rail} alt="rail" />
                  </div>
                  {/* <p className="pt-4"></p> */}
                  <p className="pt-5"></p>
                  <p className="pb-5 pt-5">
                    Radius based leads within 50-miles from you, prioritizing
                    those closer to you.
                  </p>
                </div>
              </Col>
            </Row>
          </Col>
          <Col lg={9}>
            <Row>
              <Col lg={6} className="p-1" data-aos="fade-up">
                <div className="sec4_bg_rgb br_10 px_52 h-100 d-flex flex-column justify-content-between">
                  <div className="d-flex align-items-center justify-content-between pt-5">
                    <p className=" ff_Segoe fw-semibold fs_xl clr_black">
                      High <br /> net worth
                    </p>
                    <img src={doller} alt="doller" />
                  </div>
                  {/* <p className="pt-4"></p> */}
                  <p className="pt-5"></p>
                  <p className="pb-5 pt-5">
                    Average investable assets of $1.5 <br /> million.
                  </p>
                </div>
              </Col>
              <Col lg={6} className="p-1" data-aos="fade-down">
                <div className="sec4_bg_rgb br_10 px_52 h-100 d-flex flex-column justify-content-between">
                  <div className="d-flex align-items-center justify-content-between pt-5">
                    <p className=" ff_Segoe fw-semibold fs_xl clr_black">
                      High propensity
                      <br />
                      propensity
                    </p>
                    <img src={percentage} alt="percentage" />
                  </div>
                  {/* <p className="pt-4"></p> */}
                  <p className="pt-5"></p>
                  <p className="pb-5 pt-5">
                    Our combination of event-driven data, historical data,
                    behavioral analytics, and real-time data results in the
                    highest propensity prospects.
                  </p>
                </div>
              </Col>
            </Row>
          </Col>
          <Col
            sm={7}
            lg={3}
            className="p-1 cur_poi imgtrans_hovr"
            data-aos="fade-up"
          >
            <div className="h-100 bgdolle r_img position-relative">
              <img src={grencrd} alt="grencrd" className="h-100 w-100" />
              <div className="d-flex position-absolute btm_19per align-items-center w-100  justify-content-around">
                <p className=" ff_Segoe fw-semibold fs_md clr_white mb-0">
                  View pricing
                </p>
                <img src={arrow} alt="arrow" className="arrow transition" />
              </div>
            </div>
          </Col>
        </Row>
        <Row className="py-4 py-lg-5 mt-lg-5">
          <Col md={6} lg={4} data-aos="fade-up-right">
            <div className=" text-center">
              <img src={eye} alt="eye" />
              <p className=" ff_Segoe fw-normal fs_md clr_black">
                Harness the power of 30 million data points to reach your
                highest converting target market
              </p>
            </div>
          </Col>
          <Col md={6} lg={4} data-aos="flip-left">
            <div className=" text-center">
              <img src={graph} alt="graph" />
              <p className=" ff_Segoe fw-normal fs_md clr_black ">
                Increase your marketingdollars <br /> ROI
              </p>
            </div>
          </Col>
          <Col md={6} lg={4} className="mt-4 mt-lg-0" data-aos="fade-up-left">
            <div className=" text-center">
              <img src={notes} alt="notes" />
              <p className=" ff_Segoe fw-normal fs_md clr_black">
                A top of funnel marketing solution to fill your prospect
                pipeline
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default OurPlatform;
