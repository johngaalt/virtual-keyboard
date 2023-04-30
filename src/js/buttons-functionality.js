import isAltActive from '../utils/isAltActive';
import isShiftActive from '../utils/isShiftActive';
import removeActiveClass from '../utils/removeActiveClass';
import createInformationBlock from './info';
import { updateTextAreaValue } from './textarea';

function toggleActiveButton(button) {
  button.classList.toggle('button--active');
}

function deleteSymbolBefore() {
  const textArea = document.querySelector('.textarea');
  const currentValue = textArea.value;
  const newValue = currentValue.slice(0, currentValue.length - 1);
  textArea.value = newValue;
}

function deleteSymbolAfter() {
  const textArea = document.querySelector('.textarea');
  const currentValue = textArea.value;
  const cursorPosition = textArea.selectionStart;
  const newValue = currentValue.slice(0, cursorPosition)
    + currentValue.slice(cursorPosition + 1);
  textArea.value = newValue;
  textArea.focus();
  textArea.setSelectionRange(cursorPosition, cursorPosition);
}

function changeLanguage() {
  if (isShiftActive() && isAltActive()) {
    const lang = localStorage.getItem('language') || 'English';
    if (lang === 'English') {
      localStorage.setItem('language', 'Russian');
    } else {
      localStorage.setItem('language', 'English');
    }
    removeActiveClass();
    createInformationBlock();
  }
}

function focusOnTextarea() {
  const textArea = document.querySelector('.textarea');
  textArea.focus();
}

function buttonClick(button) {
  const { keyCode, button: primarySymbol } = button.dataset;
  switch (primarySymbol) {
    case 'Esc':
    case 'Ctrl':
    case 'RCtrl':
    case 'Win':
      console.log(`${primarySymbol} was clicked!`);
      break;
    case 'Tab':
      updateTextAreaValue('\t');
      focusOnTextarea();
      break;
    case 'Caps Lock':
      toggleActiveButton(button);
      break;
    case 'Shift':
    case 'RShift':
      toggleActiveButton(button);
      changeLanguage();
      break;
    case 'Alt':
    case 'RAlt':
      toggleActiveButton(button);
      changeLanguage();
      break;
    case '⌫':
      deleteSymbolBefore();
      focusOnTextarea();
      break;
    case 'Enter':
      updateTextAreaValue('\n');
      focusOnTextarea();
      break;
    case 'Del':
      deleteSymbolAfter();
      break;
    default:
      updateTextAreaValue(primarySymbol);
      focusOnTextarea();
      break;
  }
  //   if (isServiceButton(keyCode)) {
  //     toggleActiveButton(button);
  //   }
}

export default buttonClick;
