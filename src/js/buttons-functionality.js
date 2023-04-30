import { updateTextAreaValue } from './textarea';

function toggleActiveButton(button) {
  button.classList.toggle('button--active');
}

function buttonClick(button) {
  const { keyCode, button: primarySymbol } = button.dataset;
  switch (primarySymbol) {
    case 'Esc':
      break;
    case 'Tab':
      updateTextAreaValue('\t');
      break;
    case 'Caps Lock':
      toggleActiveButton(button);
      break;
    default:
      updateTextAreaValue(primarySymbol);
      break;
  }
//   if (isServiceButton(keyCode)) {
//     toggleActiveButton(button);
//   }
}

export default buttonClick;
