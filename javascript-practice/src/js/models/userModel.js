import UserService from "../services/userService";

class UserModel {
  constructor() {
    this.userService = new UserService();
  }

  getUsers = () => this.userService.handleFetchUsers();

  addUser = (user) => this.userService.handleCreateUser(user);
}

export default UserModel;
