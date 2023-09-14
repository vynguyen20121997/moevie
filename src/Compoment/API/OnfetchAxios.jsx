import { APIConfig } from "../Compoment/API/APIConfig";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const GenreList = () => {

    // const urlBase = 

  const { isLoading, error, data } = useQuery(["genreList"], () =>
    axios.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${APIConfig.apiKey}`
    )
  );

  if (isLoading) {
    return <p>Loading...</p>;
  } else if (error) {
    return <p>Error fetching genre list: {error.message}</p>;
  } else {
    return (
      data
    );
  }
};
