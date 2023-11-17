import { API_BASE_URL } from "../constants/config";

class UserService {
  async handleFetchUsers() {
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
}

export default UserService;
