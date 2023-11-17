class UserController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  getUsers = () =>
    this.view.userView.displayUsers(this.model.userModel.getUsers());
}

export default UserController;
