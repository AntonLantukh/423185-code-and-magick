'use strict';

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
setupBlock.classList.remove('hidden');
setupSimilarBlock.classList.remove('hidden');

// Наполняем массив волшебников
for (var i = 0; i < 4; i++) {
  wizardsArray.push(createWizard(firstName, secondName, coatColor, eyesColor));
}

// Отрисовывем волшебников через вызов функции в цикле
for (i = 0; i < 4; i++) {
  fragment.appendChild(renderWizardSetup(wizardsArray));
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

// Функция отображения волшебников
function renderWizardSetup(wizard) {
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
