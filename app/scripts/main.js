function countdownFrom(datetime) {
  var cd = moment().countdown(datetime);
  console.log(cd);
  var cdStr = '';

  if (cd.months > 0) {
    cdStr += cd.months + ' ';
    cdStr += cd.months > 1 ?  '' + 'meses ' : '' + 'mês ';
  }

  if (cd.days > 0) {
    cdStr += cd.days + ' ';
    cdStr += cd.days > 1 ?  '' + 'dias ' : '' + 'dia ';
  }

  if (cd.hours > 0) {
    cdStr += cd.hours + ' ';
    cdStr += cd.hours > 1 ?  '' + 'horas ' : '' + 'hora ';
  }

  if (cd.minutes > 0) {
    cdStr += cd.minutes + ' ';
    cdStr += cd.minutes > 1 ?  '' + 'minutos ' : '' + 'minuto ';
  }

  if (cd.seconds > 0) {
    cdStr += cd.seconds + ' ';
    cdStr += cd.seconds > 1 ?  '' + 'segundos ' : '' + 'segundo ';
  }

  return cdStr;
}

document.addEventListener('DOMContentLoaded', function () {

  setInterval(function () {
    var ida = countdownFrom('2017-09-07 21:45');
    var volta = countdownFrom('2017-09-27 21:45');
    var idaElem = document.querySelector('.ida');
    var voltaElem = document.querySelector('.volta');
    idaElem.innerText = ida;
    voltaElem.innerText = volta;
  }, 1000);

});