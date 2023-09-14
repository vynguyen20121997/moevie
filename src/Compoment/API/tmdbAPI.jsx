import React from 'react'

export const category = {
    movie: "movie",
    tv: "tv"
  };
  
  export const movieType = {
    upcoming: "upcoming",
    popular: "popular",
    top_rated: "top_rated"
  };
  
  export const tvType = {
    popular: "popular",
    top_rated: "top_rated",
    on_the_air: "on_the_air"
  };

 const tmdbAPI = {

    getMoviesList: (type, params) => {
        const url = "movie/" + movieType[type];
        return(url, params);
      },
      getTvList: (type, params) => {
        const url = "tv/" + tvType[type];
        return (url, params);
      },
      getVideos: (cate, id) => {
        const url = category[cate] + "/" + id + "/videos";
        return (url, { params: {} });
      },
      search: (cate, params) => {
        const url = "search/" + category[cate];
        return (url, params);
      },
      detail: (cate, id, params) => {
        const url = category[cate] + "/" + id;
        return (url, params);
      },
      credits: (cate, id) => {
        const url = category[cate] + "/" + id + "/credits";
        return (url, { params: {} });
      },
      similar: (cate, id) => {
        const url = category[cate] + "/" + id + "/similar";
        return(url, { params: {} });
      }

}
export default tmdbAPI;