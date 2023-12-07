import { API_BASE_URL } from "../constants/config";

class UserService {
  /**
   * Handle API response
   * @param {Response} res The response object from the API
   * @returns {object} An object containing the response data or error message
   */
  handleRespone = async (res) => {
    if (res.ok) {
      const data = await res.json();
      return {
        data,
        errMsg: null,
      };
    } else {
      return {
        data: null,
        errMsg: res.statusText,
      };
    }
  };

  /**
   * Handle API error
   * @param {Error} err The error object
   * @returns {object} An object containing the response data or error message
   */
  handleError = (err) => {
    return {
      data: null,
      errMsg: err.message,
    };
  };

  /**
   * Handle fetching users
   * @returns {object} An object containing the response data or error message
   */
  fetchUsers = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/users`);
      return this.handleRespone(res);
    } catch (err) {
      return this.handleError(err);
    }
  };

  /**
   * Function to add users
   * @param {object} usersData The data of the user to be created
   * @returns {object} An object containing the response data or error message
   */
  createUser = (usersData) => {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await fetch(`${API_BASE_URL}/users`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: usersData,
        });

        const response = this.handleRespone(res);
        if (!response.errMsg) {
          setTimeout(() => {
            this.fetchUsers();
            resolve(response);
          }, 1000);
        } else {
          resolve(response);
        }
      } catch (err) {
        reject(this.handleError(err));
      }
    });
  };

  /**
   * Function to edit user
   * @param {Number} userId The user's id
   * @param {object} usersData The data of the user to be created
   * @returns {object} An object containing the response data or error message
   */
  editUser = (userId, userData) => {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await fetch(`${API_BASE_URL}/users/${userId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: userData,
        });

        const response = this.handleRespone(res);
        if (!response.errMsg) {
          setTimeout(() => {
            this.fetchUsers();
            resolve(response);
          }, 1000);
        } else {
          resolve(response);
        }
      } catch (err) {
        reject(this.handleError(err));
      }
    });
  };

  /**
   * Function to get the data of user
   * @param {Number} userId The user's id
   * @returns {object} An object containing the response data or error message
   */
  deleteUser = (userId) => {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await fetch(`${API_BASE_URL}/users/${userId}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const response = this.handleRespone(res);
        if (!response.errMsg) {
          setTimeout(() => {
            this.fetchUsers();
            resolve(response);
          }, 1000);
        } else {
          resolve(response);
        }
      } catch (err) {
        reject(this.handleError(err));
      }
    });
  };
}

export default UserService;
