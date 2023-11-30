import { $on } from "./selectors";

/**
 * Function to show the modal
 * @param {string} selector Selector to match
 * @param {HTMLElement} overlayEl The overlay element
 * @param {HTMLElement} modalEl The modal element
 * @param {HTMLElement} modalInputEl The modal input element
 */
export const $showModal = (selector, overlayEl, modalEl, modalInputEl) => {
  $on(selector, "click", () => {
    overlayEl.style.display = "block";
    modalEl.style.display = "block";
    if (modalInputEl) modalInputEl.focus();
  });
};

/**
 * Function to hide the modal
 * @param {string} selector Selector to match
 * @param {HTMLElement} overlayEl The overlay element
 * @param {HTMLElement} modalEl The modal element
 */
export const $hideModal = (selector, overlayEl, modalEl) => {
  $on(selector, "click", (e) => {
    e.preventDefault();
    overlayEl.style.display = "none";
    modalEl.style.display = "none";
  });
};
