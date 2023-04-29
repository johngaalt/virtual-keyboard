import keys from '../constants/keys';
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
    const primarySymbol = button.dataset.button;
    updateTextAreaValue(primarySymbol);
  });
}

export default createKeyboard;
