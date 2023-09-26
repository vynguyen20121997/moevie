import { APIConfig, MoviebyOptions, MoviesEndPoints } from "./APIConfig";
import React from "react";
import { GenreListContext } from "../../App";
import { useContext } from "react";
import { OnFetchGenreList } from "./OnfetchAxios";
interface genreDataType {
  id: number;
  name: string;
}

interface genreHookObject {
  url: string;
  key: string;
}

export const UrlCreatingGenreAPI = () => {
  const { data: genreList } = OnFetchGenreList();
  const genreListData: genreDataType[] = genreList?.data.genres;
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
