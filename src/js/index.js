import keys from '../constants/keys';
import '../styles/styles.scss';
import createButton from './button';

const keysElements = keys.map((key) => createButton(key));

document.body.append(...keysElements);
