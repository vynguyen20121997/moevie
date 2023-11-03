import api from "./axiosInstance";

const AuthAPI = {
  register: (body: any) => {
    const url = "https://web-xem-phim.onrender.com/user/register";
    return api.post(url, body);
  },
  login: (body: any) => {
    const url = "https://web-xem-phim.onrender.com/user/login";
    return api.post(url, body);
  },
  fetchCurrentUser: (body: any) => {
    const url = "https://web-xem-phim.onrender.com/user/current-user";
    return api.get(url, {
      headers: {
        "access-token": body,
      },
    });
  },
};
export default AuthAPI;
