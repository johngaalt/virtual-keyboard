export function createButton() {
  const button = document.createElement('button');
  button.classList.add('button');
  button.textContent = 'text';
  return button;
}

function createPrimaryElement(text) {
  const span = document.createElement('span');
  span.classList.add('button__text button__text--primary');
}
