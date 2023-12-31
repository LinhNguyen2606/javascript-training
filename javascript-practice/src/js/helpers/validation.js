import { ERROR_MESSAGE, REGEX } from "../constants/messages";

/**
 * Validates a username.
 * @param {string} username - The username to be validated.
 * @returns {string|null} An error message if the username is invalid, or null if the username is valid.
 */
export const validateUsername = (username) =>
  username.trim() === "" ? ERROR_MESSAGE.USER_NAME : null;

/**
 * Validates a email.
 * @param {string} email - The email to be validated.
 * @returns {string|null} An error message if the username is invalid, or null if the username is valid.
 */
export const validateEmail = (email) => {
  if (!isValidEmail(email)) {
    return ERROR_MESSAGE.EMAIL;
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
  const emailRegex = REGEX.EMAIL;
  return emailRegex.test(email);
};
