import keys from '../constants/keys';
import createButton from './button';
import buttonClick from './buttons-functionality';

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

export default createKeyboard;
