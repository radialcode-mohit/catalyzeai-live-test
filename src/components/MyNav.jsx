import React, { useState } from "react";
import logo from "../assets/images/svg/mainlogo.svg";
import financial from "../assets/images/svg/financial.svg";
import realstate from "../assets/images/svg/realestate.svg";
import login from "../assets/images/svg/signout.svg";
import cross from "../assets/images/img/close.png";
const MyNav = () => {
  const [sign, setsign] = useState(2);
  const [first, setfirst] = useState(true);
  if (first) {
    document.body.classList.remove("overflow-hidden");
  } else {
    document.body.classList.add("overflow-hidden");
  }
  return (
    <nav className="m-3 bg-white br_8">
      <div className="custom_container ">
        <div className="d-flex align-items-center justify-content-between py-4">
          <a href="#" className="d-lg-none">
            <img src={logo} alt="logo" />
          </a>
          <ul
            className={
              first
                ? "d-flex align-items-center mb-0 ps-0 small_card_modify flex-column flex-lg-row align-items-center justify-content-center left_minus_100 z_index_500"
                : "d-flex align-items-center mb-0 ps-0 small_card_modify flex-column flex-lg-row align-items-center justify-content-center left_0 z_index_500"
            }
          >
            <li className="me-3 d-none d-lg-block">
              <a href="#">
                <img src={logo} alt="logo" />
              </a>
            </li>

            <li className="d-flex align-items-center  lihover_a_trans ps-lg-4 ms-lg-5 mt-5 mt-lg-0">
              <a href="#" className="t_translate transition">
                <img src={financial} alt="financial" />
              </a>
              <a
                href="#"
                className="clr_black hoevr_underline ff_Segoe fw-semibold fs_sm ms-2 clr_white_max"
              >
                Financial Services
              </a>
            </li>
            <li className="d-flex align-items-center  lihover_a_trans ms_55 mt-5 mt-lg-0">
              <a href="#" className="t_translate transition">
                <img src={realstate} alt="realstate" />
              </a>
              <a
                href="#"
                className="clr_black hoevr_underline ff_Segoe fw-semibold fs_sm ms-2 clr_white_max"
              >
                Real Estate
              </a>
            </li>
            <li className="d-lg-none mt-5 mt-lg-0">
              <a
                href="#"
                onClick={() => {
                  setsign(1);
                }}
                className={
                  sign === 1
                    ? "ff_Segoe fw-semibold fs_sm clr_green p_10_25 border_green1px border_r_4 "
                    : "ff_Segoe fw-semibold fs_sm clr_green  p_10_25  border_trans hover_border_green transition border_r_4"
                }
              >
                Sign up
              </a>
            </li>
            <li
              onClick={() => {
                setsign(2);
              }}
              className={
                sign === 2
                  ? "border_green1px border_r_4 ms _45 ms-lg-3 mt-3  d-lg-none mt-5"
                  : " border_r_4 ms_ 45 border_trans ms-lg-3 hover_border_green transition mt-3 d-lg-none mt-5"
              }
            >
              <button className="ff_Segoe fw-semibold fs_sm clr_green border-0 bg-transparent p_10_25">
                Log in <img src={login} alt="login" className="ms-2" />
              </button>
            </li>
            <img
              onClick={() => {
                setfirst(true);
              }}
              src={cross}
              alt="cross"
              className=" position-absolute cross_posiiton d-lg-none"
            />
          </ul>
          <ul
            className={
              first
                ? "d-flex align-items-center mb-0 ps-0  small_card_modify justify-content-center justify-content-lg-between  right_minus_100 d-none d-lg-flex"
                : "d-flex align-items-center mb-0 ps-0 flex-column flex-lg-row small_card_modify justify-content-center justify-content-lg-between right_0 d-none d-lg-flex"
            }
          >
            <li>
              <a
                href="#"
                onClick={() => {
                  setsign(1);
                }}
                className={
                  sign === 1
                    ? "ff_Segoe fw-semibold fs_sm clr_green p_10_25 border_green1px border_r_4 "
                    : "ff_Segoe fw-semibold fs_sm clr_green  p_10_25 border_1px_white hover_border_green transition border_r_4"
                }
              >
                Sign up
              </a>
            </li>
            <li
              onClick={() => {
                setsign(2);
              }}
              className={
                sign === 2
                  ? "border_green1px border_r_4 ms _45 ms-lg-3 mt-3 mt-lg-0"
                  : " border_r_4 ms_ 45 border_1px_white ms-lg-3 hover_border_green transition mt-3 mt-lg-0"
              }
            >
              <button className="ff_Segoe fw-semibold fs_sm clr_green border-0 bg-transparent p_10_25">
                Log in <img src={login} alt="login" className="ms-2" />
              </button>
            </li>
          </ul>
          <a
            href="#"
            className="navicon_container d-lg-none"
            onClick={() => {
              setfirst(false);
            }}
          >
            <span className="navicon"></span>
            <span className="navicon mt-2"></span>
            <span className="navicon mt-2"></span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default MyNav;
