window.addEventListener('load', start);

var globalNumber = null;

function start() {
  rangeNumber = document.querySelector('#rangeNumber');

  rangeNumber.addEventListener('click', handleClick);
}

function handleClick(event) {
  var writtenHundred = null;
  var writtenDecimal = null;
  var writtenUnity = null;

  function createNumericNumber(number) {
    var divNumericNumber = document.querySelector('#numericNumber');
    divNumericNumber.innerHTML = number;
  }

  function writeHundred(number) {
    var hundred = Math.floor(number / 100);
    switch (hundred) {
      case 0:
        writtenHundred = null;
        break;
      case 1:
        writtenHundred = 'cento';
        break;
      case 2:
        writtenHundred = 'duzentos';
        break;
      case 3:
        writtenHundred = 'trezentos';
        break;
      case 4:
        writtenHundred = 'quatrocentos';
        break;
      case 5:
        writtenHundred = 'quinhentos';
        break;
      case 6:
        writtenHundred = 'seiscentos';
        break;
      case 7:
        writtenHundred = 'setescentos';
        break;
      case 8:
        writtenHundred = 'oitocentos';
        break;
      case 9:
        writtenHundred = 'novecentos';
        break;
    }
    return writtenHundred;
  }

  function writeDecimal(number) {
    if (number.toString().length === 3) {
      var decimal = number.toString()[1];
    } else {
      if (number.toString().length === 2) {
        var decimal = number.toString()[0];
      } else {
        var decimal = '0';
      }
    }

    switch (decimal) {
      case '1':
        writtenDecimal = writeTens(number);
        break;
      case '2':
        writtenDecimal = 'vinte';
        writtenUnity = writeUnitary(number);
        break;
      case '3':
        writtenDecimal = 'trinta';
        writtenUnity = writeUnitary(number);
        break;
      case '4':
        writtenDecimal = 'quarenta';
        writtenUnity = writeUnitary(number);
        break;
      case '5':
        writtenDecimal = 'cinquenta';
        writtenUnity = writeUnitary(number);
        break;
      case '6':
        writtenDecimal = 'sessenta';
        writtenUnity = writeUnitary(number);
        break;
      case '7':
        writtenDecimal = 'setenta';
        writtenUnity = writeUnitary(number);
        break;
      case '8':
        writtenDecimal = 'oitenta';
        writtenUnity = writeUnitary(number);
        break;
      case '9':
        writtenDecimal = 'noventa';
        writtenUnity = writeUnitary(number);
        break;
      default:
        writtenDecimal = null;
        writtenUnity = writeUnitary(number);
    }

    if (writtenDecimal && writtenUnity) {
      return writtenDecimal + ' e ' + writtenUnity;
    } else if (writtenDecimal !== null && writtenUnity === null) {
      return writtenDecimal;
    } else if (writtenDecimal === null && writtenUnity !== null) {
      return writtenUnity;
    } else {
      return null;
    }
  }

  function writeTens(number) {
    if (number.toString().length === 3) {
      var tens = number.toString()[1] + number.toString()[2];
    } else {
      var tens = number.toString()[0] + number.toString()[1];
    }
    var writtenTens = null;
    switch (tens) {
      case '10':
        writtenTens = 'dez';
        break;
      case '11':
        writtenTens = 'onze';
        break;
      case '12':
        writtenTens = 'doze';
        break;
      case '13':
        writtenTens = 'treze';
        break;
      case '14':
        writtenTens = 'quatorze';
        break;
      case '15':
        writtenTens = 'quinze';
        break;
      case '16':
        writtenTens = 'dezesseis';
        break;
      case '17':
        writtenTens = 'dezessete';
        break;
      case '18':
        writtenTens = 'dezoito';
        break;
      case '19':
        writtenTens = 'dezenove';
        break;
    }
    return writtenTens;
  }

  function writeUnitary(number) {
    if (number.toString().length === 3) {
      var unity = number.toString()[2];
    } else {
      if (number.toString().length === 2) {
        var unity = number.toString()[1];
      } else {
        var unity = number.toString()[0];
      }
    }
    switch (unity) {
      case '1':
        writtenUnity = 'um';
        break;
      case '2':
        writtenUnity = 'dois';
        break;
      case '3':
        writtenUnity = 'três';
        break;
      case '4':
        writtenUnity = 'quatro';
        break;
      case '5':
        writtenUnity = 'cinco';
        break;
      case '6':
        writtenUnity = 'seis';
        break;
      case '7':
        writtenUnity = 'sete';
        break;
      case '8':
        writtenUnity = 'oito';
        break;
      case '9':
        writtenUnity = 'nove';
        break;
      default:
        writtenUnity = null;
    }
    return writtenUnity;
  }

  function createWrittenNumber(number) {
    var divWrittenNumber = document.querySelector('#writtenNumber');
    var hundred = null;
    var decimal = null;

    if (number !== 100 && number !== 0) {
      hundred = writeHundred(number);
      decimal = writeDecimal(number);

      if (hundred && decimal) {
        divWrittenNumber.innerHTML = hundred + ' e ' + decimal;
      } else {
        if (hundred !== null && decimal === null) {
          divWrittenNumber.innerHTML = hundred;
        } else {
          if (hundred === null && decimal !== null) {
            divWrittenNumber.innerHTML = decimal;
          }
        }
      }
    } else {
      if (number === 100) {
        divWrittenNumber.innerHTML = 'cem';
      } else {
        if (number === 0) {
          divWrittenNumber.innerHTML = 'zero';
        }
      }
    }
  }

  var relativePosition = event.clientX;
  var maxPosition = event.view.innerWidth;
  globalNumber = (relativePosition / maxPosition) * 999;
  globalNumber = globalNumber > 999 ? 999 : Math.round(globalNumber);

  createNumericNumber(globalNumber);
  createWrittenNumber(globalNumber);
}
