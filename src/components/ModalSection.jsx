import React, { useState } from "react";
import modalimg from "../assets/images/img/modalimg.png";
import playicon from "../assets/images/img/playicon.png";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
const ModalSection = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <section className="py-lg-5 position-relative">
      <div className="modal_green_box position-absolute end-0"></div>
      <div className="modal_blue_box position-absolute start-0"></div>
      <div className="custom_container py-5 ">
        <div
          className=" position-relative text-center bg_modalimg max_w_946  mx-auto br_15"
          data-aos="flip-down"
        >
          <div
            onClick={handleShow}
            className="h-100 cur_poi d-flex justify-content-center flex-column py-5 align-items-center "
          >
            <p className=" ff_Segoe fw-semibold fs_8xl clr_white mt-5">
              Watch a demo
            </p>
            <img src={playicon} alt="playicon" />
            <p className=" ff_Segoe fw-semibold fs_lg clr_white my-5 ">
              Catalyze AI is a predictive analytics business development
              platform
            </p>
          </div>
        </div>

        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/GQ0PzxV2p9k"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </Modal.Body>
        </Modal>
      </div>
    </section>
  );
};

export default ModalSection;
