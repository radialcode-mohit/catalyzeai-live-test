import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import Slider from "react-slick";
import oneimg from "../assets/images/img/1.png";
import twoimg from "../assets/images/img/2.png";
import threeimg from "../assets/images/img/3.png";
import fourimg from "../assets/images/img/4.png";
import bigimg1 from "../assets/images/img/big1.png";
import bigimg2 from "../assets/images/img/big2.png";
import bigimg3 from "../assets/images/img/big3.png";
import bigimg4 from "../assets/images/img/big4.png";
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

            centerPadding: "40px",
            slidesToShow: 3,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,

            centerPadding: "40px",
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
      ],
    };
    return (
      <section>
        <div className="custom_container_max_1440 py-lg-5 overflow-hidden">
          <Row className=" ">
            <Col lg={9} className=" px-1">
              <div className="ps-md-5 ps-3 sec_5_bg pt-5">
                <Slider
                  className=" pt-5 ps-xl-5 ms-xl-5 "
                  asNavFor={this.state.nav1}
                  ref={(slider) => (this.slider2 = slider)}
                  slidesToShow={4}
                  swipeToSlide={true}
                  focusOnSelect={true}
                  arrows={false}
                  autoplay={true}
                  autoplaySpeed={4000}
                  {...settings}
                >
                  <div className=" pe-xl-4">
                    {" "}
                    <div className=" bg_box p-3 ">
                      <img className="bg_green_img" src={oneimg} alt="oneimg" />
                      <p className=" mt-2 ff_Segoe fw-semibold fs_md clr_white">
                        Big <br /> Data
                      </p>
                    </div>
                  </div>
                  <div className=" pe-xl-4">
                    {" "}
                    <div className=" bg_box p-3 ">
                      <img className="bg_green_img" src={twoimg} alt="twoimg" />
                      <p className=" mt-2 ff_Segoe fw-semibold fs_md clr_white">
                        Event- <br /> Driven
                      </p>
                    </div>
                  </div>
                  <div className=" pe-xl-4">
                    {" "}
                    <div className=" bg_box p-3 ">
                      <img
                        className="bg_green_img"
                        src={threeimg}
                        alt="threeimg"
                      />
                      <p className=" mt-2 ff_Segoe fw-semibold fs_md clr_white">
                        Artificial <br /> Intelligence
                      </p>
                    </div>
                  </div>
                  <div className=" pe-xl-4">
                    {" "}
                    <div className=" bg_box p-3 ">
                      <img
                        className="bg_green_img"
                        src={fourimg}
                        alt="fourimg"
                      />
                      <p className=" mt-2 ff_Segoe fw-semibold fs_md clr_white">
                        Predictive <br /> Analytics
                      </p>
                    </div>
                  </div>
                </Slider>
                <Slider
                  className=" py-5 pe-lg-5 me-lg-5 me-3    ps-xl-5 ms-xl-5"
                  asNavFor={this.state.nav2}
                  arrows={false}
                  ref={(slider) => (this.slider1 = slider)}
                >
                  <div className=" my-lg-5   ">
                    <Row className=" w-100 py-3 m-0 big_box   justify-content-between align-items-center">
                      <Col sm={5}>
                        {" "}
                        <img className="w-100" src={bigimg1} alt="bigimg1" />
                      </Col>{" "}
                      <Col sm={5}>
                        {" "}
                        <p className=" ff_Segoe fw-semibold fs_xl clr_white">
                          Big Data
                        </p>
                        <p className=" ff_Segoe fw-semibold fs_xsm pe-lg-5 clr_white">
                          We gather hundreds of millions of data points in order
                          to perform advanced analytics to identify the highest
                          propensity prospects
                        </p>
                      </Col>
                    </Row>
                  </div>
                  <div className=" my-lg-5">
                    <Row className="big_box w-100 py-3 m-0  justify-content-between align-items-center">
                      <Col sm={5}>
                        {" "}
                        <img className="w-100" src={bigimg2} alt="bigimg2" />
                      </Col>{" "}
                      <Col sm={5}>
                        {" "}
                        <p className=" ff_Segoe fw-semibold fs_xl clr_white">
                          Big Data
                        </p>
                        <p className=" ff_Segoe fw-semibold fs_xsm pe-lg-5 clr_white">
                          We gather hundreds of millions of data points in order
                          to perform advanced analytics to identify the highest
                          propensity prospects
                        </p>
                      </Col>
                    </Row>
                  </div>
                  <div className=" my-lg-5">
                    <Row className="big_box w-100 py-3 m-0  justify-content-between align-items-center">
                      <Col sm={5}>
                        {" "}
                        <img className="w-100" src={bigimg3} alt="bigimg3" />
                      </Col>{" "}
                      <Col sm={5}>
                        {" "}
                        <p className=" ff_Segoe fw-semibold fs_xl clr_white">
                          Big Data
                        </p>
                        <p className=" ff_Segoe fw-semibold fs_xsm pe-lg-5 clr_white">
                          We gather hundreds of millions of data points in order
                          to perform advanced analytics to identify the highest
                          propensity prospects
                        </p>
                      </Col>
                    </Row>
                  </div>
                  <div className=" my-lg-5">
                    <Row className="big_box w-100 py-3 m-0  justify-content-between align-items-center">
                      <Col sm={5}>
                        {" "}
                        <img className="w-100" src={bigimg4} alt="bigimg4" />
                      </Col>{" "}
                      <Col sm={5}>
                        {" "}
                        <p className=" ff_Segoe fw-semibold fs_xl clr_white">
                          Big Data
                        </p>
                        <p className=" ff_Segoe fw-semibold fs_xsm pe-lg-5 clr_white">
                          We gather hundreds of millions of data points in order
                          to perform advanced analytics to identify the highest
                          propensity prospects
                        </p>
                      </Col>
                    </Row>
                  </div>
                </Slider>
              </div>
            </Col>
            <Col lg={3} className=" px-1 py-5 py-lg-0 pt-4 pt-lg-0">
              <div
                className=" sec_5_bg p-xl-5 p-3  h-100 d-flex flex-column
               justify-content-between align-items-center align-items-lg-start py-5 py-lg-0 "
              >
                <p className="mb-0 ff_Segoe fw-semibold mt-4 fs_6xl clr_white">
                  Our approach
                </p>
                <div className="text-center text-lg-start">
                  <p className=" mb-0 ff_Segoe fw-normal fs_6xl clr_white">
                    200k<span className=" fs_3xl">Properties</span>
                  </p>
                  <p className=" mb-0 ff_Segoe fw-normal fs_md clr_white py-3 ">
                    of wealth will be transitioned in the next 25 years.
                  </p>
                  <button className=" bg_green border-0 border_r_4 p_15_62 ff_Segoe fw-normal fs_md clr_white m-0 mb-lg-5 ">
                    Sign up
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    );
  }
}
