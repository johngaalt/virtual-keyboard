function createSymbolElement(symbol, isPrimary = true) {
  const spanClass = isPrimary ? 'button__symbol--primary' : 'button__symbol--secondary';
  const span = document.createElement('span');
  span.classList.add('button__symbol', spanClass);
  span.textContent = symbol;
  return span;
}

function createButton(obj) {
  const button = document.createElement('button');
  button.classList.add('button');
  button.dataset.button = obj.primary;
  button.dataset.keyCode = obj.keyCode;
  const primary = createSymbolElement(obj.primary);
  button.append(primary);

  if (obj.secondary) {
    const secondary = createSymbolElement(obj.secondary, false);
    button.append(secondary);
  }
  return button;
}

export default createButton;
