import "../index.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import React from "react";
import ImagePopup from "./ImagePopup";
import api from "../utils/Api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import ConfirmPopup from "./ConfirmPopup";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddCardPopup from "./AddCardPopup";

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] =
    React.useState(false);
  const [isAddCardPopupOpen, setAddCardPopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [isImagePopupOpened, SetIsImagePopupOpened] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);
  const [cardForDelete, setCardForDelete] = React.useState({});
  const [isConfirmPopupOpen, setIsConfirmPopupOpen] = React.useState(false);

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
    setIsConfirmPopupOpen(false);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
    SetIsImagePopupOpened(true);
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    api.changeLike(card._id, isLiked).then(
      (newCard) => {
        const newCards = cards.map((currentCard) =>
          currentCard._id === card._id ? newCard : currentCard
        );
        setCards(newCards);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  function handleCardDeleteRequest(card) {
    setCardForDelete(card);
    setIsConfirmPopupOpen(true);
  }

  function handleCardDelete(evt) {
    evt.preventDefault();
    api.delete(cardForDelete._id).then(
      () => {
        const newCards = cards.filter((elem) => elem !== cardForDelete);
        setCards(newCards);
        closeAllPopups();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  function handleUpdateInfo(data) {
    api.setUserData(data).then(
      (data) => {
        setCurrentUser(data);
        closeAllPopups();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  function handleUpdateAvatar(data) {
    api.editAvatar(data).then(
      (data) => {
        setCurrentUser(data);
        closeAllPopups();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  function handleAddCardSubmit(data) {
    api.addNewCard(data).then(
      (newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  React.useEffect(() => {
    api.getData().then(
      (data) => {
        const [cardsData, userData] = data;
        setCards(cardsData);
        setCurrentUser(userData);
      },
      (err) => {
        console.log(err);
      }
    );
  });

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <body className="body">
        <div className="page">
          <Header />
          <Main
            onEditProfile={handleEditProfilePopupOpen}
            onAddPlace={handleAddCardPopupOpen}
            onEditAvatar={handleditAvatarPopupOpen}
            onCardClick={handleCardClick}
            cards={cards}
            onCardLike={handleCardLike}
            onCardDeleteRequest={handleCardDeleteRequest}
          />
          <Footer />
          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateInfo={handleUpdateInfo}
            currentUser={currentUser}
          />
          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}
          />

          <AddCardPopup
            isOpen={isAddCardPopupOpen}
            onClose={closeAllPopups}
            onAddCard={handleAddCardSubmit}
          />
        </div>

        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups}
          isOpen={isImagePopupOpened}
        />

        <ConfirmPopup
          isOpen={isConfirmPopupOpen}
          onClose={closeAllPopups}
          onSubmit={handleCardDelete}
          title="Вы уверены?"
          buttonText="Да"
        />
      </body>
    </CurrentUserContext.Provider>
  );
}

export default App;
