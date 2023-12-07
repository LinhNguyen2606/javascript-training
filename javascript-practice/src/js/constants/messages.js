/**
 * Message for validation form
 */
export const ERROR_MESSAGE = {
  USER_NAME: "Please enter a valid username",
  EMAIL: "Please enter a valid email address.",
  AVATAR:
    "Avatar file size exceeds the limit (5MB). Please choose a smaller file.",
};

/**
 * Regex for form validator.
 */
export const REGEX = {
  EMAIL: /^$|^[^\s@]+@[^\s@]+\.[^\s@]+$/,
};
