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
  var histogramStep = 50;
  var initialX = 120;
  var initialY = 150;
  var histogramColor = 'rgba(255, 0, 0, 1)';
  // Рассчитываем коэффициент для размером гистограммы
  var max = 0;
  for (var i = 0; i <= times.length - 1; i++) {
    if (times[i] > max) {
      max = times[i];
    }
  }
  var step = histogramHeight / max;
  // Рисуем гистограмму
  var koeff = max - times[0] * step;
  ctx.fillStyle = 'rgba(0, 0, 255, 0.9)';
  ctx.fillRect(150, max * step - times[0] * step + 100, 40, times[0] * step);
  ctx.fillRect(240, max * step - times[1] * step + 100, 40, times[1] * step);
  ctx.fillRect(330, max * step - times[2] * step + 100, 40, times[2] * step);
  ctx.fillRect(420, max * step - times[3] * step + 100, 40, times[3] * step);
};
