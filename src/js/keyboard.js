import keys from '../constants/keys';
import isServiceButton from '../utils/isServiceButton';
import createButton from './button';
import { updateTextAreaValue } from './textarea';

function createKeyboard() {
  const keysElements = keys.map((key) => createButton(key));

  const main = document.createElement('div');
  main.classList.add('keyboard');
  main.append(...keysElements);
  return main;
}

export function keyboardClickListener() {
  const keyboardElem = document.querySelector('.keyboard');
  keyboardElem.addEventListener('click', (event) => {
    const button = event.target.closest('button');
    if (button) {
      const primarySymbol = button.dataset.button;
      const { keyCode } = button.dataset;
      if (!isServiceButton(keyCode)) {
        updateTextAreaValue(primarySymbol);
      }
    }
  });
}

export default createKeyboard;
