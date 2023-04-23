import React from "react";
import PopupWithForm from "./PopupWithForm";
import { useFormValidation } from "../hooks/useFormValidation";

function EditAvatarPopup(props) {
  const { values, errors, isValid, handleChange, resetForm } =
    useFormValidation({});

  function handleSubmit(evt) {
    evt.preventDefault();
    props.onUpdateAvatar(values);
  }

  React.useEffect(() => {
    resetForm();
  }, [props.isOpen, resetForm]);

  return (
    <PopupWithForm
      name="popup-avatar-edit"
      title="Обновить аватар"
      buttonText="Сохранить"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      isDisabled={!isValid}
    >
      <input
        type="url"
        id="avatar"
        name="avatar"
        className={
          errors.avatar
            ? "popup-form__input popup-form__input_wrong"
            : "popup-form__input"
        }
        placeholder="Ссылка на изображение"
        required
        value={values.avatar || ""}
        onChange={handleChange}
      />
      <span className="popup-form__input-error" id="avatar-error">
        {errors.avatar}
      </span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
