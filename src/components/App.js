import "../index.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import React from "react";

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] =
    React.useState(false);
  const [isAddCardPopupOpen, setAddCardPopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);

  function handleEditProfilePopupOpen() {
    setEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function handleAddCardPopupOpen() {
    setAddCardPopupOpen(!isAddCardPopupOpen);
  }

  function handleditAvatarPopupOpen() {
    setEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  function closeAllPopups() {
    setEditProfilePopupOpen(false);
    setAddCardPopupOpen(false);
    setEditAvatarPopupOpen(false);
  }

  return (
    <>
      <body className="body">
        <div className="page">
          <Header />
          <Main
            onEditProfile={handleEditProfilePopupOpen}
            onAddPlace={handleAddCardPopupOpen}
            onEditAvatar={handleditAvatarPopupOpen}
          />
          <Footer />

          <PopupWithForm
            name="edit-popup"
            title="Редактировать профиль"
            children={
              <>
                <input
                  className="popup-form__input"
                  type="text"
                  name="name"
                  autoComplete="off"
                  placeholder="Имя"
                  id="name"
                  minLength="2"
                  maxLength="40"
                  required
                />
                <span
                  className="popup-form__input-error"
                  id="name-error"
                ></span>
                <input
                  className="popup-form__input"
                  type="text"
                  name="description"
                  autoComplete="off"
                  placeholder="Описание"
                  id="description"
                  minLength="2"
                  maxLength="200"
                  required
                />
                <span
                  className="popup-form__input-error"
                  id="description-error"
                ></span>
              </>
            }
            buttonText="Сохранить"
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
          />

          <PopupWithForm
            name="card-popup"
            title="Новое место"
            children={
              <>
                <input
                  className="popup-form__input"
                  type="text"
                  name="cardName"
                  autoComplete="off"
                  placeholder="Название"
                  id="cardName"
                  minLength="2"
                  maxLength="30"
                  required
                />
                <span
                  className="popup-form__input-error"
                  id="cardName-error"
                ></span>
                <input
                  className="popup-form__input"
                  type="url"
                  name="cardLink"
                  autoComplete="off"
                  placeholder="Ссылка на картинку"
                  id="cardLink"
                  required
                />
                <span
                  className="popup-form__input-error"
                  id="cardLink-error"
                ></span>
              </>
            }
            buttonText="Создать"
            isOpen={isAddCardPopupOpen}
            onClose={closeAllPopups}
          />

          <PopupWithForm
            name="popup_deleting-confirm"
            title="Вы уверены?"
            children={<></>}
            buttonText="Да"
          />

          <PopupWithForm
            name="popup-avatar-edit"
            title="Обновить аватар"
            children={
              <>
                <input
                  type="url"
                  id="avatar"
                  name="avatar"
                  className="popup-form__input"
                  placeholder="Ссылка на изображение"
                  required
                />
                <span
                  className="popup-form__input-error"
                  id="avatar-error"
                ></span>
              </>
            }
            buttonText="Сохранить"
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
          />

          {/*           <div className="popup" id="edit-popup">
            <div className="popup__form">
              <form
                className="popup-form"
                name="edit-popup"
                id="popup-form-profile"
                novalidate
              >
                <h3 className="popup-form__header">Редактировать профиль</h3>
                <input
                  className="popup-form__input"
                  type="text"
                  name="name"
                  autoComplete="off"
                  placeholder="Имя"
                  id="name"
                  minLength="2"
                  maxLength="40"
                  required
                />
                <span className="popup-form__input-error" id="name-error"></span>
                <input
                  className="popup-form__input"
                  type="text"
                  name="description"
                  autoComplete="off"
                  placeholder="Описание"
                  id="description"
                  minLength="2"
                  maxLength="200"
                  required
                />
                <span
                  className="popup-form__input-error"
                  id="description-error"
                ></span>
                <button className="popup-form__save-button" type="submit">
                  Сохранить
                </button>
              </form>
              <button
                aria-label="Закрыть форму ввода"
                className="popup__close-button"
                type="button"
              ></button>
            </div>
          </div>

          <div className="popup" id="card-popup">
            <div className="popup__form">
              <form
                className="popup-form"
                name="card-popup"
                id="popup-form-card"
                novalidate
              >
                <h3 className="popup-form__header">Новое место</h3>
                <input
                  className="popup-form__input"
                  type="text"
                  name="cardName"
                  autoComplete="off"
                  placeholder="Название"
                  id="cardName"
                  minLength="2"
                  maxLength="30"
                  required
                />
                <span
                  className="popup-form__input-error"
                  id="cardName-error"
                ></span>
                <input
                  className="popup-form__input"
                  type="url"
                  name="cardLink"
                  autoComplete="off"
                  placeholder="Ссылка на картинку"
                  id="cardLink"
                  required
                />
                <span
                  className="popup-form__input-error"
                  id="cardLink-error"
                ></span>
                <button
                  className="popup-form__save-button popup-form__save-button_disabled"
                  type="submit"
                  id="create-card"
                  disabled
                >
                  Создать
                </button>
              </form>
              <button
                aria-label="Закрыть форму ввода"
                className="popup__close-button"
                type="button"
              ></button>
            </div>
          </div> */}
        </div>

        {/*         <div className="popup" id="popup_deleting-confirm">
          <div className="popup__form">
            <form
              name="popup_deleting-confirm"
              className="popup-form"
              id="popup-form-delete"
              novalidate
            >
              <h3 className="popup-form__header">Вы уверены?</h3>
              <button
                type="submit"
                className="popup-form__save-button"
                id="delete-card"
              >
                Да
              </button>
            </form>
            <button
              aria-label="Закрыть форму ввода"
              className="popup__close-button"
              type="button"
            ></button>
          </div>
        </div> */}

        {/*         <div className="popup" id="popup-avatar-edit">
          <div className="popup__form">
            <form name="popup-avatar-edit" className="popup-form" novalidate>
              <h3 className="popup-form__header">Обновить аватар</h3>
              <input
                type="url"
                id="avatar"
                name="avatar"
                className="popup-form__input"
                placeholder="Ссылка на изображение"
                required
              />
              <span className="popup-form__input-error" id="avatar-error"></span>
              <button type="submit" className="popup-form__save-button">
                Сохранить
              </button>
            </form>
            <button
              aria-label="Закрыть форму ввода"
              className="popup__close-button"
              type="button"
            ></button>
          </div>
        </div> */}

        {/*         <div className="popup image-container" id="image-container">
          <div className="popup__figure-position" id="figure-position">
            <figure className="image-figure">
              <img alt="Изображение" className="image-figure__big-image" />
              <figcaption className="image-figure__figcaption"></figcaption>
            </figure>
            <button
              aria-label="Закрыть изображение"
              className="popup__close-button"
              type="button"
            ></button>
          </div>
        </div>
 */}
        <template id="element-template">
          <li className="element">
            <div className="element__pic-cintainer">
              <img className="element__image" alt="Фото" />
            </div>
            <div className="element__form">
              <h2 className="element__label"></h2>
              <div className="element__like-container">
                <button
                  aria-label="Лайк"
                  className="element__like-button"
                  type="button"
                ></button>
                <p className="element__like-counter"></p>
              </div>
            </div>
            <button
              aria-label="Удалить место"
              className="element__delete"
              type="button"
            ></button>
          </li>
        </template>
      </body>
    </>
  );
}

export default App;
