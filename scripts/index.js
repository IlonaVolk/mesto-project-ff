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
  const cardElment = newCardTemplate.querySelector('.card'); 

  newCardTemplate.querySelector('.card__image').src = link;
  newCardTemplate.querySelector('.card__title').textContent = name;
  newCardTemplate.querySelector('.card__image').alt = name;

  cardDeleteButton.addEventListener('click', () => {
    deleteCard(name, cardElment);
  });

  return newCardTemplate;
};

function deleteCard(name, cardElment) {
  console.log(`Удаление карточки "${name}".`);
  cardElment.remove();
}

initialCards.forEach(cardItems => {
  const cardItem = createCard(cardItems, deleteCard);
  placesList.appendChild(cardItem);
});