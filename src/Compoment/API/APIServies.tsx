import UseGenreList from "../Data-Hooks/GenresListHooks";
import { APIConfig, MoviebyOptions, MoviesEndPoints } from "./APIConfig";
import React from "react";

interface genreObject {
  id: number;
  name: string;
}
interface genreHookObject {
  url: string;
  key: string;
}

export const newGenreArrayAPI = () => {
  const { data: genreList, isLoading } = UseGenreList();
  if (isLoading) return null;
  const genreListData: genreObject[] = genreList && genreList.data.genres;
  const result: genreHookObject[] = [];
  for (const item of genreListData) {
    const newUrl =
      MoviesEndPoints.discover +
      APIConfig.apiKey +
      MoviebyOptions.byGenreId(item.id);
    const newKey = item.name.toLowerCase();
    result.push({ url: newUrl, key: newKey });
  }
  return result;
};
