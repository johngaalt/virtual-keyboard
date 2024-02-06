function isShiftActive() {
  const shift = document.querySelector('[data-button="Shift"]');
  const rShift = document.querySelector('[data-button="RShift"]');
  const hasActiveClass = shift.classList.contains('button--active')
    || rShift.classList.contains('button--active');
  return hasActiveClass;
}
export default isShiftActive;
