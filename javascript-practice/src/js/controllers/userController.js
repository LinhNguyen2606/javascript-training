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
  }

  /**
   * Get users and display them in the view
   */
  handleGetUsers = async () => {
    const { data } = await this.model.getUsers();
    this.view.displayUsers(data);
  };

  handleChangeAvatar = async (file) => {
    const src = await $convertFileToBase64(file);
    this.view.displayAvatarImg(src);
  };

  handleChangeStatus = (checked) => {
    this.view.displayStatus(checked);
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
        this.handleGetUsers();
      }, 1000);
    }
  };

  /**
   * Get user details information
   * @param {Number} userId The user's id
   */
  handleUserViewDetails = async (userId) => {
    const { data } = await this.model.getUserDetails(userId);
    this.view.displayUserDetailsInfo(data);
  };

  handleShowEditForm = async (userId) => {
    const { data } = await this.model.getUserDetails(userId);
    this.view.displayInfoEditUser(data);
    this.view.editUser(userId, this.handleEditUser);
  };

  handleEditUser = async (userId, usersData) => {
    await this.model.editUser(userId, usersData);
    this.handleGetUsers();
  };
}

export default UserController;
