import { $convertFileToBase64 } from "../helpers";

class UserController {
  constructor(model, view) {
    this.model = model.userModel;
    this.view = view.userView;

    this.handleGetUsers();
    this.view.bindEventAddUser(this.handleAddUser);
    this.view.bindEventUserViewDetails(this.handleUserViewDetails);
    this.view.bindEventShowEditForm(this.handleShowEditForm);
    this.view.bindEventChangeAvatar(this.handleChangeAvatar);
    this.view.bindEventChangeStatus(this.handleChangeStatus);
    this.view.bindEventSearchUser(this.handleSearchUser);
  }

  /**
   * Get users and display them in the view
   */
  handleGetUsers = async () => {
    const { data } = await this.model.getUsers();
    this.view.displayUsers(data);
  };

  /**
   * Function to handle when user change the avatar
   * @param {File} file - The file object representing the selected image file.
   */
  handleChangeAvatar = async (file) => {
    const src = await $convertFileToBase64(file);
    this.view.displayAvatarImg(src);
  };

  /**
   * Function to handle when user click the toggle switch box to change the status of the user
   * @param {Boolean} checked - The status of user is checked or not
   */
  handleChangeStatus = (checked) => {
    this.view.displayStatus(checked);
  };

  /**
   * The function to handle when add a new user
   * @param {Object} usersData The data of the user to be added
   */
  handleAddUser = async (usersData) => {
    const res = await this.model.addUser(usersData);
    if (res.errMsg) {
      alert(res.errMsg);
    } else {
      setTimeout(() => {
        this.handleGetUsers();
      }, 1000);
    }
  };

  /**
   * The function to handle when click to view user detailed information
   * @param {Number} userId The user's id
   */
  handleUserViewDetails = async (userId) => {
    const { data } = await this.model.getUserDetails(userId);
    this.view.displayUserDetailsInfo(data);
  };

  /**
   * The function to handle when user click to show the edit form
   * @param {Number} userId The user's id
   */
  handleShowEditForm = async (userId) => {
    const { data } = await this.model.getUserDetails(userId);
    this.view.displayInfoEditUser(data);
    this.view.bindEventEditUser(userId, this.handleEditUser);
    this.view.bindEventDeleteUser(userId, this.handleDeleteUser);
  };

  /**
   * The function to handle when user click to edit a user
   * @param {Number} userId The user's id
   * @param {Object} usersData The data of user after edited a user
   */
  handleEditUser = async (userId, usersData) => {
    const res = await this.model.editUser(userId, usersData);
    if (res.errMsg) {
      alert(res.errMsg);
    } else {
      setTimeout(() => {
        this.handleGetUsers();
      }, 1000);
    }
  };

  /**
   * The function to handle when user click to delete a user
   * @param {Number} userId The user's id
   */
  handleDeleteUser = async (userId) => {
    const res = await this.model.deleteUser(userId);
    if (res.errMsg) {
      alert(res.errMsg);
    } else {
      setTimeout(() => {
        this.handleGetUsers();
      }, 1000);
    }
  };

  /**
   * The function to search a user
   * @param {String} query The value search in input
   */
  handleSearchUser = async (query) => {
    let users;
    if (query) {
      users = await this.model.filterUsers(query);
    } else {
      this.handleGetUsers();
    }
    this.view.displayUsersMatchKeyword(users);
  };
}

export default UserController;
