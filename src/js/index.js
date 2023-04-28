import keys from '../constants/keys';
import button from './button';
import '../styles/styles.scss';

const keysElements = keys.map((key) => {
  const div = document.createElement('span');
  div.textContent = key.primary;
  return div;
});

document.body.append(...keysElements);
