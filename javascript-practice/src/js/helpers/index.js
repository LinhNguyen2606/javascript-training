import { showModal, hideModal } from "./modal";

import { validateUsername } from "./validation";

export { showModal, hideModal };

export { validateUsername };

/**
 * querySelector wrapper
 * @param {string} selector Selector to query
 */
export const qs = (selector) => document.querySelector(selector);

export const convertDate = () =>
  new Date()
    .toLocaleString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: false,
    })
    .replace("at", "");
