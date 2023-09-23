import { useQuery, useQueryClient } from "@tanstack/react-query";
import { APIConfig } from "../API/APIConfig";
import { MoviesEndPoints } from "../API/APIConfig";
import axios from "axios";
import { createContext, useContext, useState } from "react";

const UseGenreList = () => {
  const [genreList, setGenreList] = useState([]);
  const urlLink = `${MoviesEndPoints.genre}${APIConfig.apiKey}`;

  return useQuery(["genreList"], () => axios.get(urlLink), {
    cacheTime: Infinity,
    // timeout: 5000,
  });
};

export default UseGenreList;
