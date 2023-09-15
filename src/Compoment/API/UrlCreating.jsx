// export const urlTmdbAPI = {
//   category: {
//     movie: "movie",
//     tv: "tv",
//     genre: "genre",
//     list: "list",
//   },

//   movieType: {
//     now_playing: "now_playing",
//     upcoming: "upcoming",
//     popular: "popular",
//     top_rated: "top_rated",
//   },

//   tvType: {
//     popular: "popular",
//     top_rated: "top_rated",
//     on_the_air: "on_the_air",
//   },
//   getMoviesList: (type) => {
//     const url = "movie/" + movieType[type];
//     return url;
//   },

//   getTvList: (type, params) => {
//     const url = "tv/" + tvType[type];
//     return url, params;
//   },

//   getVideos: (cate, id) => {
//     const url = category[cate] + "/" + id + "/videos";
//     return url, { params: {} };
//   },
//   search: (cate, params) => {
//     const url = "search/" + category[cate];
//     return url, params;
//   },
//   detail: (cate, id, params) => {
//     const url = category[cate] + "/" + id;
//     return url, params;
//   },
//   credits: (cate, id) => {
//     const url = category[cate] + "/" + id + "/credits";
//     return url, { params: {} };
//   },
//   similar: (cate, id) => {
//     const url = category[cate] + "/" + id + "/similar";
//     return url, { params: {} };
//   },
// };
