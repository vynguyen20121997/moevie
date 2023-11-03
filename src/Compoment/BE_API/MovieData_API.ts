import api from "./axiosInstance";

const MovieDataAPI = {
  getAll: (limit = 10, page = 1, sort = "desc") => {
    const url = `/movies?limit=${limit}&page=${page}&sort=${sort}`;
    return api.get(url);
  },
  getById: (id: any) => {
    const url = `/movies/${id}`;
    return api.get(url);
  },
};

export default MovieDataAPI;
