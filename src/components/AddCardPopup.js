import React from "react";
import PopupWithForm from "./PopupWithForm";

import { useFormValidation } from "../hooks/useFormValidation";

function AddCardPopup(props) {
  const { values, errors, isValid, handleChange, resetForm } =
    useFormValidation({});

  function handleSubmit(evt) {
    evt.preventDefault(evt);
    props.onAddPlace(values);
  }

  React.useEffect(() => {
    resetForm();
  }, [props.isOpen, resetForm]);

  return (
    <PopupWithForm
      name="card-popup"
      title="Новое место"
      buttonText="Создать"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      isDisabled={!isValid}
    >
      <input
        className={
          errors.cardName
            ? "popup-form__input popup-form__input_wrong"
            : "popup-form__input"
        }
        type="text"
        name="cardName"
        autoComplete="off"
        placeholder="Название"
        id="cardName"
        minLength="2"
        maxLength="30"
        required
        onChange={handleChange}
      />
      <span className="popup-form__input-error" id="cardName-error">
        {errors.cardName}
      </span>
      <input
        className={
          errors.cardLink
            ? "popup-form__input popup-form__input_wrong"
            : "popup-form__input"
        }
        type="url"
        name="cardLink"
        autoComplete="off"
        placeholder="Ссылка на картинку"
        id="cardLink"
        required
        onChange={handleChange}
      />
      <span className="popup-form__input-error" id="cardLink-error">
        {errors.cardLink}
      </span>
    </PopupWithForm>
  );
}

export default AddCardPopup;
