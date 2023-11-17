import { qs } from "../helpers/helper";

class UserView {
  constructor() {
    // The table content contains user's information
    this.tableContentEl = qs(".table__content");

    // The save button
    this.saveBtnEl = qs("#modal__body-btn");
  }

  /**
   * Display users
   * @param {Array} data The data of the user to be rendered
   */
  async displayUsers(data) {
    // Clear existing table content
    this.tableContentEl.innerHTML = "";

    // Wait for the data to be resolved
    const users = await data;

    // Iterate over each user in the data and create table rows
    users.map((user) => {
      // Create a new list item for each user
      const row = document.createElement("li");
      row.classList.add("table__content__item");

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
}

export default UserView;
