import '../styles/styles.scss';
import createKeyboard from './keyboard';
import createTextArea from './textarea';

const keyboard = createKeyboard();
const textArea = createTextArea();

const main = document.createElement('main');
main.append(textArea, keyboard);

document.body.append(main);
