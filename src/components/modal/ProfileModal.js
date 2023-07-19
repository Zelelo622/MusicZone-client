import { Button, Modal } from "react-bootstrap";
import React from "react";
import { user } from "../../utils/objData";

const ProfileModal = ({ showModal, onHide }) => {

  const handleCloseModal = () => {
    onHide();
  };

  return (
    <Modal show={showModal} onHide={handleCloseModal} className="profile__modal">
      <Modal.Body className="profile__modal-body">
        <div className="profile__modal-group">
          <label className="profile__modal-label" htmlFor="name">
            Имя
          </label>
          <input
            className="profile__modal-input"
            type="text"
            placeholder="Имя"
            id="name"
            value={user.name}
            onChange={() => {}}
          />
        </div>
        <div className="profile__modal-group">
          <label className="profile__modal-abel" htmlFor="surname">
            Фамилия
          </label>
          <input
            className="profile__modal-input"
            type="text"
            placeholder="Фамилия"
            id="surname"
            value={user.surname}
            onChange={() => {}}
          />
        </div>
        <div className="profile__modal-group">
          <label className="profile__modal-label" htmlFor="nick">
            Никнейм
          </label>
          <input
            className="profile__modal-input"
            type="text"
            placeholder="Никнейм"
            id="nick"
            value={user.nickname}
            onChange={() => {}}
          />
        </div>
        <div className="profile__modal-group">
          <label className="profile__modal-label" htmlFor="phone">
            Телефон
          </label>
          <input
            className="profile__modal-input"
            type="tel"
            placeholder="Телефон"
            id="phone"
            value={user.phone}
            onChange={() => {}}
          />
        </div>
        <div className="profile__modal-group">
          <label className="profile__modal-label" htmlFor="email">
            Почта
          </label>
          <input
            className="profile__modal-input"
            type="email"
            placeholder="Почта"
            id="email"
            value={user.email}
            onChange={() => {}}
          />
        </div>
      </Modal.Body>
      <Modal.Footer className="profile__modal-footer">
        <Button className="profile__modal-btn" onClick={handleCloseModal} variant="secondary">Закрыть</Button>
        <Button className="profile__modal-btn" variant="primary" onClick={handleCloseModal}>Сохранить</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProfileModal;
