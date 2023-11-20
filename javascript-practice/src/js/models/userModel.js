import UserService from "../services/userService";

class UserModel {
  constructor() {
    this.userService = new UserService();
  }

  /**
   * Get users from the user service
   * @returns {Promise} A promise that resolves to the users data
   */
  getUsers = () => this.userService.handleFetchUsers();

  /**
   * Add a user using the user service
   * @param {Object} usersData The data of the user to be added
   * @returns {Promise} A promise that resolves to the response data or error message
   */
  addUser = (usersData) => this.userService.handleCreateUser(usersData);
}

export default UserModel;
