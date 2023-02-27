/* Закрытие по нажатию Esc */
export default const closeByEsc = (event) => {
  const key = event.key;
  if (key === "Escape") {
    const popup = document.querySelector(".popup_active");
    closePopup(popup);
  }
};
