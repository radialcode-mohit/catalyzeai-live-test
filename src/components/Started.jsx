import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import Slider from "react-slick";
import oneimg from "../assets/images/img/1.png";
import twoimg from "../assets/images/img/2.png";
import threeimg from "../assets/images/img/3.png";
import fourimg from "../assets/images/img/4.png";
import acc1 from "../assets/images/img/acc1.png";
import acc2 from "../assets/images/img/acc2.png";
import acc3 from "../assets/images/img/acc3.png";
import acc4 from "../assets/images/img/acc4.png";
import Accordion from "react-bootstrap/Accordion";
export default class AsNavFor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }

  render() {
    let settings = {
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,

            slidesToShow: 4,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,

            slidesToShow: 4,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
      ],
    };

    return (
      <section className=" br_15 bg_darkblue mx_15 py-5">
        <div className="custom_container py-4">
          <p className=" ff_Segoe fw-semibold fs_7xl clr_white text-center">
            How to get started?
          </p>
          <Row className=" justify-content-between py-5">
            <Col lg={7} className=" px- 1">
              <div className="">
                <Slider
                  className=""
                  asNavFor={this.state.nav1}
                  ref={(slider) => (this.slider2 = slider)}
                  slidesToShow={4}
                  swipeToSlide={true}
                  focusOnSelect={true}
                  arrows={false}
                  autoplay={true}
                  autoplaySpeed={2000}
                  {...settings}
                  vertical={true}
                >
                  {/* 1 */}
                  <Accordion className="">
                    <div className=" pe-xl-4">
                      <div className=" bg_box p-3 me_20">
                        {/* <p className=" mt-2 ff_Segoe fw-semibold fs_md clr_white">
                          Big <br /> Data
                        </p> */}
                        <div className="d-flex align-items-start">
                          <p className="bg_green_current mb-0 ff_Segoe fw-semibold fs_md clr_white bg_lght_blue">
                            1
                          </p>
                          <Accordion.Item
                            eventKey="0"
                            className="w-100 ps-3 ps-lg-5 "
                          >
                            <Accordion.Header>
                              Provide your information
                            </Accordion.Header>
                            <Accordion.Body>
                              <p className="mb-0 pe-lg-5">
                                {" "}
                                Provide a zip code and we will provide you with
                                the highest propensity prospects in a 50 mile
                                radius.
                              </p>
                            </Accordion.Body>
                          </Accordion.Item>
                        </div>
                      </div>
                    </div>
                  </Accordion>
                  <Accordion>
                    <div className=" pe-xl-4">
                      <div className=" bg_box p-3 me_20">
                        {/* <p className=" mt-2 ff_Segoe fw-semibold fs_md clr_white">
                          Big <br /> Data
                        </p> */}
                        <div className="d-flex align-items-start">
                          <p className="bg_green_current mb-0 ff_Segoe fw-semibold fs_md clr_white bg_lght_blue">
                            2
                          </p>
                          <Accordion.Item
                            eventKey="0"
                            className="w-100 ps-3 ps-lg-5"
                          >
                            <Accordion.Header>
                              Select your location
                            </Accordion.Header>
                            <Accordion.Body>
                              <p className="mb-0 pe-lg-5">
                                {" "}
                                Provide a zip code and we will provide you with
                                the highest propensity prospects in a 50 mile
                                radius.
                              </p>
                            </Accordion.Body>
                          </Accordion.Item>
                        </div>
                      </div>
                    </div>
                  </Accordion>
                  <Accordion>
                    <div className=" pe-xl-4">
                      <div className=" bg_box p-3 me_20">
                        {/* <p className=" mt-2 ff_Segoe fw-semibold fs_md clr_white">
                          Big <br /> Data
                        </p> */}
                        <div className="d-flex align-items-start">
                          <p className="bg_green_current mb-0 ff_Segoe fw-semibold fs_md clr_white bg_lght_blue">
                            3
                          </p>
                          <Accordion.Item
                            eventKey="0"
                            className="w-100 ps-3 ps-lg-5"
                          >
                            <Accordion.Header>
                              Purchase your subscription
                            </Accordion.Header>
                            <Accordion.Body>
                              <p className="mb-0 pe-lg-5">
                                {" "}
                                Provide a zip code and we will provide you with
                                the highest propensity prospects in a 50 mile
                                radius.
                              </p>
                            </Accordion.Body>
                          </Accordion.Item>
                        </div>
                      </div>
                    </div>
                  </Accordion>
                  <Accordion>
                    <div className=" pe-xl-4">
                      <div className=" bg_box p-3 me_20">
                        {/* <p className=" mt-2 ff_Segoe fw-semibold fs_md clr_white">
                          Big <br /> Data
                        </p> */}
                        <div className="d-flex align-items-start">
                          <p className="bg_green_current mb-0 ff_Segoe fw-semibold fs_md clr_white bg_lght_blue">
                            4
                          </p>
                          <Accordion.Item
                            eventKey="0"
                            className="w-100 ps-3 ps-lg-5"
                          >
                            <Accordion.Header>
                              Access your dashboard
                            </Accordion.Header>
                            <Accordion.Body>
                              <p className="mb-0 pe-lg-5">
                                {" "}
                                Provide a zip code and we will provide you with
                                the highest propensity prospects in a 50 mile
                                radius.
                              </p>
                            </Accordion.Body>
                          </Accordion.Item>
                        </div>
                      </div>
                    </div>
                  </Accordion>
                </Slider>
              </div>
            </Col>
            <Col lg={5} className="mt-4 mt-lg-0">
              <Slider
                className=""
                arrows={false}
                asNavFor={this.state.nav2}
                ref={(slider) => (this.slider1 = slider)}
              >
                <img src={acc1} alt="acc1" className="w-100 h-100" />
                <img src={acc2} alt="acc2" className="w-100 h-100" />
                <img src={acc3} alt="acc3" className="w-100 h-100" />
                <img src={acc4} alt="acc4" className="w-100 h-100" />
              </Slider>
              <div className="d-flex align-items-center mt-4 pt-2 justify-content-between">
                {" "}
                <button className="btn_signup_hover bg_green  border_green transition border_r_4 p_12_44 ff_Segoe fw-normal fs_md clr_white m-0 ">
                  Sign up
                </button>
                <p className=" ff_Segoe fw-normal fs_md clr_dark mb-0">
                  Register in under 5 minutes.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    );
  }
}
