import { Modal } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../../utils/consts";

const AuthModal = ({ showModal, handleClose }) => {

  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Body>
        <p className="modal-auth__title">
          Авторизуйтесь или зарегистрируйтесь, чтобы сохранять треки.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Link className="modal-auth__btn modal-auth__btn-reg" to={REGISTRATION_ROUTE} onClick={handleClose}>
          Зарегистрироваться
        </Link>
        <Link className="modal-auth__btn modal-auth__btn-log" to={LOGIN_ROUTE} onClick={handleClose}>
          Авторизоваться
        </Link>
      </Modal.Footer>
    </Modal>
  );
};

export default AuthModal;
