import React, { useContext, useState } from "react";
import AvatarPng from "../assets/img/avatar.png";
import "../assets/style/Profile.css";
import ProfileModal from "./modal/ProfileModal";
import { observer } from "mobx-react-lite";
import { Context } from "..";
import { useNavigate } from "react-router-dom";
import { HOME_ROUTE } from "../utils/consts";

const Profile = observer(() => {
  const { user } = useContext(Context);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleShowModal = () => {
    setShowModal(true);
  };

  const exit = () => {
    user.setIsAuth(false);
    navigate(HOME_ROUTE);
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
          <button onClick={exit} className="profile__btn profile__btn-red">
            Выйти
          </button>
        </div>
      </div>

      <ProfileModal showModal={showModal} onHide={() => setShowModal(false)} />
    </>
  );
});

export default Profile;
