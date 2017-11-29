'use strict';

// Объявляем константы
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

// Ищем блок .setup и .setup-similar
var setupBlock = document.querySelector('.setup');
var setupSimilarBlock = document.querySelector('.setup-similar');

// Определяем массивы
var wizardsArray = [];
var firstName = ['Иван', 'Хуан Себсатьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var secondName = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];

// Создаем элементы для DOM
var setupElement = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var setupContainer = document.querySelector('.setup-similar-list');
var fragment = document.createDocumentFragment();


// Показываем элементы на странице
setupSimilarBlock.classList.remove('hidden');

// Наполняем массив волшебников и отрисовывем их через вызов функции в цикле
for (var i = 0; i < 4; i++) {
  wizardsArray.push(createWizard(firstName, secondName, coatColor, eyesColor));
  fragment.appendChild(renderWizard(wizardsArray[i]));
}
setupContainer.appendChild(fragment);


// Функция создания волшебника
function createWizard(name, surname, coat, eyes) {
  var wizardElement = {
    name: name[range(0, 7)] + ' ' + surname[range(0, 7)],
    coatColor: coat[range(0, 5)],
    eyesColor: eyes[range(0, 4)]
  };
  return wizardElement;
}

// Функция обработки внешнего вида волшебника
function renderWizard(wizard) {
  var wizardOutlook = setupElement.cloneNode(true);
  wizardOutlook.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardOutlook.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardOutlook.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardOutlook;
}

// Функция для определения случайного числа из диапозона
function range(min, max) {
  return Math.floor((Math.random() * (max - min)) + min);
}

// Обработчик событий
var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');
var setupInput = document.querySelector('.setup-user-name');
var setupSubmit = document.querySelector('.setup-submit');

var openPopup = function () {
  setupBlock.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setupBlock.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    if (evt.target !== setupInput) {
      closePopup();
    } else {
      return;
    }
  }
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

setupSubmit.addEventListener('click', function (evt) {
  evt.preventDefault();
  closePopup();
});

setupSubmit.addEventListener('keydown', function (evt) {
  evt.preventDefault();
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});
