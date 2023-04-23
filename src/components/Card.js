import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card(props) {
  const currentUser = React.useContext(CurrentUserContext);

  const isOwnCard = props.card.owner._id === currentUser._id;
  const isLiked = props.card.likes.some((i) => i._id === currentUser._id);

  const elementDeleteButtonClassName = isOwnCard
    ? "element__delete"
    : "element__delete element__delete_hidden";

  const elementLikeButtonClassName = isLiked
    ? "element__like-button element__like-button_active"
    : "element__like-button";

  function handleCardClick() {
    props.onCardClick(props.card);
  }

  function handleLikeClick() {
    props.onCardLike(props.card);
  }

  function handleCardDeleteRequest() {
    props.onCardDeleteRequest(props.card);
  }

  return (
    <li className="element">
      <div className="element__pic-cintainer">
        <img
          className="element__image"
          alt="Фото"
          onClick={handleCardClick}
          src={props.card.link}
        />
      </div>
      <div className="element__form">
        <h2 className="element__label">{props.card.name}</h2>
        <div className="element__like-container">
          <button
            aria-label="Лайк"
            className={elementLikeButtonClassName}
            type="button"
            onClick={handleLikeClick}
          ></button>
          <p className="element__like-counter">{props.card.likes.length}</p>
        </div>
      </div>
      <button
        aria-label="Удалить место"
        className={elementDeleteButtonClassName}
        type="button"
        onClick={handleCardDeleteRequest}
      ></button>
    </li>
  );
}

export default Card;
