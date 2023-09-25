import { APIConfig, MoviebyOptions, MoviesEndPoints } from "./APIConfig";
import React from "react";
import { GenreListContext } from "../../App";
import { useContext } from "react";
interface genreDataType {
  id: number;
  name: string;
}
interface genreObject {
  id: number;
  name: string;
}
interface genreHookObject {
  url: string;
  key: string;
}

export const UrlCreatingGenreAPI = () => {
  const genreList: any = useContext(GenreListContext);
  const genreListData: genreDataType[] = genreList?.genres;
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
