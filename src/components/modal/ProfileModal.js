import { Button, Modal } from "react-bootstrap";
import React, { useState } from "react";
import { user } from "../../utils/objData";

const ProfileModal = ({ showModal, onHide }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [nick, setNick] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleCloseModal = () => {
    onHide();
  };

  return (
    <Modal show={showModal} onHide={handleCloseModal} className="profile__modal">
      <Modal.Body className="profile__modal-body">
        <div className="profile__modal-group">
          <label className="profile__modal-label" for="name">
            Имя
          </label>
          <input
            className="profile__modal-input"
            type="text"
            placeholder="Имя"
            id="name"
            value={user.name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="profile__modal-group">
          <label className="profile__modal-abel" for="surname">
            Фамилия
          </label>
          <input
            className="profile__modal-input"
            type="text"
            placeholder="Фамилия"
            id="surname"
            value={user.surname}
            onChange={(e) => setSurname(e.target.value)}
          />
        </div>
        <div className="profile__modal-group">
          <label className="profile__modal-label" for="nick">
            Никнейм
          </label>
          <input
            className="profile__modal-input"
            type="text"
            placeholder="Никнейм"
            id="nick"
            value={user.nickname}
            onChange={(e) => setNick(e.target.value)}
          />
        </div>
        <div className="profile__modal-group">
          <label className="profile__modal-label" for="phone">
            Телефон
          </label>
          <input
            className="profile__modal-input"
            type="tel"
            placeholder="Телефон"
            id="phone"
            value={user.phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="profile__modal-group">
          <label className="profile__modal-label" for="email">
            Почта
          </label>
          <input
            className="profile__modal-input"
            type="email"
            placeholder="Почта"
            id="email"
            value={user.email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </Modal.Body>
      <Modal.Footer className="profile__modal-footer">
        <Button className="profile__modal-btn" onClick={handleCloseModal} variant="secondary">Закрыть</Button>
        <Button className="profile__modal-btn" variant="primary">Сохранить</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProfileModal;
