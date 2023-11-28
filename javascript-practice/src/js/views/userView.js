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
  $attachEventListener,
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
    this.tableContentEl = $qs(".table__content");

    this.userNameInputEl = $qs("#username-input");

    this.formAddNewUserEl = $qs("#form-add-user");

    this.loadingIconContainerEl = $qs(".header__loading-icon");

    this.checkIconContainerEl = $qs(".header__check-icon");

    this.textDoneEl = $qs("#text-success");

    this.userDetailsContainerEl = $qs(".user__wrapper");

    this.editContainerEl = $qs("#edit__wrapper");

    this.tableSearchEl = $qs(".table__search");

    this.searchIconEl = $qs(".table__search__icon");

    this.tableSearchIconEl = $qs(".table__search__icon");

    this.tableSearchInputEl = $qs(".table__search__input");

    this.tableSearchCloseEl = $qs(".table__search__close");

    this.errorEl = $createElement("span", "error-message");

    this.avatarCanvas = $createElement("canvas");

    this.modal = new ModalView();

    this.displayUserSearch();

    this.closeUserSearchDisplay();

    this.isSelected = false;
  }

  /**
   * Display users
   * @param {Array} usersData The data of the user to be rendered
   * @param {Function} handlerUserViewDetails Function called on synthetic event.
   */
  displayUsers = (usersData) => {
    this.tableContentEl.innerHTML = usersTableTemplate(usersData);
    this.searchUser(this.tableContentEl);
  };

  /**
   * Function to handle user clicks
   * @param {HTMLElement} tableContentItems Nodelist of li tags
   * @param {Function} handler Function called on synthetic event.
   */
  bindEventUserViewDetails = (handler) => {
    $attachEventListener(
      this.tableContentEl,
      ".table__content__item",
      "click",
      ({ target }) => {
        // event.target.closest(".table__content__item") to find the closest element with class .table__content__item.
        const userId = target.closest(".table__content__item").dataset.id;
        if (!this.isSelected) handler(userId);
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
   * @param {Object} userData Corresponding data of that user
   */
  displayUserDetailsInfo = (userData) => {
    this.userDetailsContainerEl.innerHTML = userDetailsTemplate(userData);
    this.userDetailsContainerEl.style.display = "block";
  };

  /**
   * Function show the edit form when click the edit icon
   * @param {Function} handler Function called on synthetic event.
   */
  bindEventShowEditForm = (handler) => {
    $attachEventListener(
      this.userDetailsContainerEl,
      ".user__details__header--icon",
      "click",
      ({ target }) => {
        const userId = target.closest(".user__details__header--icon").dataset
          .id;
        this.isSelected = true;
        $handleShowHideItem(this.userDetailsContainerEl, this.editContainerEl);
        handler(userId);
      }
    );
  };

  /**
   * Function to display the edit form
   * @param {Function} userData Corresponding data of that user
   */
  displayInfoEditUser = async (data) => {
    this.editContainerEl.innerHTML = displaysUserEditInfoTemplate(data);

    const arrowBackIconEl =
      this.editContainerEl.querySelector(".edit__header-icon");

    $on(arrowBackIconEl, "click", () => {
      this.isSelected = false;
      $handleShowHideItem(this.editContainerEl, this.userDetailsContainerEl);
    });
  };

  /**
   * Function change the avatar when upload to choose the new image
   * @param {Function} handler Function called on synthetic event.
   */
  bindEventChangeAvatar = async (handler) => {
    $attachEventListener(
      this.editContainerEl,
      "#file-input",
      "change",
      ({ target }) => {
        if (target.closest("#file-input")) {
          handler(target.files[0]);
        }
      }
    );
  };

  /**
   * Function display the avatar of the user
   * @param {String} src A base64 string of the avatar
   */
  displayAvatarImg = (src) => {
    console.log(src);
    const avatarImg = this.editContainerEl.querySelector("#avatar-img");
    avatarImg.src = src;
  };

  /**
   * Function display the avatar of the user
   * @param {Boolean} checked The status of the user when click on the toggle switch box
   */
  displayStatus = (checked) => {
    if (checked) {
      // Nếu checkbox được chọn, cập nhật trạng thái và nội dung hiển thị
      this.editContainerEl.querySelector("#statusDisplay").className =
        "status active";
      this.editContainerEl
        .querySelector("#statusDisplay")
        .querySelector("span").textContent = "Active";
    } else {
      // Nếu checkbox không được chọn, cập nhật trạng thái và nội dung hiển thị
      this.editContainerEl.querySelector("#statusDisplay").className =
        "status not__active";
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
    $attachEventListener(
      this.editContainerEl,
      "#statusCheckbox",
      "change",
      ({ target }) => {
        if (target.closest("#statusCheckbox")) {
          handler(target.checked);
        }
      }
    );
  };

  /**
   * Function to edit a user
   * @param {Number} userId The user's id
   * @param {Function} handler Function called on synthetic event.
   */
  editUser = (userId, handler) => {
    $delegate(this.editContainerEl, ".edit__btn-save", "click", async (e) => {
      e.preventDefault();

      const fileInput = this.editContainerEl.querySelector("#file-input");
      const isActive =
        this.editContainerEl.querySelector("#statusCheckbox").checked;
      const userName = this.editContainerEl
        .querySelector("#username")
        .value.trim();
      const email = this.editContainerEl.querySelector("#email").value.trim();
      const detailDescUser = this.editContainerEl
        .querySelector("#details")
        .value.trim();

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
        avatar: await $convertFileToBase64(fileInput.files[0]),
        isActive,
        detailDescUser,
      };

      handler(userId, user);
    });
  };

  /**
   * Function to show the input search and close icon when click the search icon
   */
  displayUserSearch = () => {
    $on(this.searchIconEl, "click", () => {
      this.tableSearchInputEl.style.display = "block";
      this.tableSearchInputEl.focus();
      this.tableSearchCloseEl.style.display = "block";

      this.tableSearchEl.querySelector(".table__search span").style.display =
        "none";
      this.tableSearchIconEl.style.display = "none";
    });
  };

  /**
   * Function to close the search input
   */
  closeUserSearchDisplay = () => {
    $on(this.tableSearchCloseEl, "click", () => {
      this.tableSearchInputEl.style.display = "none";
      this.tableSearchInputEl.focus();
      this.tableSearchCloseEl.style.display = "none";

      this.tableSearchEl.querySelector(".table__search span").style.display =
        "block";
      this.tableSearchIconEl.style.display = "block";
    });
  };

  /**
   * Function to search a user with the username and email is matched
   * @param {HTMLElement} tableContentEl The table content element
   */
  searchUser = (tableContentEl) => {
    const tableContentItemsEl = tableContentEl.querySelectorAll(
      ".table__content__item"
    );

    $on(this.tableSearchInputEl, "input", () => {
      const filter = this.tableSearchInputEl.value.toUpperCase();

      tableContentItemsEl.forEach((item) => {
        const username = item
          .querySelector(".table__content__infor span")
          .textContent.toUpperCase();
        const email = item
          .querySelector(".table__content__email")
          .textContent.toUpperCase();

        username.includes(filter) || email.includes(filter)
          ? (item.style.display = "")
          : (item.style.display = "none");
      });
    });
  };
}

export default UserView;
