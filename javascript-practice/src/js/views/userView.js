import {
  convertDate,
  createElement,
  generateAvatar,
  handleSpinner,
  hideModal,
  qs,
  validateUsername,
} from "../helpers";
import { usersTableTemplate } from "../template";
import ModalView from "./modalView";
import UserDetailsView from "./userDetailsView";

class UserView {
  constructor() {
    // The table content contains user's information
    this.tableContentEl = qs(".table__content");

    // The save button
    this.saveBtnEl = qs("#modal__body-btn");

    // Form
    this.formEl = qs("#form-add-user");

    // user name input
    this.userNameInputEl = qs("#username-input");

    // Form add new user
    this.formAddNewUserEl = qs("#form-add-user");

    // User details wrapper
    this.userContainerEl = qs(".user__wrapper");

    this.tableContentEl = qs(".table__content");

    // Get loading icon, check success icon, and text
    this.loadingIconContainerEl = qs(".header__loading-icon");
    this.checkIconContainerEl = qs(".header__check-icon");
    this.textDoneEl = qs("#text-success");

    // The container of the user details
    this.userContainerEl = qs(".user__wrapper");

    // The error message
    this.errorEl = createElement("span", "error-message");

    // Create the HTML canvas to draw graphics
    this.avatarCanvas = createElement("canvas");

    this.modal = new ModalView();

    this.userDetailsView = new UserDetailsView();

    this.displayUsers();
  }

  /**
   * Display users
   * @param {Array} usersData The data of the user to be rendered
   */
  async displayUsers(usersData) {
    const res = await usersData;
    this.tableContentEl.innerHTML = usersTableTemplate(res);
  }

  /**
   * Function to add user
   * @param {Function} handler Function called on synthetic event.
   */
  bindAddUser(handler) {
    // handle event onSubmit the form
    this.formEl.addEventListener("submit", async (e) => {
      e.preventDefault();

      // Trim whitespace from the input
      const userName = this.userNameInputEl.value.trim();

      // Check if the entered username is empty or contains only whitespace
      const errorMessage = validateUsername(userName);

      if (errorMessage) {
        // Display an error message
        this.errorEl.textContent = errorMessage;
        this.formEl.appendChild(this.errorEl);
        return;
      }

      const status = false;
      const email = "";
      const registered = convertDate();
      const lastVisited = convertDate();
      const detailDescUser = "";

      generateAvatar(this.avatarCanvas, userName);

      // Convert the avatar to base64
      const avatarBase64 = this.avatarCanvas.toDataURL();

      const user = {
        userName: userName,
        status: status,
        email: email,
        avatar: avatarBase64,
        registered: registered,
        lastVisited: lastVisited,
        detailDescUser: detailDescUser,
      };

      // Clear the error message if it was previously displayed
      this.errorEl.textContent = "";

      // Close the modal after click on the save button
      hideModal(this.modal.overlayEl, this.modal.modalEl);

      handleSpinner(
        this.loadingIconContainerEl,
        this.textDoneEl,
        this.checkIconContainerEl
      );

      await handler(user);

      this.formAddNewUserEl.reset();
    });
  }
}

export default UserView;
