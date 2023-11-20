import { showModal, hideModal } from "./modal";

import { validateUsername } from "./validation";

export { showModal, hideModal };

export { validateUsername };

/**
 * querySelector wrapper
 * @param {string} selector Selector to query
 */
export const qs = (selector) => document.querySelector(selector);
