function removeActiveClass() {
  const shift = document.querySelector('[data-button="Shift"]');
  const rShift = document.querySelector('[data-button="RShift"]');
  const alt = document.querySelector('[data-button="Alt"]');
  const rAlt = document.querySelector('[data-button="RAlt"]');
  [shift, rShift, alt, rAlt].forEach((elem) => elem.classList.remove('button--active'));
}
export default removeActiveClass;
