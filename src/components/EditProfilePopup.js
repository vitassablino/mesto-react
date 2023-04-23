import React from "react";
import PopupWithForm from "./PopupWithForm";
import { useFormValidation } from "../hooks/useFormValidation";

import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup(props) {
  const { values, errors, isValid, handleChange, resetForm } =
    useFormValidation({});

  const currentUser = React.useContext(CurrentUserContext);

  function handleSubmit(evt) {
    evt.preventDefault();
    console.log(values);
    props.onUpdateInfo(values);
    console.log(values);
  }

  React.useEffect(() => {
    if (currentUser) {
      resetForm(currentUser);
    }
  }, [currentUser, resetForm, props.isOpen]);

  return (
    <PopupWithForm
      name="edit-popup"
      title="Редактировать профиль"
      buttonText="Сохранить"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      isDisabled={!isValid}
    >
      <input
        className={
          errors.name
            ? "popup-form__input popup-form__input_wrong"
            : "popup-form__input"
        }
        type="text"
        name="name"
        autoComplete="off"
        placeholder="Имя"
        id="name"
        minLength="3"
        maxLength="40"
        required
        onChange={handleChange}
      />
      <span className="popup-form__input-error" id="name-error">
        {errors.name}
      </span>
      <input
        className={
          errors.description
            ? "popup-form__input popup-form__input_wrong"
            : "popup-form__input"
        }
        type="text"
        name="description"
        autoComplete="off"
        placeholder="Описание"
        id="description"
        minLength="3"
        maxLength="200"
        required
        onChange={handleChange}
      />
      <span className="popup-form__input-error" id="description-error">
        {errors.description}
      </span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
