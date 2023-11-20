import { API_BASE_URL } from "../constants/config";
import ModalView from "../views/modal";

class UserService {
  // Fetch users
  handleFetchUsers() {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await fetch(`${API_BASE_URL}/users`);
        if (res.ok) {
          const data = res.json();
          resolve(data);
        }
      } catch (err) {
        reject(err);
      }
    });
  }

  // Create a new user
  handleCreateUser(user) {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await fetch(`${API_BASE_URL}/users`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            avatar: user.avatar,
            userName: user.userName,
            status: user.status,
            email: user.email,
          }),
        });

        if (res.ok) {
          const data = await res.json();
          resolve(data);
        } else {
          reject(new Error("Failed to create user"));
        }
      } catch (err) {
        reject(err);
      }
    });
  }
}

export default UserService;
