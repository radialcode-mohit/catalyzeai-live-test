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
    <section>
      <div className="custom_container">
        <Row>
          <Col lg={3}>
            <p className=" ff_Segoe fw-semibold fs_7xl clr_black">
              Our Platform
            </p>
          </Col>
          {/* <Col lg={9}> */}
          {/* <Row> */}
          <Col lg={4} className="p-1">
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
          <Col lg={4} className="p-1">
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
                Radius based leads within 50-miles from you, prioritizing those
                closer to you.
              </p>
            </div>
          </Col>
          {/* </Row> */}
          {/* </Col> */}
          <Col lg={9}>
            <Row>
              <Col lg={6} className="p-1">
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
              <Col lg={6} className="p-1">
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
          <Col sm={7} lg={3} className="p-1 cur_poi imgtrans_hovr">
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
      </div>
    </section>
  );
};

export default OurPlatform;
