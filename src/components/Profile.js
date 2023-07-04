import React, { useState } from "react";
import AvatarPng from "../assets/img/avatar.png";
import "../assets/style/Profile.css";
import { user } from "../utils/objData";
import ProfileModal from "./modal/ProfileModal";

const Profile = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  return (
    <>
      <div className="profile">
        <div className="profile__container">
          <img className="profile__img" src={AvatarPng} alt="Аватарка" />
          <div className="profile__info">
            <div className="profile__name">
              {user.surname} {user.name}
            </div>
            <div className="profile__nick">{user.nickname}</div>
          </div>
        </div>
        <div className="profile__btns">
          <button
            onClick={handleShowModal}
            className="profile__btn profile__btn-grey"
          >
            Редактировать профиль
          </button>
          <button className="profile__btn profile__btn-red">Выйти</button>
        </div>
      </div>

      <ProfileModal showModal={showModal} onHide={() => setShowModal(false)} />
    </>
  );
};

export default Profile;
