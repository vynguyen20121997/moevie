import React, { useEffect, useState, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import CardContainer from "../Compoment/SmallCompoment/MovieCardContainer";
import {
  APIConfig,
  MoviebyOptions,
  MoviesEndPoints,
} from "../Compoment/API/APIConfig";
import { OnFetchAxios } from "../Compoment/API/OnfetchAxios";
import { Rating } from "@mui/material";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import "./genresStyle.css";
import { AxiosResponse } from "axios";
import "./genresStyle.css";
interface Movie {
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
const GenresPageDetail = () => {
  const [movieData, setMovieData] = useState([]);
  const [page, setPage] = useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  const params: { genreId: string } = useParams() as { genreId: string };
  const idGenre = params.genreId;
  const idGenreNumber = parseInt(idGenre);
  const newUrl =
    MoviesEndPoints.discover +
    APIConfig.apiKey +
    MoviebyOptions.byGenreId(idGenreNumber) +
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
        <div className="category-genre">
          {/* <h1 style={{ color: "white" }}>{nameGenre && nameGenre.name}</h1> */}
        </div>
        <div className="moviecard">
          {movieByGenreData?.map((item) => {
            return <CardContainer movieDetail={item} loadingCard={isLoading} />;
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
export default GenresPageDetail;
