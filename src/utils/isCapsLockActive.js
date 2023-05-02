function isCapsLockActive() {
  const capsLock = document.querySelector('[data-button="Caps Lock"]');
  const hasActiveClass = capsLock.classList.contains('button--active');
  return hasActiveClass;
}
export default isCapsLockActive;
