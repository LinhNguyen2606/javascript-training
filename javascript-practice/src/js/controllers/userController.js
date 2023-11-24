class UserController {
  constructor(model, view) {
    this.model = model.userModel;
    this.view = view.userView;

    this.view.bindAddUser(this.handleAddUser.bind(this));
  }

  /**
   * Get users and display them in the view
   */
  getUsers = async () => {
    const { data } = await this.model.getUsers();
    this.view.displayUsers(data, this.getUserDetailsInfo);
  };

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
        this.getUsers();
      }, 1000);
    }
  };

  /**
   * Get user details information
   * @param {Number} userId The user's id
   */
  getUserDetailsInfo = async (userId) =>
    await this.model.getUserDetails(userId);

  /**
   * Initialize the application
   */
  init = () => {
    // Fetch and display users
    this.getUsers();
  };
}

export default UserController;
