function createInformationBlock() {
  const lang = localStorage.getItem('language') || 'English';
  const existingInfo = document.querySelector('.info');
  let info;

  if (existingInfo) {
    info = existingInfo;
  } else {
    info = document.createElement('div');
    info.classList.add('info');
  }

  let text;

  if (lang === 'English') {
    text = `Language: ${lang}. To switch language press SHIFT + ALT. \nWindows 11 keyboard was used as example`;
  } else {
    text = `Язык: ${lang}. Для переключения языка нажмите SHIFT + ALT. \nДля примера использована Windows 11 клавиатура`;
  }

  info.textContent = text;
  return info;
}

export default createInformationBlock;
