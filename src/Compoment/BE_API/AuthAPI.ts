import api from "./axiosInstance";

const AuthAPI = {
  register: (body: any) => {
    const url = "/register";
    return api.post(url, body);
  },
  login: (body: any) => {
    const url = "/login";
    return api.post(url, body);
  },
  fetchCurrentUser: () => {
    const url = "/auth";
    return api.post(url);
  },
};
export default AuthAPI;
