import React, { useEffect, useState, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import CardContainer from "../Compoment/SmallCompoment/MovieCardContainer";
import {
  APIConfig,
  MoviebyOptions,
  MoviesEndPoints,
} from "../Compoment/API/APIConfig";
import { OnFetchAxios, OnFetchGenreList } from "../Compoment/API/OnfetchAxios";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import "./GenresStyle.css";
export interface Movie {
  name: string;
  id: number;
  title: string;
  original_title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  vote_count: number;
  vote_average: number;
  release_date: string;
  popularity: number;
  genre_ids: [number];
}
interface genreDataType {
  id: number;
  name: string;
}
const MovieTVListPageDetail = () => {
  const [movieData, setMovieData] = useState([]);
  const [page, setPage] = useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  const { data: genreListData } = OnFetchGenreList();
  const genreList: genreDataType[] = genreListData?.data.genres;
  const params: { type: string } = useParams() as { type: string };
  const { type } = params;
  const uppercasedType = type.toUpperCase();
  console.log("parram gif day", type);
  const filterEndPoint = (type: string) => {
    switch (type) {
      case "nowplaying":
        return "https://api.themoviedb.org/3/movie/now_playing";
      case "toprated":
        return "https://api.themoviedb.org/3/movie/top_rated";
      case "popular":
        return "https://api.themoviedb.org/3/movie/popular";
      case "upcoming":
        return "https://api.themoviedb.org/3/movie/upcoming";
      case "airingtoday":
        return "https://api.themoviedb.org/3/tv/airing_today";
      case "ontheair":
        return "https://api.themoviedb.org/3/tv/on_the_air";
      case "populartv":
        return "https://api.themoviedb.org/3/tv/popular";
      case "topratedtv":
        return "https://api.themoviedb.org/3/tv/top_rated";
      case "genre":
        return "https://api.themoviedb.org/3/genre/movie/list";
      case "discover":
        return "https://api.themoviedb.org/3/discover";
      default:
        return null;
    }
  };
  const newUrl =
    filterEndPoint(type) +
    APIConfig.apiKey +
    MoviebyOptions.bySpecificPageNumber(page);

  const { data: apiData, isLoading } = OnFetchAxios({
    url: newUrl,
    key: "newUrl",
  });
  const newData = apiData?.data.results;
  const movieByGenreData: Movie[] = newData && newData;

  // const loadMore = async () => {
  //   const newUrl =
  //     MoviesEndPoints.discover +
  //     APIConfig.apiKey +
  //     MoviebyOptions.byGenreId(idGenreNumber) +
  //     MoviebyOptions.bySpecificPageNumber(page);
  //   const { data: apiData, isLoading } = OnFetchAxios({
  //     url: newUrl,
  //     key: "newUrl",
  //   });
  //   if (apiData) {
  //     setMovieData([...movieData, ...apiData.data.results]);
  //     setPage(page + 1);
  //   }
  // };
  // useEffect(() => {
  //   loadMore();
  // }, movieByGenreData);

  return (
    <div>
      <div>
        <div style={{ paddingTop: "5%", paddingLeft: "10%" }}>
          <h1 style={{ color: "white" }}>{uppercasedType}</h1>
        </div>
        <div
          className="moviecard"
          style={{
            marginLeft: "3%",
            padding: "5%",
            display: "grid",
            gridTemplateColumns: " auto auto auto auto auto",
          }}
        >
          {movieByGenreData?.map((item) => {
            return (
              <CardContainer
                movieDetail={item}
                loadingCard={isLoading}
                genreData={[]}
              />
            );
          })}
        </div>
        <div className="pagtination">
          <Stack spacing={2}>
            <Pagination
              sx={{
                ".MuiPaginationItem-text": {
                  color: "white",
                },
              }}
              color="primary"
              count={10}
              page={page}
              size="large"
              onChange={handleChange}
            />
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default MovieTVListPageDetail;
function useUppercase(type: any) {
  throw new Error("Function not implemented.");
}
