/**
 * The function to handler the spinner
 *
 * @param {HTMLElement} loadingIconContainerEl - The loading icon
 * @param {HTMLElement} textDoneEl - The text success when loading finished
 * @param {HTMLElement} checkIconContainerEl - The check successfull icon
 */
export const handleSpinner = (
  loadingIconContainerEl,
  textDoneEl,
  checkIconContainerEl
) => {
  // Show the loading icon
  loadingIconContainerEl.style.display = "block";

  // Show the check success icon and text in 1 second, after that it will disappear
  setTimeout(() => {
    // Remove the loading icon and show the success icon and text
    loadingIconContainerEl.style.display = "none";
    textDoneEl.style.display = "block";
    checkIconContainerEl.style.display = "block";

    setTimeout(() => {
      textDoneEl.style.display = "none";
      checkIconContainerEl.style.display = "none";
    }, 2000);
  }, 1000);
};
