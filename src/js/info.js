function createInformationBlock() {
  const lang = localStorage.getItem('language') || 'English';
  const info = document.createElement('div');
  info.classList.add('info');
  info.textContent = `Language: ${lang}. To switch language press SHIFT + ALT`;
  return info;
}

export default createInformationBlock;
