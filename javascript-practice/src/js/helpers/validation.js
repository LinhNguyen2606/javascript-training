/**
 * Validates a username.
 * @param {string} username - The username to be validated.
 * @returns {string|null} An error message if the username is invalid, or null if the username is valid.
 */
export const validateUsername = (username) =>
  username.trim() === "" ? "Please enter a valid username" : null;

/**
 * Validates a email.
 * @param {string} email - The email to be validated.
 * @returns {string|null} An error message if the username is invalid, or null if the username is valid.
 */
export const validateEmail = (email) => {
  if (!isValidEmail(email)) {
    return "Please enter a valid email address.";
  }

  return "";
};

/**
 * Checks if the provided email is in a valid format.
 * @param {string} email - The email to be validated.
 * @returns {boolean} - `true` if the email is valid, `false` otherwise.
 */
const isValidEmail = (email) => {
  // Use a regular expression to validate email format
  const emailRegex = /^|^[^\s@]+@[^\s@]+\.[^\s@]+/;
  return emailRegex.test(email);
};
