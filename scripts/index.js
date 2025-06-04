// @todo: Темплейт карточки
// @todo: DOM узлы
// @todo: Функция создания карточки
// @todo: Функция удаления карточки
// @todo: Вывести карточки на страницу

const cardTemplate = document.querySelector('#card-template');
const placesList = document.querySelector('.places__list');

function createCard({name, link}, deleteCard) {
  const newCardTemplate = cardTemplate.content.cloneNode(true);
  const cardDeleteButton = newCardTemplate.querySelector('.card__delete-button');
  newCardTemplate.querySelector('.card__image').src = link;
  newCardTemplate.querySelector('.card__title').textContent = name;
  cardDeleteButton.addEventListener('click', () => {
    deleteCard(name);
  });
  return newCardTemplate;
};

function onDeleteClick(cardNameItem) {
  console.log(`Удаление карточки ${cardNameItem}.`);
};

initialCards.forEach(cardItems => {
  const cardItem = createCard(cardItems, onDeleteClick);
  placesList.appendChild(cardItem);
});

const cradDeleteButtons = document.querySelectorAll('.card__delete-button');

cradDeleteButtons.forEach(button => {
  button.addEventListener('click', function() {
    this.parentElement.remove();
  });
});