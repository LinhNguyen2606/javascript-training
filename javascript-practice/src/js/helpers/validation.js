/**
 * Validates a username.
 * @param {string} username - The username to be validated.
 * @returns {string|null} An error message if the username is invalid, or null if the username is valid.
 */
export const validateUsername = (username) =>
  username.trim() === "" ? "Please enter a valid username" : null;
