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

    this.errorEl = $createElement("span", "error-message");

    this.avatarCanvas = $createElement("canvas");

    this.modal = new ModalView();

    this.isSelected = false;
  }

  /**
   * Display users
   * @param {Array} usersData The data of the user to be rendered
   * @param {Function} handlerUserViewDetails Function called on synthetic event.
   */
  displayUsers = (usersData) =>
    (this.tableContentEl.innerHTML = usersTableTemplate(usersData));

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

  displayAvatarImg = (src) => {
    const avatarImg = this.editContainerEl.querySelector("#avatar-img");
    avatarImg.src = src;
  };

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
   * @param {Function} userData Corresponding data of that user
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

      // Validat user name email
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
}

export default UserView;
