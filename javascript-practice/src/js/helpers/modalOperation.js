/**
 * Function to show the modal
 * @param {HTMLElement} overlayEl The overlay element
 * @param {HTMLElement} modalEl The modal element
 * @param {HTMLElement} modalInputEl The modal input element
 */
export function showModal(overlayEl, modalEl, modalInputEl) {
  overlayEl.style.display = "block";
  modalEl.style.display = "block";
  modalInputEl.focus();
}

/**
 * Function to hide the modal
 * @param {HTMLElement} overlayEl The overlay element
 * @param {HTMLElement} modalEl The modal element
 */
export function hideModal(overlayEl, modalEl) {
  overlayEl.style.display = "none";
  modalEl.style.display = "none";
}
