'use strict';
// Показываем блок .setup
var setupBlock = document.querySelector('.setup');
setupBlock.classList.remove('hidden');
// Показываем блок .setup-similar
var setupSimilarBlock = document.querySelector('.setup-similar');
setupSimilarBlock.classList.remove('hidden');
// Функция для определения случайного числа из диапозона
function countRandom(min, max) {
  return Math.floor((Math.random() * (max - min)) + min);
}
// Определяем массивы
var wizardArray = [];
var firstName = ['Иван', 'Хуан Себсатьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var secondName = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];
// Функция объединения создания волшебника
function renderWizard(wizardName, wizardSurname, wizardCoatColor, wizardEyesColor) {
  for (var i = 0; i < 4; i++) {
    var wizardElement = {
      name: wizardName[countRandom(0, 7)] + ' ' + wizardSurname[countRandom(0, 7)],
      coatColor: wizardCoatColor[countRandom(0, 5)],
      eyesColor: wizardEyesColor[countRandom(0, 4)]
    };
    wizardArray.push(wizardElement);
  }
  return wizardArray;
}
// Создаем элементы для DOM
var template = document.querySelector('template');
var setupElement = template.content.querySelector('.setup-similar-item');
var setupContainer = document.querySelector('.setup-similar-list');
// Функция отображения волшебников
function renderWizardSetup(wizard) {
  var wizardOutlook = setupElement.cloneNode(true);
  wizardOutlook.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardOutlook.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardOutlook.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardOutlook;
}
// Отрисовывем волшебников через вызов функции в цикле
var fragment = document.createDocumentFragment();
for (var i = 0; i < 4; i++) {
  fragment.appendChild(renderWizardSetup(renderWizard(firstName, secondName, coatColor, eyesColor)[i]));
}
setupContainer.appendChild(fragment);
