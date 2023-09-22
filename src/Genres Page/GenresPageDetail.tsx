import React, { useEffect, useState, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import {
  APIConfig,
  MoviebyOptions,
  MoviesEndPoints,
} from "../Compoment/API/APIConfig";
import { newGenreArrayAPI } from "../Compoment/API/APIServies";
import { OnFetchAxios } from "../Compoment/API/OnfetchAxios";
import { Rating } from "@mui/material";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import "./GenresStyle.css";
import { AxiosResponse } from "axios";
export interface Movie {
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
}
const GenresPageDetail = () => {
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

  const { data, isLoading } = OnFetchAxios({
    url: newUrl,
    key: "newUrl",
  });
  const [movieData, setMovieData] = useState(data);
  useEffect(() => {
    setMovieData(data);
  }, [data]);

  console.log("data", movieData);
  const movieByGenreData: Movie[] = movieData && movieData.data.results;
  return (
    <div>
      <div>
        <div style={{ paddingTop: "5%", paddingLeft: "10%" }}>
          {/* <h1 style={{ color: "white" }}>{nameGenre && nameGenre.name}</h1> */}
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
            const { vote_average, title, release_date, id, poster_path } = item;
            const ratingfixed = vote_average / 2;
            return (
              <>
                {" "}
                <Link to={`/movies/${id}`}>
                  <div
                    // onMouseEnter={handleMouseEnter}
                    // onMouseLeave={handleMouseLeave}
                    className="movie-card"
                    // style={boxStyle}
                  >
                    <img
                      // style={{ opacity: isHover ? "0.5" : null }}
                      src={APIConfig.w300Image(poster_path)}
                      alt=""
                    />

                    <div
                      className="hide"
                      // style={onHoverDisplaying}
                      // onMouseEnter={handleMouseEnter}
                      // onMouseLeave={handleMouseLeave}
                    >
                      <div className="content-content-hide">
                        <h4>{title}</h4>
                        <h5>{release_date}</h5>
                      </div>

                      <div className="rating-content-btn-hide">
                        <Rating
                          name="customized-10"
                          size="small"
                          readOnly
                          value={ratingfixed}
                        />
                        <h5> {vote_average}/10</h5>
                      </div>
                      <div className="content-btn-hide">
                        {/* <Link to={`/movies/${id}`}>
                        <Button
                          style={{ borderRadius: "5px", padding: "5%" }}
                          variant="contained"
                          size="medium"
                          className="play-btn-content-btn-hide"
                        >
                          WATCH NOW
                        </Button>
                      </Link> */}
                        {/* <Fab
              style={{ marginLeft: "8%" }}
              size="medium"
              color="primary"
              variant="contained"
              className="play-btn-content-btn-hide"
            >
              <AddIcon variant="contained" fontSize="medium" />
            </Fab> */}
                      </div>
                    </div>
                  </div>
                </Link>
              </>
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
