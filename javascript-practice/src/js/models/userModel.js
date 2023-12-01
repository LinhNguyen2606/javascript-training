import UserService from "../services/userService";

class UserModel {
  constructor() {
    this.userService = new UserService();
    this.users = [];
  }

  /**
   * Get users from the user service
   * @returns {Promise} A promise that resolves to the users data
   */
  getUsers = async () => {
    this.users = await this.userService.fetchUsers();
    return this.users;
  };

  /**
   * Add a user using the user service
   * @param {object} usersData The data of the user to be added
   * @returns {Promise} A promise that resolves to the response data or error message
   */
  addUser = (usersData) => this.userService.createUser(usersData);

  /**
   * The function to handle when user click to edit a user
   * @param {Number} userId The user's id
   * @param {object} usersData The data of user after edited a user
   * @returns {Promise} A promise that resolves to the response data or error message
   */
  editUser = (userId, userData) => this.userService.editUser(userId, userData);

  /**
   * Get user details information
   * @param {Number} userId The user's id
   * @returns {Promise} A promise that resolves to the response data or error message
   */
  getUserDetails = async (userId) =>
    await this.userService.getUserDetails(userId);

  /**
   * The function to handle when user click to delete a user
   * @param {Number} userId The user's id
   * @returns {Promise} A promise that resolves to the response data or error message
   */
  deleteUser = async (userId) => await this.userService.deleteUser(userId);

  /**
   * The function to filter the user when user click
   * @param {String} query The value search in input
   */
  filterUsers = (query) => {
    if (query === "") return this.users;

    const filteredUsers = this.users.data.filter((user) => {
      const username = user.userName.toUpperCase();
      const email = user.email.toUpperCase();
      return (
        username.includes(query.toUpperCase()) ||
        email.includes(query.toUpperCase())
      );
    });
    return filteredUsers;
  };
}

export default UserModel;
