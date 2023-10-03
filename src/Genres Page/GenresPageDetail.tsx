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
import { Movie, genreDataType } from "../Compoment/Type/InterfaceType";

const GenresPageDetail = () => {
  const [movieData, setMovieData] = useState([]);
  const [page, setPage] = useState(1);
  const { data: genreListData } = OnFetchGenreList();
  const genreList: genreDataType[] = genreListData?.data.genres;
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
            return (
              <CardContainer
                movieDetail={item}
                loadingCard={isLoading}
                genreData={genreList}
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
export default GenresPageDetail;
