/**
 * Validates a username.
 * @param {string} username - The username to be validated.
 * @returns {string|null} An error message if the username is invalid, or null if the username is valid.
 */
export const $validateUsername = (username) =>
  username.trim() === "" ? "Please enter a valid username" : null;

export const $validateEmail = (email) => {
  if (email === "") {
    return "Please enter an email address.";
  }

  if (!isValidEmail(email)) {
    return "Please enter a valid email address.";
  }

  return "";
};

const isValidEmail = (email) => {
  // Use a regular expression to validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
