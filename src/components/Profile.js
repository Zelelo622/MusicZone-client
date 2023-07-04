import React from "react";
import AvatarPng from "../assets/img/avatar.png";
import "../assets/style/Profile.css";

const Profile = () => {
  return (
    <>
      <div className="profile">
        <div className="profile__container">
          <img className="profile__img" src={AvatarPng} alt="Аватарка" />
          <div className="profile__info">
            <div className="profile__name">Кирин Егор</div>
            <div className="profile__nick">Zelelo</div>
          </div>
        </div>
        <div className="profile__btns">
            <button className="profile__btn profile__btn-grey">Редактировать профиль</button>
            <button className="profile__btn profile__btn-red">Выйти</button>
        </div>
      </div>
    </>
  );
};

export default Profile;
