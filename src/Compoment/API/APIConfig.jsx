import React from "react";

export const APIConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "?api_key=5992fec4de8ddfb9864b94bdf9cfac0e",
  imgagesCollection:
    "https://api.themoviedb.org/3/collection/{collection_id}/images",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
  w300Image: (imgPath) => `https://image.tmdb.org/t/p/w300/${imgPath}`,
  w200Image: (imgPath) => `https://image.tmdb.org/t/p/w200/${imgPath}`,
  w100Image: (imgPath) => `https://image.tmdb.org/t/p/w100/${imgPath}`,
};
