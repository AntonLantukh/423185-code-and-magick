window.renderStatistics = function (ctx, names, times) {
  // Рисуем тень для облака
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);
  // Рисуем само облако
  ctx.fillStyle = 'white';
  ctx.fillRect(100, 10, 420, 270);
  // Выводим финальное сообщение
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов', 120, 60);
  // Параметры гистограммы
  var histogramHeight = 150;
  var histogramWidth = 40;
  var initialX = 150;
  var indent = 90;
  var lineHeight = 20;
  // Рассчитываем коэффициент для размером гистограммы
  var max = 0;
  for (var i = 0; i <= times.length - 1; i++) {
    if (times[i] > max) {
      max = times[i];
    }
  }
  var step = histogramHeight / max;
  // Вывод гистограммы через цикл
  for (var j = 0; j <= times.length - 1; j ++) {
    if (names[j] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    }
    else {
      ctx.fillStyle = 'rgba(0, 0, 255, ' + Math.random() + ')';
    }
    ctx.fillRect(initialX + indent * j, max * step - times[j] * step + 100, histogramWidth, times[j] * step);
    ctx.fillStyle = 'rgba(0, 0, 0, 1)';
    ctx.fillText(names[j], initialX + indent * j, histogramHeight + 100 + lineHeight);
    ctx.fillText(Math.round(times[j]), initialX + indent * j, max * step - times[j] * step + 100 - lineHeight);
  }
};
