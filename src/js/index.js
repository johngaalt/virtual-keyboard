import '../styles/styles.scss';
import createInformationBlock from './info';
import createKeyboard, { keyboardClickListener, keyboardKeyDownListener } from './keyboard';
import createTextArea from './textarea';

const keyboard = createKeyboard();
const textArea = createTextArea();
const information = createInformationBlock();

const main = document.createElement('main');
main.append(information, textArea, keyboard);

document.body.append(main);

document.addEventListener('DOMContentLoaded', () => {
  keyboardClickListener();
  keyboardKeyDownListener();
});
