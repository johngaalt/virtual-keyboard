import isCapsLockActive from '../utils/isCapsLockActive';
import isShiftActive from '../utils/isShiftActive';

function createTextArea() {
  const textArea = document.createElement('textarea');
  textArea.classList.add('textarea');
  textArea.cols = '140';
  textArea.rows = '20';
  return textArea;
}

export function updateTextAreaValue(symbol) {
  const textArea = document.querySelector('.textarea');
  if ((isCapsLockActive() && !isShiftActive()) || (isShiftActive() && !isCapsLockActive())) {
    textArea.value += symbol.toUpperCase();
  } else {
    textArea.value += symbol.toLowerCase();
  }
}
export default createTextArea;
