import { qs } from "../helpers";
import { userDetailsTemplate } from "../template";

class UserDetailsView {
  constructor() {
    // The container of the user details
    this.userDetailsContainerEl = qs(".user__wrapper");
  }

  /**
   * Show the user details information such as name, status, email, avatar
   * @param {Object} userData The data corressponding of that user
   */
  async showUserDetailsInfo(userData) {
    const userDetailsHTML = userDetailsTemplate(userData);

    this.userDetailsContainerEl.innerHTML = userDetailsHTML;

    this.userDetailsContainerEl.style.display = "block";
  }
}

export default UserDetailsView;
