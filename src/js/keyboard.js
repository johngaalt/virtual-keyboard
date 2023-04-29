import keys from '../constants/keys';
import createButton from './button';

function createKeyboard() {
  const keysElements = keys.map((key) => createButton(key));

  const main = document.createElement('main');
  main.classList.add('keyboard');
  main.append(...keysElements);
  return main;
}

export default createKeyboard;
