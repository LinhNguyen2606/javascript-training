/**
 * Function to show the modal
 * @param {HTMLElement} overlayEl The overlay element
 * @param {HTMLElement} modalEl The modal element
 * @param {HTMLElement} modalInputEl The modal input element
 */
export const showModal = (overlayEl, modalEl, modalInputEl) => {
  overlayEl.style.display = "block";
  modalEl.style.display = "block";
  if (modalInputEl) modalInputEl.focus();
};

/**
 * Function to hide the modal
 * @param {HTMLElement} selector Selector to match
 * @param {HTMLElement} overlayEl The overlay element
 * @param {HTMLElement} modalEl The modal element
 */
export const hideModal = (overlayEl, modalEl) => {
  overlayEl.style.display = "none";
  modalEl.style.display = "none";
};
