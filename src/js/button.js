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
  const primary = createSymbolElement(obj.primary);
  const secondary = createSymbolElement(obj.secondary, false);
  button.append(primary, secondary);
  return button;
}

export default createButton;
