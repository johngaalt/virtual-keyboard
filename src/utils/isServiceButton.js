import { SERVICE_BUTTONS } from '../constants/keys';

function isServiceButton(keyCode) {
  return SERVICE_BUTTONS.some((elem) => elem.keyCode === Number(keyCode));
}

export default isServiceButton;
