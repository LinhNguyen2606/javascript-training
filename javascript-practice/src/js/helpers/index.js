import { showModal, hideModal } from "./modal";

import { validateUsername } from "./validation";

import { handleSpinner } from "./spinner";

export { showModal, hideModal };

export { validateUsername };

export { handleSpinner };

/**
 * querySelector wrapper
 * @param {string} selector Selector to query
 */
export const qs = (selector) => document.querySelector(selector);

/**
 * Create an element with an optional CSS class
 * @param {string} tag The HTML tag of the element to create
 * @param {string} className Optional CSS class to add to the element
 * @returns {HTMLElement} The created element
 */
export const createElement = (tag, className) => {
  const element = document.createElement(tag);
  if (className) element.classList.add(className);

  return element;
};

/**
 * Generate an avatar image on the provided canvas using a random color and the user's initials.
 * @param {HTMLCanvasElement} avatarCanvas The canvas element to draw the avatar on.
 * @param {string} userName The user's name or initials used to generate the avatar.
 */
export const generateAvatar = (avatarCanvas, userName) => {
  // Generate random color for the avatar
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

  // Create the 2D context
  const context = avatarCanvas.getContext("2d");

  const avatarSize = 100;

  avatarCanvas.width = avatarSize;
  avatarCanvas.height = avatarSize;
  context.fillStyle = randomColor;

  // Draws a random color circle with a top-left corner at position 0,0. The circle is 100px with the width and height
  context.fillRect(0, 0, avatarSize, avatarSize);
  context.fillStyle = "#FFF";
  context.font = `${avatarSize / 2}px Arial`;
  context.textAlign = "center";
  context.textBaseline = "middle";

  // Draws filled text with the first character on the canvas
  context.fillText(
    userName.charAt(0).toUpperCase(),
    avatarSize / 2,
    avatarSize / 2
  );
};

/**
 * Convert the day such as: May 21, 2020 17:02:06
 */
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
