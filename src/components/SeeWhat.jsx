import React from "react";
import leftarrow from "../assets/images/img/sliderleft.png";
import rightarrow from "../assets/images/img/sliderright.png";
import { Col, Row } from "react-bootstrap";
import quotes from "../assets/images/img/quotes.png";
import Slider from "react-slick";
const SeeWhat = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: true,

          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: true,

          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <section className="py-5 position-relative ">
      <div className="blue_box_slider position-absolute"></div>
      <div className="green_box_slider position-absolute d-none d-md-block"></div>
      <div className="custom_container py-lg-5">
        <div className="d-flex justify-content-center align-items-center">
          <p className=" ff_Segoe fw-semibold fs_7xl clr_black">
            See what our users say{" "}
          </p>
        </div>
        <Slider {...settings} className="pt-5 py-lg-5">
          <div>
            <div className=" bg-white padding_62_52_56_45 br_10 h-100 ms-md-4 max_h_321">
              <div className="d-flex align-items-center justify-content-between">
                <div
                  className="
                d-flex"
                >
                  <div className="green_slider_crcle ff_Segoe fw-semibold fs_md clr_green bg_light_green">
                    RC
                  </div>
                  <div className="ms-4 ps-2">
                    <p className="mb-0 ff_Segoe fw-semibold fs_xl clr_black">
                      Richard Chung
                    </p>
                    <p className=" ff_Segoe fw-normal fs_xsm clr_textdark">
                      Killer Williams
                    </p>
                  </div>
                </div>
                <img src={quotes} alt="quotes" />
              </div>
              <p className=" ff_Segoe fw-normal fs_md clr_textdark mt-5">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The 'Content here, content here', making it look like readable
                English.
              </p>
            </div>
          </div>
          <div>
            <div className=" bg-white padding_62_52_56_45 h-100 br_10 ms-md-4">
              <div className="d-flex align-items-center justify-content-between">
                <div
                  className="
                d-flex"
                >
                  <div className="green_slider_crcle ff_Segoe fw-semibold fs_md clr_green bg_light_green">
                    PM
                  </div>
                  <div className="ms-4 ps-2">
                    <p className="mb-0 ff_Segoe fw-semibold fs_xl clr_black">
                      Paul Morris
                    </p>
                    <p className=" ff_Segoe fw-normal fs_xsm clr_textdark">
                      CEO of KW Forward Living KW Regianal Owner
                    </p>
                  </div>
                </div>
                <img src={quotes} alt="quotes" />
              </div>
              <p className=" ff_Segoe fw-normal fs_md clr_textdark mt-5">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The Point making it look like readable English.
              </p>
            </div>
          </div>
          <div>
            <div className=" bg-white padding_62_52_56_45 h-100 br_10 ms-md-4">
              <div className="d-flex align-items-center justify-content-between">
                <div
                  className="
                d-flex"
                >
                  <div className="green_slider_crcle ff_Segoe fw-semibold fs_md clr_green bg_light_green">
                    PM
                  </div>
                  <div className="ms-4 ps-2">
                    <p className="mb-0 ff_Segoe fw-semibold fs_xl clr_black">
                      Paul Morris
                    </p>
                    <p className=" ff_Segoe fw-normal fs_xsm clr_textdark">
                      CEO of KW Forward Living KW Regianal Owner
                    </p>
                  </div>
                </div>
                <img src={quotes} alt="quotes" />
              </div>
              <p className=" ff_Segoe fw-normal fs_md clr_textdark mt-5">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The Point making it look like readable English.
              </p>
            </div>
          </div>
          <div>
            <div className=" bg-white padding_62_52_56_45 h-100 br_10 ms-md-4">
              <div className="d-flex align-items-center justify-content-between">
                <div
                  className="
                d-flex"
                >
                  <div className="green_slider_crcle ff_Segoe fw-semibold fs_md clr_green bg_light_green">
                    PM
                  </div>
                  <div className="ms-4 ps-2">
                    <p className="mb-0 ff_Segoe fw-semibold fs_xl clr_black">
                      Paul Morris
                    </p>
                    <p className=" ff_Segoe fw-normal fs_xsm clr_textdark">
                      CEO of KW Forward Living KW Regianal Owner
                    </p>
                  </div>
                </div>
                <img src={quotes} alt="quotes" />
              </div>
              <p className=" ff_Segoe fw-normal fs_md clr_textdark mt-5">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The Point making it look like readable English.
              </p>
            </div>
          </div>
          <div>
            <div className=" bg-white padding_62_52_56_45 h-100 br_10 ms-md-4">
              <div className="d-flex align-items-center justify-content-between">
                <div
                  className="
                d-flex"
                >
                  <div className="green_slider_crcle ff_Segoe fw-semibold fs_md clr_green bg_light_green">
                    PM
                  </div>
                  <div className="ms-4 ps-2">
                    <p className="mb-0 ff_Segoe fw-semibold fs_xl clr_black">
                      Paul Morris
                    </p>
                    <p className=" ff_Segoe fw-normal fs_xsm clr_textdark">
                      CEO of KW Forward Living KW Regianal Owner
                    </p>
                  </div>
                </div>
                <img src={quotes} alt="quotes" />
              </div>
              <p className=" ff_Segoe fw-normal fs_md clr_textdark mt-5">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The Point making it look like readable English.
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default SeeWhat;
