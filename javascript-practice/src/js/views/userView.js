import {
  $delegate,
  $on,
  $convertDate,
  $createElement,
  $generateAvatar,
  $handleSpinner,
  $hideModal,
  $qs,
  $validateUsername,
  $handleShowHideItem,
  $convertFileToBase64,
  $validateEmail,
} from "../helpers";
import {
  displaysUserEditInfoTemplate,
  userDetailsTemplate,
  usersTableTemplate,
} from "../template";
import ModalView from "./modalView";

class UserView {
  constructor() {
    // The table content contains user's information
    this.tableContentEl = $qs(".table__content");
    this.tableWrapper = $qs(".table__wrapper");

    // Modal form to add user and username input
    this.userNameInputEl = $qs("#username-input");
    this.formAddNewUserEl = $qs("#form-add-user");

    // Loading icon, check success icon, and text
    this.loadingIconContainerEl = $qs(".header__icon--loading");
    this.checkIconContainerEl = $qs(".header__check--icon");
    this.textDoneEl = $qs(".header__check--text");

    // Container to wrap the user details form and edit form
    this.userDetailsContainerEl = $qs(".user__wrapper");
    this.editContainerEl = $qs(".edit__wrapper");

    // Table search, magnifying glass icon, the search input and close icon
    this.tableSearchEl = $qs(".table__search");
    this.searchIconEl = $qs(".table__search--icon");
    this.tableSearchInputEl = $qs(".table__search--input");
    this.tableSearchCloseEl = $qs(".table__search--close");

    // The modal to delete a user and delete button
    this.modalDeleteEl = $qs(".modal-delete");
    this.deleteBtn = $qs(".btn__delete");

    // Create span tag with an error message to validate the input field
    this.errorEl = $createElement("span", "error-message");

    // Create the HTML canvas to draw graphics
    this.avatarCanvas = $createElement("canvas");

    this.screenWidth = window.innerWidth;

    // Call the modal from modalView
    this.modal = new ModalView();

    // Call the displayUserSearch function
    this.bindEventShowUserSearch();
  }

  /**
   * Display users
   * @param {Array} usersData The data of the user to be rendered
   */
  displayUsers = (usersData) =>
    (this.tableContentEl.innerHTML = usersTableTemplate(usersData));

  /**
   * Function to handle user clicks view details
   * @param {Function} handler Function called on synthetic event.
   */
  bindEventUserViewDetails = (handler) => {
    $delegate(
      this.tableContentEl,
      ".table__content-item",
      "click",
      ({ target }) => {
        const activeItemEl = this.tableContentEl.querySelector(
          ".table__item--active"
        );
        if (activeItemEl) activeItemEl.classList.remove("table__item--active");

        const clickedItem = target.closest(".table__content-item");

        clickedItem.classList.add("table__item--active");

        const userId = clickedItem.dataset.id;
        $handleShowHideItem(this.editContainerEl, this.userDetailsContainerEl);
        if (userId) handler(userId);

        if (this.screenWidth <= 992) this.tableWrapper.style.display = "none";
      }
    );
  };

  /**
   * Function to add user
   * @param {Function} handler Function called on synthetic event.
   */
  bindEventAddUser = (handler) => {
    // handle event onSubmit the form
    $on(this.formAddNewUserEl, "submit", (e) => {
      e.preventDefault();

      // Trim whitespace from the input
      const userName = this.userNameInputEl.value.trim();

      // Check if the entered username is empty or contains only whitespace
      const errorMessage = $validateUsername(userName);

      if (errorMessage) {
        // Display an error message
        this.errorEl.textContent = errorMessage;
        this.formAddNewUserEl.appendChild(this.errorEl);
        return;
      }

      const isActive = false;
      const email = "";
      const registered = $convertDate();
      const lastVisited = $convertDate();
      const detailDescUser = "";

      $generateAvatar(this.avatarCanvas, userName);

      // Convert the avatar to base64
      const avatarBase64 = this.avatarCanvas.toDataURL();

      const user = {
        userName: userName,
        isActive: isActive,
        email: email,
        avatar: avatarBase64,
        registered: registered,
        lastVisited: lastVisited,
        detailDescUser: detailDescUser,
      };

      // Clear the error message if it was previously displayed
      this.errorEl.textContent = "";

      // Close the modal after click on the save button
      $hideModal(this.modal.overlayEl, this.modal.modalEl);

      $handleSpinner(
        this.loadingIconContainerEl,
        this.textDoneEl,
        this.checkIconContainerEl
      );

      handler(user);

      this.formAddNewUserEl.reset();
    });
  };

  /**
   * Show the user details information such as name, status, email, avatar
   * @param {object} userData Corresponding data of that user
   */
  displayUserDetailsInfo = (userData) =>
    (this.userDetailsContainerEl.innerHTML = userDetailsTemplate(userData));

  /**
   * Function show the edit form when click the edit icon
   * @param {Function} handler Function called on synthetic event.
   */
  bindEventShowEditForm = (handler) => {
    $delegate(
      this.userDetailsContainerEl,
      ".user__header--icon",
      "click",
      ({ target }) => {
        const userId = target.closest(".user__header--icon").dataset.id;
        if (userId) {
          $handleShowHideItem(
            this.userDetailsContainerEl,
            this.editContainerEl
          );
          handler(userId);
        }
      }
    );
  };

  /**
   * Function to display the edit form
   * @param {Function} data Corresponding data of that user
   */
  displayInfoEditUser = (data) => {
    this.editContainerEl.innerHTML = displaysUserEditInfoTemplate(data);

    const arrowBackIconEl = this.editContainerEl.querySelector(
      ".edit__header--icon"
    );

    $on(arrowBackIconEl, "click", () => {
      this.screenWidth <= 992
        ? $handleShowHideItem(this.editContainerEl, this.tableWrapper)
        : $handleShowHideItem(
            this.editContainerEl,
            this.userDetailsContainerEl
          );
    });

    this.registered = data.registered;
  };

  /**
   * Function change the avatar when upload to choose the new image
   * @param {Function} handler Function called on synthetic event.
   */
  bindEventChangeAvatar = (handler) => {
    $delegate(this.editContainerEl, "#file-input", "change", ({ target }) => {
      if (target.closest("#file-input")) {
        handler(target.files[0]);
      }
    });
  };

  /**
   * Function display the avatar of the user
   * @param {String} src A base64 string of the avatar
   */
  displayAvatarImg = (src) => {
    const avatarImg = this.editContainerEl.querySelector(".avatar-img");
    avatarImg.src = src;
  };

  /**
   * Function display the avatar of the user
   * @param {Boolean} checked The status of the user when click on the toggle switch box
   */
  displayStatus = (checked) => {
    if (checked) {
      // If checkbox is checked, update the status and display content
      this.editContainerEl.querySelector("#statusDisplay").className =
        "row__status active";
      this.editContainerEl
        .querySelector("#statusDisplay")
        .querySelector("span").textContent = "Active";
    } else {
      // If checkbox is not checked, update the status and display content
      this.editContainerEl.querySelector("#statusDisplay").className =
        "row__status not__active";
      this.editContainerEl
        .querySelector("#statusDisplay")
        .querySelector("span").textContent = "Not active";
    }
  };

  /**
   * Function change the status when click on the toggle switch box;
   * @param {Function} handler Function called on synthetic event.
   */
  bindEventChangeStatus = (handler) => {
    $delegate(
      this.editContainerEl,
      "#statusCheckbox",
      "change",
      ({ target }) => {
        if (target.closest("#statusCheckbox")) handler(target.checked);
      }
    );
  };

  /**
   * Function to edit a user
   * @param {Number} userId The user's id
   * @param {Function} handler Function called on synthetic event.
   */
  bindEventEditUser = (handler) => {
    $delegate(this.editContainerEl, ".btn__edit--save", "click", async (e) => {
      e.preventDefault();

      const fileInput = this.editContainerEl.querySelector("#file-input");
      const avatarImg = this.editContainerEl.querySelector(".avatar-img");

      const isActive =
        this.editContainerEl.querySelector("#statusCheckbox").checked;

      const userName = this.editContainerEl
        .querySelector("#username")
        .value.trim();

      const email = this.editContainerEl.querySelector("#email").value;

      const detailDescUser = this.editContainerEl
        .querySelector("#details")
        .value.trim();
      const lastVisited = $convertDate();

      // Validate username and email
      const userNameMsg = $validateUsername(userName);
      const emailMsg = $validateEmail(email);

      if (userNameMsg) {
        this.errorEl.textContent = userNameMsg;
        this.editContainerEl.querySelector(".row").appendChild(this.errorEl);
        return;
      } else if (emailMsg) {
        this.errorEl.textContent = emailMsg;
        this.editContainerEl.querySelector(".row").appendChild(this.errorEl);
        return;
      }

      const user = {
        userName,
        email,
        avatar: fileInput.files[0]
          ? await $convertFileToBase64(fileInput.files[0])
          : avatarImg.src,
        isActive,
        registered: this.registered,
        lastVisited: lastVisited,
        detailDescUser,
      };

      // Clear the error message if it was previously displayed
      this.errorEl.textContent = "";

      $handleSpinner(
        this.loadingIconContainerEl,
        this.textDoneEl,
        this.checkIconContainerEl
      );

      handler(user);
    });
  };

  /**
   * Function to show the input search and close icon when click the search icon
   */
  bindEventShowUserSearch = () => {
    $on(this.searchIconEl, "click", () => {
      this.tableSearchInputEl.style.display = "block";
      this.tableSearchInputEl.focus();
      this.tableSearchCloseEl.style.display = "block";

      this.tableSearchEl.querySelector(".table__search span").style.display =
        "none";
      this.searchIconEl.style.display = "none";
    });
  };

  /**
   * Function to close the search input
   */
  bindEventCloseUserSearch = (data) => {
    $on(this.tableSearchCloseEl, "click", () => {
      this.tableSearchInputEl.style.display = "none";
      this.tableSearchInputEl.focus();
      this.tableSearchCloseEl.style.display = "none";

      this.tableSearchEl.querySelector(".table__search span").style.display =
        "block";
      this.searchIconEl.style.display = "block";

      this.tableSearchInputEl.value = "";
      this.displayUsers(data);
    });
  };

  /**
   * Function to search user with the keyword
   * @param {Function} handler Function called on synthetic event.
   */
  bindEventSearchUser = (handler) => {
    $on(this.tableSearchInputEl, "input", ({ target }) =>
      handler(target.value)
    );
  };

  /**
   * Function to display users with the username and email is matched with the keyword
   * @param {object} users Displays filtered users after searching
   */
  displayUsersMatchKeyword = (users) => this.displayUsers(users);

  /**
   * Function to delete a user
   * @param {Number} userId The user's id
   * @param {Function} handler Function called on synthetic event.
   */
  bindEventDeleteUser = (handler) => {
    $delegate(this.modalDeleteEl, ".btn__delete", "click", (e) => {
      e.preventDefault();
      $handleSpinner(
        this.loadingIconContainerEl,
        this.textDoneEl,
        this.checkIconContainerEl
      );

      $hideModal(this.modal.overlayEl, this.modal.modalDeleteEl);
      this.editContainerEl.style.display = "none";
      handler();
    });
  };
}

export default UserView;
