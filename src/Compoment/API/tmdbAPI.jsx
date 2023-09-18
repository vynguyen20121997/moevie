import React from "react";
import { APIConfig } from "./APIConfig";

export const ontionalPageFilter = "&page=" + Math.floor(Math.random() * 88 + 1);

export const category = {
  movie: "movie",
  tv: "tv",
  genre: "genre",
  list: "list",
};

export const movieType = {
  now_playing: "now_playing",
  upcoming: "upcoming",
  popular: "popular",
  top_rated: "top_rated",
};

export const tvType = {
  popular: "popular",
  top_rated: "top_rated",
  on_the_air: "on_the_air",
};

export const tmdbAPI = {
  getMoviesList: (type) => {
    const url = "movie/" + movieType[type];
    return url;
  },

  getTvList: (type, params) => {
    const url = "tv/" + tvType[type];
    return url, params;
  },

  getVideos: (cate, id) => {
    const url = category[cate] + "/" + id + "/videos";
    return url;
  },


  

  search: (cate, params) => {
    const url = "search/" + category[cate];
    return url, params;
  },
  genre: (cate) => {
    const url = "genre/" + category[cate] + "/list";
    return url;
  },
 similar: (cate, id) => {
    const url = category[cate] + "/" + id + "/similar";
    return url, { params: {} };
  },





  detail: (cate, id) => {
    const url = category[cate] + "/" + id;
    return url;
  },

  credits: (cate, id) => {
    const url = category[cate] + "/" + id + "/credits";
    return url;
  },
 
};
// export default tmdbAPI;
