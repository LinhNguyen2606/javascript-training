/**
 * querySelector wrapper
 * @param {string} selector Selector to query
 */
export const $qs = (selector) => document.querySelector(selector);

/**
 * Create an element with an optional CSS class
 * @param {string} tag The HTML tag of the element to create
 * @param {string} className Optional CSS class to add to the element
 * @returns {HTMLElement} The created element
 */
export const $createElement = (tag, className) => {
  const element = document.createElement(tag);
  if (className) element.classList.add(className);

  return element;
};

/**
 * addEventListener wrapper
 * @param {Element|Window} target Target Element
 * @param {string} type Event name to bind to
 * @param {Function} callback Event callback
 * @param {boolean} [capture] Capture the event
 */
export function $on(target, type, callback, capture) {
  target.addEventListener(type, callback, !!capture);
}

/**
 * Attach a handler to an event for all elements matching a selector.
 *
 * @param {Element} target Element which the event must bubble to
 * @param {string} selector Selector to match
 * @param {string} type Event name
 * @param {Function} handler Function called when the event bubbles to target
 *                           from an element matching selector
 * @param {boolean} [capture] Capture the event
 */
export function $delegate(target, selector, type, handler, capture) {
  const dispatchEvent = (event) => {
    const targetElement = event.target;
    const potentialElements = target.querySelectorAll(selector);
    let i = potentialElements.length;

    while (i--) {
      if (potentialElements[i] === targetElement) {
        handler.call(targetElement, event);
        break;
      }
    }
  };

  $on(target, type, dispatchEvent, !!capture);
}

/**
 * Handle the click event to show and hide the item
 *
 * @param {HTMLElement} elementToHide - The element want to hide
 * @param {HTMLElement} elementToShow - The element want to show
 */
export const $handleShowHideItem = (elementToHide, elementToShow) => {
  elementToHide.style.display = "none";
  elementToShow.style.display = "block";
};
