import React from "react";

function PopupWithForm(props) {
  return (
    <div
      className={`popup popup_type_${props.name} ${
        props.isOpen && "popup_active"
      }`}
    >
      <div className="popup__form">
        <form className="popup-form" name={props.name} noValidate>
          <h3 className="popup-form__header">{props.title}</h3>
          {props.children}
          <button
            type="submit"
            className={
              props.isDisabled
                ? "popup-form__save-button popup-form__save-button_disabled"
                : "popup-form__save-button"
            }
            disabled={props.isDisabled}
          >
            {props.buttonText || "Сохранить"}
          </button>
        </form>
        <button
          type="button"
          className="popup__close-button"
          aria-label="Закрыть форму ввода"
          onClick={props.onClose}
        ></button>
      </div>
    </div>
  );
}

export default PopupWithForm;
