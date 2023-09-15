import { useQuery, useQueryClient } from "@tanstack/react-query";
import { APIConfig } from "../API/APIConfig";
import { tmdbAPI } from "../API/tmdbAPI";

const Lists = () => {
  const urlLink = ` ${APIConfig.baseUrl}${tmdbAPI.genre("movie")}${
    APIConfig.apiKey
  }`;
  const queryClient = useQueryClient();

  const query = useQuery(["genreList"], () => {
    return fetch(urlLink)
      .then((response) => response.json())
      .then((data) => {
        return data.genres;
      });
  });

  const genreList = query.data;
  console.log("dayla", genreList);
  return (
    <ul>
      {genreList &&
        genreList.map((genre) => <li key={genre.id}>{genre.name}</li>)}
    </ul>
  );
};

export default Lists;
