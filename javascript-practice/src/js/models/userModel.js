import UserService from "../services/userService";

class UserModel {
  constructor() {
    this.userService = new UserService();
  }

  /**
   * Get users from the user service
   * @returns {Promise} A promise that resolves to the users data
   */
  getUsers = async () => await this.userService.fetchUsers();

  /**
   * Add a user using the user service
   * @param {Object} usersData The data of the user to be added
   * @returns {Promise} A promise that resolves to the response data or error message
   */
  addUser = (usersData) => this.userService.createUser(usersData);

  /**
   * The function to handle when user click to edit a user
   * @param {Number} userId The user's id
   * @param {Object} usersData The data of user after edited a user
   */
  editUser = (userId, userData) => this.userService.editUser(userId, userData);

  /**
   * Get user details information
   * @param {Number} userId The user's id
   */
  getUserDetails = async (userId) =>
    await this.userService.getUserDetails(userId);

  /**
   * The function to handle when user click to delete a user
   * @param {Number} userId The user's id
   */
  deleteUser = async (userId) => await this.userService.deleteUser(userId);
}

export default UserModel;
