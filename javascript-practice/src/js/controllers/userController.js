class UserController {
  constructor(model, view) {
    this.model = model.userModel;
    this.view = view;
  }

  /**
   * Get users and display them in the view
   */
  handleGetUsers = () =>
    this.view.userView.displayUsers(
      this.model.getUsers(),
      this.handleGetUserDetailsInfo
    );

  /**
   * Add a user
   * @param {Object} usersData The data of the user to be added
   */
  handleAddUser = async (usersData) => {
    const res = await this.model.addUser(usersData);
    if (res.errMsg) {
      alert(res.errMsg);
    } else {
      setTimeout(async () => {
        this.handleGetUsers();
      }, 1000);
    }
  };

  /**
   * Get user details information
   * @param {Number} userId The user's id
   */
  handleGetUserDetailsInfo = async (userId) =>
    await this.model.getUserDetails(userId);

  /**
   * Initialize the application
   */
  init = () => {
    // Fetch and display users
    this.handleGetUsers();

    // Initialize functions in the view, passing the bindAddUser function bound to the current context
    this.view.userView.bindAddUser(this.handleAddUser);
  };
}

export default UserController;
