import {
  $delegate,
  $on,
  convertDate,
  createElement,
  generateAvatar,
  handleSpinner,
  hideModal,
  qs,
  validateUsername,
} from "../helpers";
import { userDetailsTemplate, usersTableTemplate } from "../template";
import ModalView from "./modalView";

class UserView {
  constructor() {
    // The table content contains user's information
    this.tableContentEl = qs(".table__content");

    // user name input
    this.userNameInputEl = qs("#username-input");

    // Modal Form add new user
    this.formAddNewUserEl = qs("#form-add-user");

    // Get loading icon, check success icon, and text
    this.loadingIconContainerEl = qs(".header__loading-icon");
    this.checkIconContainerEl = qs(".header__check-icon");
    this.textDoneEl = qs("#text-success");

    // The container of the user details
    this.userDetailsContainerEl = qs(".user__wrapper");

    // The error message
    this.errorEl = createElement("span", "error-message");

    // Create the HTML canvas to draw graphics
    this.avatarCanvas = createElement("canvas");

    this.modal = new ModalView();
  }

  /**
   * Display users
   * @param {Array} usersData The data of the user to be rendered
   * @param {Function} handler Function called on synthetic event.
   */
  displayUsers(usersData, handler) {
    this.tableContentEl.innerHTML = usersTableTemplate(usersData);

    this.handleUserClickViewDetails(this.tableContentEl, handler);
  }

  /**
   * Function to handle user clicks
   * @param {HTMLElement} tableContentItems Nodelist of li tags
   * @param {Function} handler Function called on synthetic event.
   */
  handleUserClickViewDetails = (tableContentEl, handler) => {
    $delegate(
      tableContentEl,
      ".table__content__item",
      "click",
      async ({ target }) => {
        // event.target.closest(".table__content__item") to find the closest element with class .table__content__item.
        const userId = target.closest(".table__content__item").dataset.id;
        const userData = await handler(userId);
        this.displayUserDetailsInfo(userData);
      }
    );
  };

  /**
   * Function to add user
   * @param {Function} handler Function called on synthetic event.
   */
  bindAddUser(handler) {
    // handle event onSubmit the form
    $on(this.formAddNewUserEl, "submit", async (e) => {
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

  /**
   * Show the user details information such as name, status, email, avatar
   * @param {Object} userData Corresponding data of that user
   */
  async displayUserDetailsInfo(userData) {
    const userDetailsHTML = await userDetailsTemplate(userData);
    this.userDetailsContainerEl.innerHTML = userDetailsHTML;
    this.userDetailsContainerEl.style.display = "block";
  }
}

export default UserView;
