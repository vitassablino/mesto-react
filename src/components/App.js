import { useEffect, useState } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

import api from "../utils/Api";

import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddCardPopup from "./AddCardPopup";
import ConfirmPopup from "./ConfirmPopup";
import ImagePopup from "./ImagePopup";

function App() {
  const [currentUser, setCurrentUser] = useState({}),
    [isLoading, setIsLoading] = useState(false),
    [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false),
    [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false),
    [isAddCardPopupOpen, setIsAddCardPopupOpen] = useState(false),
    [selectedCard, setSelectedCard] = useState({ name: "", link: "" }),
    [cardToDelete, setCardToDelete] = useState(null),
    allSetsPopupOpen = [
      setIsEditAvatarPopupOpen,
      setIsEditProfilePopupOpen,
      setIsAddCardPopupOpen,
    ],
    [cards, setCards] = useState([]);

  /* получение данныъ пользователя и карточек */
  useEffect(() => {
    Promise.all([api.getUserData(), api.getInitialCards()])
      .then((res) => {
        const [userData, cardsArray] = res;
        setCards(cardsArray);
        setCurrentUser(userData);
      })
      .catch((err) => console.log(err));
  }, []);

  /* Функция закрытия мод.окон */
  function closeAllPopups() {
    allSetsPopupOpen.forEach((item) => item(false));
    setSelectedCard({ name: "", link: "" });
    setCardToDelete(null);
    setIsLoading(false);
  }

  /* Фнункция обновления аватарки */
  function handleUpdateAvatar(avatarData) {
    setIsLoading(true);
    api
      .editAvatar(avatarData)
      .then((userData) => {
        setCurrentUser(userData);
        closeAllPopups();
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }

  /* Функция обновления информации о пользователе */
  function handleUpdateUser(data) {
    setIsLoading(true);
    api
      .setUserData(data)
      .then((userData) => {
        setCurrentUser(userData);
        closeAllPopups();
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }

  /* Фнункция добавления места аватарки */
  function handleAddCardSubmit(cardData) {
    setIsLoading(true);
    api
      .addNewCard(cardData)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }

  /* Фнункция выбора карточки */
  function handleCardClick(card) {
    setSelectedCard(card);
  }

  /* Фнункция лайка */
  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    console.log(card.id);

    api
      .changeLike(card.id, isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((c) => (c._id === card.id ? newCard : c))
        );
      })
      .catch((err) => console.log(err));
  }

  /*Функция удаления карточки */
  function handleCardDelete(cardId) {
    console.log(cardId);
    setCardToDelete(cardId);
  }

  /*Функция подтверждения удаления карточки */
  function handleConfirmBeforeDelete() {
    setIsLoading(true);
    api
      .delete(cardToDelete)
      .then(() => {
        setCards(cards.filter((c) => c._id !== cardToDelete));
        closeAllPopups();
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="body">
        <div className="page">
          <Header />
          <Main
            onEditProfile={setIsEditProfilePopupOpen} // редактирование профиля
            onAddPlace={setIsAddCardPopupOpen} // добавление карточки
            onEditAvatar={setIsEditAvatarPopupOpen} // редактирование аватара
            onCardClick={handleCardClick} // нажатие на карточку
            cards={cards}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete} // удаление карточки
          />

          <Footer />

          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
            isLoading={isLoading}
          />
          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}
            isLoading={isLoading}
          />

          <AddCardPopup
            isOpen={isAddCardPopupOpen}
            onClose={closeAllPopups}
            onAddCard={handleAddCardSubmit}
            isLoading={isLoading}
          />

          <ImagePopup card={selectedCard} onClose={closeAllPopups} />

          <ConfirmPopup
            isOpen={cardToDelete}
            onClose={closeAllPopups}
            onConfirm={handleConfirmBeforeDelete}
            title="Вы уверены?"
            buttonText="Да"
          />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
