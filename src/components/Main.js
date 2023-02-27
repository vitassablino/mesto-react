import React from "react";
import avatar from "../images/avatar.png";
import api from "../utils/Api";

function Main(props) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");

  React.useEffect(() => {
    api
      .getUserData()
      .then((data) => {
        const userData = data;
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__container">
          <div className="profile__avatar-container">
            <img className="profile__avatar" src={userAvatar} alt="Аватарка" />
            <div
              className="profile__avatar-button"
              onClick={props.onEditAvatar}
            ></div>
          </div>
          <div className="profile__info">
            <h1 className="profile__name">{userName}</h1>
            <button
              aria-label="Редактировать профиль"
              className="profile__edit-button"
              type="button"
              onClick={props.onEditProfile}
            ></button>
            <p className="profile__description">{userDescription}</p>
          </div>
        </div>
        <button
          aria-label="Добавить место"
          className="profile__add-button"
          type="button"
          onClick={props.onAddPlace}
        ></button>
      </section>

      <ul className="elements"></ul>
    </main>
  );
}

export default Main;
