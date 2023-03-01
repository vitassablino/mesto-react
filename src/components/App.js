import "../index.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import React from "react";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] =
    React.useState(false);
  const [isAddCardPopupOpen, setAddCardPopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [isImagePopupOpened, SetIsImagePopupOpened] = React.useState(false);

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
    setSelectedCard({});
    SetIsImagePopupOpened(false);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
    SetIsImagePopupOpened(true);
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
            onCardClick={handleCardClick}
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
        </div>

        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups}
          isOpen={isImagePopupOpened}
        />
      </body>
    </>
  );
}

export default App;
