import isCapsLockActive from '../utils/isCapsLockActive';
import isShiftActive from '../utils/isShiftActive';

function createTextArea() {
  const textArea = document.createElement('textarea');
  textArea.classList.add('textarea');
  textArea.cols = '93';
  textArea.rows = '20';
  return textArea;
}

export function updateTextAreaValue(buttonData) {
  let symbol;

  const lang = localStorage.getItem('language');
  const textArea = document.querySelector('.textarea');
  const isFirstRowSymbol = (buttonData.keyCode >= 48 && buttonData.keyCode <= 57)
    || Number(buttonData.keyCode) === 192
    || Number(buttonData.keyCode) === 187
    || Number(buttonData.keyCode) === 189;
  const isSpecialSymbols = Number(buttonData.keyCode) === 186
    || Number(buttonData.keyCode) === 222
    || Number(buttonData.keyCode) === 188
    || Number(buttonData.keyCode) === 190
    || Number(buttonData.keyCode) === 191;

  if (isSpecialSymbols && lang === 'Русский') {
    symbol = buttonData.extra;
  } else if (isSpecialSymbols && lang === 'English' && isShiftActive()) {
    symbol = buttonData.secondary;
  } else if (!isFirstRowSymbol && lang === 'Русский') {
    symbol = buttonData.secondary;
  } else if (lang === 'Русский') {
    symbol = buttonData.button;
  } else if (isFirstRowSymbol && isShiftActive()) {
    symbol = buttonData.secondary;
  } else {
    symbol = buttonData.button;
  }

  if (
    (isCapsLockActive() && !isShiftActive())
    || (isShiftActive() && !isCapsLockActive())
  ) {
    textArea.value += symbol.toUpperCase();
  } else {
    textArea.value += symbol.toLowerCase();
  }
}
export default createTextArea;
