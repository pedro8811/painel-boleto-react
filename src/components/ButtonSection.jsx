import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';

import "./ButtonSection.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { RiQrCodeLine } from "react-icons/ri";
import { FaCopy } from "react-icons/fa";
import { AiFillFilePdf } from "react-icons/ai";

export default function ButtonSection() {
  const [show, setShow] = useState(false);
  const [mostrar, setMostrar] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let qrCode = `https://chart.googleapis.com/chart?chs=400x400&cht=qr&chl=https://www.twitter.com`;
  let textoAserCopiado = 'asdfasfsadfasdfasd'

  return (
    <div>

      <Modal show={show} onHide={handleClose}>
        {/* <Modal.Header closeButton> */}
          <Modal.Title className="centralizar">Aponte a câmera do seu celular</Modal.Title>
        {/* </Modal.Header> */}
        <Modal.Body className="centralizar">
          <img src={qrCode}></img>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="buttons">
        <button onClick={handleShow} className="mainButton">
          <RiQrCodeLine></RiQrCodeLine>
          &nbsp; PIX - QR Code
        </button>
        <button 
          className="mainButton" 
          onClick={() => {navigator.clipboard.writeText(textoAserCopiado)}}>
          <FaCopy></FaCopy>
          &nbsp; PIX - Copia e cola
        </button>
        <button className="mainButton">
          <AiFillFilePdf></AiFillFilePdf>
          &nbsp; Visualizar PDF (2° Via)
        </button>
        <button className="mainButton">
          <AiFillFilePdf></AiFillFilePdf>
          &nbsp; Compartilhar PDF (2° Via)
        </button>
      </div>
    </div>
  );
}
