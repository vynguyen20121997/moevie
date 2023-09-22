import useGenreList from "../Data-Hooks/GenresListHooks";
import { APIConfig, MoviebyOptions, MoviesEndPoints } from "./APIConfig";
import React from "react";

export const GetConfigMovieByGenreHook = ({
  hookKey,
  id,
}: {
  hookKey: string;
  id: number;
}) => {
  interface genreObject {
    id: number;
    name: string;
  }
  interface genreHookObject {
    url: string;
    key: string;
  }
  const { data: genreList } = useGenreList();
  const genreListData: genreObject[] = genreList?.data?.genres;
  console.log("gege", genreListData);
  const url =
    MoviesEndPoints.discover + APIConfig.apiKey + MoviebyOptions.byGenreId(id);

 const newGenreUrlArray = 

  return {};
};
