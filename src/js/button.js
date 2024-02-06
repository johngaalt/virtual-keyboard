function createSymbolElement(symbol, isPrimary = true) {
  const spanClass = isPrimary
    ? 'button__symbol--primary'
    : 'button__symbol--secondary';
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
    button.dataset.secondary = obj.secondary;
    const secondary = createSymbolElement(obj.secondary, false);
    button.append(secondary);
  }

  if (obj.extra) {
    button.dataset.extra = obj.extra;
    const extra = createSymbolElement(obj.extra, false);
    button.append(extra);
  }
  return button;
}

export default createButton;
