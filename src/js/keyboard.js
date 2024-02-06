import keys from '../constants/keys';
import createButton from './button';
import buttonClick, { buttonKeydown } from './buttons-functionality';

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
      buttonClick(button);
    }
  });
}

export function keyboardKeyDownListener() {
  document.addEventListener('keydown', (event) => {
    const key = event.keyCode;
    const virtualKey = document.querySelector(`[data-key-code="${key}"]`);
    if (virtualKey) {
      buttonKeydown(event, virtualKey);
    }
  });

  document.addEventListener('keyup', (event) => {
    const key = event.keyCode;
    const virtualKey = document.querySelector(`[data-key-code="${key}"]`);
    if (virtualKey) {
      virtualKey.classList.remove('button--active');
    }
  });
}

export default createKeyboard;
