import UserService from "../services/userService";

class UserModel {
  constructor() {
    this.userService = new UserService();
  }

  getUsers = () => this.userService.handleFetchUsers();
}

export default UserModel;
