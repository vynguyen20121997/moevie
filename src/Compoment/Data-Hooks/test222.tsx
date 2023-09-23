import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { APIConfig, MoviesEndPoints } from "../API/APIConfig";
type GenreList = any;
export const GenreListContext = createContext<GenreList[]>([]);
const MyComponent = (props: any) => {
  const [genreList, setGenreList] = useState<any>([]);

  useEffect(() => {
    axios.get(`${MoviesEndPoints.genre}${APIConfig.apiKey}`).then((res) => {
      setGenreList(res.data);
    });
  }, []);

  return (
    <GenreListContext.Provider value={genreList}>
      {props.children}
    </GenreListContext.Provider>
  );
};

export default MyComponent;
