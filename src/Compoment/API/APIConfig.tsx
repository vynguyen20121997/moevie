import React from "react";

export const APIConfig: {
  baseUrl: string;
  apiKey: string;
  originalImage: (imgPath: string) => string;
  w500Image: (imgPath: string) => string;
  w300Image: (imgPath: string) => string;
  w200Image: (imgPath: string) => string;
  w100Image: (imgPath: string) => string;
} = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "?api_key=5992fec4de8ddfb9864b94bdf9cfac0e",
  originalImage: (imgPath: string) =>
    `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath: string) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
  w300Image: (imgPath: string) => `https://image.tmdb.org/t/p/w300/${imgPath}`,
  w200Image: (imgPath: string) => `https://image.tmdb.org/t/p/w200/${imgPath}`,
  w100Image: (imgPath: string) => `https://image.tmdb.org/t/p/w100/${imgPath}`,
};

export const MoviesEndPoints: {
  nowPlaying: string;
  popular: string;
  topRated: string;
  upcoming: string;
  airingtoday: string;
  ontheair: string;
  populartv: string;
  topratedtv: string;
  genre: string;
  discover: string;
} = {
  nowPlaying: "https://api.themoviedb.org/3/movie/now_playing",
  topRated: "https://api.themoviedb.org/3/movie/top_rated",
  popular: "https://api.themoviedb.org/3/movie/popular",
  upcoming: "https://api.themoviedb.org/3/movie/upcoming",
  airingtoday: "https://api.themoviedb.org/3/tv/airing_today",
  ontheair: "https://api.themoviedb.org/3/tv/on_the_air",
  populartv: "https://api.themoviedb.org/3/tv/popular",
  topratedtv: "https://api.themoviedb.org/3/tv/top_rated",
  genre: "https://api.themoviedb.org/3/genre/movie/list",
  discover: "https://api.themoviedb.org/3/discover/movie",
};

export const MoviebyOptions: {
  byGenreId: (id: number) => string;
  byPageNumber: string;
  bySpecificPageNumber: (id: number) => string;
} = {
  byGenreId: (id) => `&with_genres=${id}`,
  byPageNumber: `&page=${Math.floor(Math.random() * 55 + 1)}`,
  bySpecificPageNumber: (id) => `&page=${id}`,
};
export const MoviesDetailEndPoints = {
  details: (id: string | undefined) =>
    `https://api.themoviedb.org/3/movie/${id}}`,
  credits: (id: string | undefined) =>
    `https://api.themoviedb.org/3/movie/${id}}/credits`,
  video: (id: string | undefined) =>
    `https://api.themoviedb.org/3/movie/${id}/videos`,
};
