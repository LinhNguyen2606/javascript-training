import { qs } from "../helpers";
import { userDetailsTemplate } from "../template";

class UserDetailsView {
  constructor() {
    // The talbe content user's information
    this.tableContentItemsEl = document.querySelectorAll(
      ".table__content__item"
    );

    // The container of the user details
    this.userDetailsContainerEl = qs(".user__wrapper");
  }

  /**
   * Initialize functions
   * @param {Function} handleGetUserDetailsInfor The function to get the details information of the user
   */
  init(handleGetUserDetailsInfor) {
    this.handleGetUserDetailsInfor = handleGetUserDetailsInfor;
  }

  /**
   * Show the user details information such as name, status, email, avatar
   * @param {Number} userId The id of the user
   */
  async showUserDetails(userId) {
    const userDetailsData = await this.handleGetUserDetailsInfor(userId);

    const userDetailsHTML = userDetailsTemplate(userDetailsData);

    this.userDetailsContainerEl.innerHTML = userDetailsHTML;

    this.userDetailsContainerEl.style.display = "block";
  }
}

export default UserDetailsView;
