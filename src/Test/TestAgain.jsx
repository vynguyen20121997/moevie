import { APIConfig } from "../Compoment/API/APIConfig";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export const GenreList = () => {
  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery(["genreList"], () =>
    axios.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${APIConfig.apiKey}`
    )
  );
  const genreList = data && data.data;
  console.log("gi ne", genreList);
  if (isLoading) {
    return <p>Loading...</p>;
  } else if (error) {
    return <p>Error fetching genre list: {error.message}</p>;
  } else {
    return (
      <ul>
        {data.data.genres.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    );
  }
};
