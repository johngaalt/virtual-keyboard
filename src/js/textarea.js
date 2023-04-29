function createTextArea() {
  const textArea = document.createElement('textarea');
  textArea.classList.add('textarea');
  textArea.cols = '140';
  textArea.rows = '20';
  return textArea;
}

export function updateTextAreaValue(symbol) {
  const textArea = document.querySelector('.textarea');
  textArea.value += symbol;
}
export default createTextArea;
