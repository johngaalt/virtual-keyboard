function isAltActive() {
  const alt = document.querySelector('[data-button="Alt"]');
  const rAlt = document.querySelector('[data-button="RAlt"]');
  const hasActiveClass = alt.classList.contains('button--active') || rAlt.classList.contains('button--active');
  return hasActiveClass;
}
export default isAltActive;
