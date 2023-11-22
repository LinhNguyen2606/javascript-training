import { convertDate, hideModal, qs, validateUsername } from "../helpers";
import ModalView from "./modal";
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

    // Get loading icon, check success icon, and text
    this.loadingIconContainerEl = qs(".header__loading-icon");
    this.checkIconContainerEl = qs(".header__check-icon");
    this.textDoneEl = qs("#text-success");

    // Call the modal view
    this.modal = new ModalView();

    // Call the user details view
    this.userDetailsView = new UserDetailsView();

    // The container of the user details
    this.userContainerEl = qs(".user__wrapper");

    // Call the add user function
    this.addUser();
  }

  /**
   * Initialize functions
   * @param {Function} addUser The function to add a new user
   * @param {Function} handleGetUserDetails The function to get the details information of the user
   */
  init(addUser, handleGetUserDetailsInfor) {
    this.addUser = addUser;
    this.handleGetUserDetailsInfor = handleGetUserDetailsInfor;

    // Initialize user details view
    this.initUserDetailsView();
  }

  /**
   * Initialize user details view
   */
  initUserDetailsView() {
    this.userDetailsView.init(this.handleGetUserDetailsInfor);
  }

  /**
   * Display users
   * @param {Array} data The data of the user to be rendered
   */
  async displayUsers(data) {
    // Clear existing table content
    this.tableContentEl.innerHTML = "";

    // Wait for the data to be resolved
    const usersData = await data;

    const users = usersData.data;

    // Iterate over each user in the data and create table rows
    users.map((user) => {
      // Create a new list item for each user
      const row = document.createElement("li");
      row.classList.add("table__content__item");

      // Add click event listener to the row
      row.addEventListener("click", () => {
        // Remove active class from all rows
        const rows = document.querySelectorAll(".table__content__item");
        rows.forEach((row) => {
          row.classList.remove("table__item__active");
        });

        // Add active class to the clicked row
        row.classList.add("table__item__active");
      });

      row.addEventListener("click", () => {
        const userId = user.id;
        this.userDetailsView.showUserDetails(userId);
      });

      // Create a container for user information
      const userInfor = document.createElement("div");
      userInfor.classList.add("table__content__infor");

      // Create an image element for the user avatar
      const userImage = document.createElement("img");
      userImage.src = user.avatar;
      userImage.alt = user.userName;

      // Create a span element for the user name
      const userName = document.createElement("span");
      userName.textContent = user.userName;
      userName.classList.add("primary__text");

      // Append the user image and name to the user information container
      userInfor.appendChild(userImage);
      userInfor.appendChild(userName);
      row.appendChild(userInfor);

      // Create a container for user status
      const userStatus = document.createElement("div");
      userStatus.classList.add("table__content__status");

      // Create a span element for the status text
      const statusSpan = document.createElement("span");
      statusSpan.textContent = user.status === true ? "Active" : "Not active";
      statusSpan.classList.add(user.status === true ? "active" : "not__active");

      // Append the status span to the user status container
      userStatus.appendChild(statusSpan);
      row.appendChild(userStatus);

      // Create a span element for the user email
      const userEmail = document.createElement("span");
      userEmail.textContent = user.email;
      userEmail.classList.add("table__content__email", "primary__text");

      // Append the user email to the table row
      row.appendChild(userEmail);

      // Append the table row to the table content element
      this.tableContentEl.appendChild(row);
    });
  }

  /**
   * Function to add user
   */
  addUser() {
    const errorEl = document.createElement("span");
    errorEl.classList.add("error-message");
    errorEl.style.marginLeft = "22px";
    errorEl.style.color = "red";

    // handle event onSubmit the form
    this.formEl.addEventListener("submit", async (e) => {
      e.preventDefault();

      // Trim whitespace from the input
      const userName = this.userNameInputEl.value.trim();

      // Check if the entered username is empty or contains only whitespace
      const errorMessage = validateUsername(userName);

      if (errorMessage) {
        // Display an error message
        errorEl.textContent = errorMessage;
        this.formEl.appendChild(errorEl);
        return;
      }

      const status = false;
      const email = "";
      const registered = convertDate();
      const lastVisited = convertDate();
      const detailDescUser = "";

      // Show the loading icon
      this.loadingIconContainerEl.style.display = "block";

      // Generate random color for the avatar
      const randomColor =
        "#" + Math.floor(Math.random() * 16777215).toString(16);

      // Create the HTML canvas to draw graphics
      const avatarCanvas = document.createElement("canvas");

      // Create the 2D context
      const context = avatarCanvas.getContext("2d");

      const avatarSize = 100;

      avatarCanvas.width = avatarSize;
      avatarCanvas.height = avatarSize;
      context.fillStyle = randomColor;

      // Draws a random color circle with a top-left corner at position 0,0. The circle is 100px with the width and height
      context.fillRect(0, 0, avatarSize, avatarSize);
      context.fillStyle = "#FFF";
      context.font = `${avatarSize / 2}px Arial`;
      context.textAlign = "center";
      context.textBaseline = "middle";

      // Draws filled text with the first character on the canvas
      context.fillText(
        userName.charAt(0).toUpperCase(),
        avatarSize / 2,
        avatarSize / 2
      );

      // Convert the avatar to base64
      const avatarBase64 = avatarCanvas.toDataURL();

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
      errorEl.textContent = "";

      // Close the modal after click on the save button
      hideModal(this.modal.overlayEl, this.modal.modalEl);

      // Show the check success icon and text in 1 second, after that it will disappear
      setTimeout(() => {
        // Remove the loading icon and show the success icon and text
        this.loadingIconContainerEl.style.display = "none";
        this.textDoneEl.style.display = "block";
        this.checkIconContainerEl.style.display = "block";

        setTimeout(() => {
          this.textDoneEl.style.display = "none";
          this.checkIconContainerEl.style.display = "none";
        }, 2000);
      }, 1000);

      await this.addUser(user);

      this.formAddNewUserEl.reset();
    });
  }
}

export default UserView;
