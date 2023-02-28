import React from "react";

function ImagePopup(props) {
  return (
    <div
      className={`popup image-container ${props.card && "popup_active"}`}
      id="image-container"
    >
      <div className="popup__figure-position" id="figure-position ">
        <figure className="image-figure">
          <img
            alt="Изображение"
            className="image-figure__big-image"
            src={props.card.link}
          />
          <figcaption className="image-figure__figcaption">
            {props.card.name}
          </figcaption>
        </figure>
        <button
          className="popup__close-button"
          aria-label="Закрыть изображение"
          type="button"
          onClick={props.onClose}
        ></button>
      </div>
    </div>
  );
}

export default ImagePopup;
