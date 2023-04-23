import React from "react";
import avatar from "../images/avatar.png";
import api from "../utils/Api";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);

  /*   const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);
 */
  /*   React.useEffect(() => {
    api
      .getData()
      .then((data) => {
        const [cardsData, userData] = data;
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
        setCards(cardsData);
      })
      .catch((err) => {
        console.log(err);
      });
  });
 */
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__container">
          <div className="profile__avatar-container">
            <img
              className="profile__avatar"
              src={currentUser.avatar}
              alt={`Аватарка ${currentUser.name}`}
            />
            <div
              className="profile__avatar-button"
              onClick={props.onEditAvatar}
            ></div>
          </div>
          <div className="profile__info">
            <h1 className="profile__name">{currentUser.name}</h1>
            <button
              aria-label="Редактировать профиль"
              className="profile__edit-button"
              type="button"
              onClick={props.onEditProfile}
            ></button>
            <p className="profile__description">{currentUser.about}</p>
          </div>
        </div>
        <button
          aria-label="Добавить место"
          className="profile__add-button"
          type="button"
          onClick={props.onAddPlace}
        ></button>
      </section>

      {
        <ul className="elements">
          {props.cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              onCardClick={props.onCardClick}
              onCardLike={props.onCardLike}
              onCardDeleteRequest={props.onCardDeleteRequest}
            />
          ))}
        </ul>
      }
    </main>
  );
}

export default Main;
