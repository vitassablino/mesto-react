import { forwardRef } from "react";

const PopupWithForm = forwardRef(
  ({ name, title, isOpen, onClose, onSubmit, children }, ref) => {
    return (
      <div
        className={`popup ${!isOpen ? "" : "popup popup_active"}`}
        onClick={({ target }) => {
          if (
            target.classList.contains("popup_active") ||
            target.classList.contains("popup__close-button")
          ) {
            onClose();
          }
        }}
      >
        <div className="popup__form">
          <h2 className="popup-form__header">{title}</h2>
          <form
            ref={ref}
            className="popup-form"
            name={`${name}-form`}
            onSubmit={onSubmit}
            noValidate
          >
            {children}
          </form>
          <button
            type="button"
            className="popup__close-button"
            aria-label="Закрыть форму ввода"
          ></button>
        </div>
      </div>
    );
  }
);

export default PopupWithForm;
