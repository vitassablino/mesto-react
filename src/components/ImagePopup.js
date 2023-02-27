import React from "react";

function ImagePopup() {
  return (
    <div className="image-container" id="image-container">
      <div className="popup__figure-position" id="figure-position">
        <figure className="image-figure">
          <img alt="Изображение" className="image-figure__big-image" />
          <figcaption className="image-figure__figcaption"></figcaption>
        </figure>
      </div>
      <button
        className="popup__close-button"
        aria-label="Закрыть изображение"
        type="button"
      ></button>
    </div>
  );
}

export default ImagePopup;
