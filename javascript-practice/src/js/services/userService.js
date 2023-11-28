import { API_BASE_URL } from "../constants/config";

class UserService {
  /**
   * Handle fetching users
   * @returns {Object} An object containing the response data or error message
   */
  async fetchUsers() {
    try {
      const res = await fetch(`${API_BASE_URL}/users`);
      if (res.ok && res.status === 200) {
        const data = await res.json();
        return {
          data,
          errMsg: null,
        };
      }
    } catch (err) {
      return {
        data: null,
        errMsg: err.message,
      };
    }
  }

  /**
   * Function to add users
   * @param {Object} usersData The data of the user to be created
   * @returns {Object} An object containing the response data or error message
   */
  async createUser(usersData) {
    try {
      const res = await fetch(`${API_BASE_URL}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          avatar: usersData.avatar,
          userName: usersData.userName,
          status: usersData.status,
          email: usersData.email,
          registered: usersData.registered,
          lastVisited: usersData.lastVisited,
          detailDescUser: usersData.detailDescUser,
        }),
      });

      if (res.ok && res.status === 201) {
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
    } catch (err) {
      return {
        data: null,
        errMsg: err.message,
      };
    }
  }

  async editUser(userId, userData) {
    try {
      const res = await fetch(`${API_BASE_URL}/users/${userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userName: userData.userName,
          email: userData.email,
          avatar: userData.avatar,
          isActive: userData.isActive,
          detailDescUser: userData.detailDescUser,
        }),
      });

      if (res.ok & (res.status === 200)) {
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
    } catch (err) {
      return {
        data: null,
        errMsg: err.message,
      };
    }
  }

  async getUserDetails(userId) {
    try {
      const res = await fetch(`${API_BASE_URL}/users/${userId}`);
      if (res.ok && res.status === 200) {
        const data = await res.json();
        return {
          data,
          errMsg: null,
        };
      }
    } catch (err) {
      return {
        data: null,
        errMsg: err.message,
      };
    }
  }
}

export default UserService;
