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
 * Attach an event listener to an element and handle the specified event.
 *
 * @param {HTMLElement} element - The element to attach the event listener to
 * @param {string} selector - The selector for the target elements within the element
 * @param {string} eventName - The name of the event to listen for
 * @param {function} handler - The event handler function
 */
export const $attachEventListener = (element, selector, eventName, handler) => {
  element.addEventListener(eventName, (event) => {
    // event.target.closest(".table__content__item") to find the closest element
    const targetElement = event.target;
    if (targetElement) {
      handler.call(targetElement, event);
    }
  });
};

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
