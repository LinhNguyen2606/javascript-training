/**
 * querySelector wrapper
 *
 * @param {string} selector Selector to query
 */
export const qs = (selector) => document.querySelector(selector);

/**
 * Reset the form
 * @param {HTMLFormElement} formEl The form element to reset
 */
export const formReset = (formEl) => formEl.reset();
