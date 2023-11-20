class UserController {
  constructor(model, view) {
    this.model = model.userModel;
    this.view = view.userView;
  }

  /**
   * Get users and display them in the view
   */
  getUsers = () => this.view.displayUsers(this.model.getUsers());

  /**
   * Add a user
   * @param {Object} usersData The data of the user to be added
   */
  addUser = async (usersData) => {
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
   * Initialize the application
   */
  init = () => {
    // Fetch and display users
    this.getUsers();
    // Initialize functions in the view, passing the addUser function bound to the current context
    this.view.init(this.addUser.bind(this));
  };
}

export default UserController;
