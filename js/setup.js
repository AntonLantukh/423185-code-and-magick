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
var fireballColor = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

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
var setupCoatColor = document.querySelector('.setup-wizard .wizard-coat');
var setupEyesColor = document.querySelector('.setup-wizard .wizard-eyes');
var setupFireball = document.querySelector('.setup-fireball-wrap');

// Функция отображения окна настройки персонажа
var openPopup = function () {
  setupBlock.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

// Функция сокрытия окна настройки персонажа
var closePopup = function () {
  setupBlock.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

// Функция обработки события при нажатии на ESC
var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    if (evt.target !== setupInput) {
      closePopup();
    } else {
      return;
    }
  }
};

// Открываем оконо при клике на аватар
setupOpen.addEventListener('click', function () {
  openPopup();
});

// Открываем окно при нажатии на аватар
setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

// Закрвыаем окно при клике на крестик
setupClose.addEventListener('click', function () {
  closePopup();
});

// Закрываем окно при нажатии на крестик
setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

// Закрываем окно при клике на сабмит
setupSubmit.addEventListener('click', function () {
  closePopup();
});

// Закрываем окно при нажатии на сабмит
setupSubmit.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

// Меняем цвет мантии при нажатии
setupCoatColor.addEventListener('click', function () {
  setupCoatColor.style.fill = coatColor[range(0, 5)];
});

// Меняем цвет глаз при нажатии
setupEyesColor.addEventListener('click', function () {
  setupEyesColor.style.fill = eyesColor[range(0, 4)];
});

// Меняем цвет фаербола при нажатии
setupFireball.addEventListener('click', function () {
  setupFireball.style.backgroundColor = fireballColor[range(0, 4)];
});
