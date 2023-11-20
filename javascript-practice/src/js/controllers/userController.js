class UserController {
  constructor(model, view) {
    this.model = model.userModel;
    this.view = view.userView;
  }

  getUsers = () => this.view.displayUsers(this.model.getUsers());

  addUser = async (newUser) => {
    await this.model.addUser(newUser);

    setTimeout(async () => {
      this.getUsers();
    }, 1000);
  };

  init = () => {
    this.getUsers();
    this.view.initFunctions(this.addUser.bind(this));
  };
}

export default UserController;
