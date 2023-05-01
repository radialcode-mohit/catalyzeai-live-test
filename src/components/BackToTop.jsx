import React, { useState } from "react";
import arrowimg from "../assets/images/svg/toptobtm.svg";
const TopToBottom = () => {
  const [first, setfirst] = useState(true);
  const clikontop = () => {
    document.documentElement.scrollTop = 0;
  };
  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 300) {
      setfirst(false);
    } else {
      setfirst(true);
    }
  });
  return (
    <section className=" position-fixed arrow_pos cur_poi">
      <img
        src={arrowimg}
        alt="arrowimg"
        onClick={() => clikontop()}
        className={first ? "d-none" : "d-block"}
      />
    </section>
  );
};

export default TopToBottom;
