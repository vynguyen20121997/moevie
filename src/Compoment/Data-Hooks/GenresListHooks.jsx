import { useQuery, useQueryClient } from "@tanstack/react-query";
import { APIConfig } from "../API/APIConfig";
import { tmdbAPI } from "../API/tmdbAPI";
import axios from "axios";
import { useState } from "react";

const useGenreList = () => {
  const urlLink = `${APIConfig.baseUrl}${tmdbAPI.genre("movie")}${
    APIConfig.apiKey
  }`;

  return useQuery(["genreList"], () => axios.get(urlLink), {
    cacheTime: Infinity,
    timeout: 5000,
  });
};

export default useGenreList;
