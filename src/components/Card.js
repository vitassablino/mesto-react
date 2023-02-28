import React from "react";

function Card(props) {
  function handleCardClick() {
    props.onCardClick(props.card);
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
            className="element__like-button"
            type="button"
          ></button>
          <p className="element__like-counter">{props.card.likes.length}</p>
        </div>
      </div>
      <button
        aria-label="Удалить место"
        className="element__delete"
        type="button"
      ></button>
    </li>
  );
}

export default Card;
