import React, { useEffect, useState, useContext } from "react";
import { Button } from "@mui/material";
import { Params, useParams, useNavigate } from "react-router-dom";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";
import { APIConfig } from "../Compoment/API/APIConfig";
import Fab from "@mui/material/Fab";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import "./style3.css";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import CardMedia from "@mui/material/CardMedia";
import { OnFetchAxios } from "../Compoment/API/OnfetchAxios";
import { MoviesDetailEndPoints } from "../Compoment/API/APIConfig";
import { Link } from "@mui/icons-material";
import { GenreListContext } from "../App";
import { ButtonContainer } from "../Compoment/Button/GenresButton";
import {
  MovieObject,
  creditObject,
  movieObject,
} from "../Compoment/Type/InterfaceType";
const MovieDetailPage = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const params = useParams();
  const addToSave: (movie: MovieObject) => void = useContext(GenreListContext);

  const idMovie: string | undefined = params.movieId;
  const urlByDetail = MoviesDetailEndPoints.details(idMovie) + APIConfig.apiKey;
  const fetchOptions = {
    url: urlByDetail,
    key: "MovieDetailHooks",
  };
  const { data: movieDetailData, isLoading: detailLoading } =
    OnFetchAxios(fetchOptions);
  const urlByCredit = MoviesDetailEndPoints.credits(idMovie) + APIConfig.apiKey;
  const CreditfetchOptions = {
    url: urlByCredit,
    key: "MovieCreditHooks",
  };
  const { data: movieCredit, isLoading: creditLoading } =
    OnFetchAxios(CreditfetchOptions);
  const urlByVideo = MoviesDetailEndPoints.video(idMovie) + APIConfig.apiKey;
  const videofetchOptions = {
    url: urlByVideo,
    key: "videoHooks",
  };
  const { data: video, isLoading: videoLoading } =
    OnFetchAxios(videofetchOptions);
  if (creditLoading) return null;
  if (detailLoading) return null;
  if (videoLoading) return null;
  const videoData = video?.data.results;
  const movieDetail: movieObject = movieDetailData?.data;
  const cast: creditObject[] = movieCredit?.data.cast;
  const {
    id,
    title,
    overview,
    release_date,
    vote_count,
    vote_average,
    poster_path,
    original_title,
    imdb_id,
    original_language,
    name,
    backdrop_path,
    runtime,
    genres,
    production_countries,
  } = movieDetail;
  const genre_ids: number[] = genres?.map((i) => i.id);
  const countryList = movieDetail.production_countries;
  const imgUrl = APIConfig.w500Image(poster_path);
  const backgroundUrl = APIConfig.originalImage(backdrop_path);
  const genresList = movieDetail.genres;
  console.log("genre cua phim", genresList);
  const videoNe = videoData && videoData[0];
  const urlVideo = `https://www.youtube.com/embed/${videoNe?.key}`;
  // const login: boolean = JSON.parse(localStorage?.getItem("login") || "");
  const handleClose = () => setOpen(false);
  const login = true;
  const handleOpen = () => {
    if (!login) {
      navigate(`/login`);
    } else {
      setOpen(true);
    }
  };
  return (
    <>
      <div
        className="detailpage-body"
        style={{
          backgroundImage: `linear-gradient(to bottom,
         rgba(0, 0, 0, 0.1),
         rgba(0, 0, 0, 10)), url(${backgroundUrl})`,
          width: "100%",
        }}
      >
        <div className="detail-page">
          <div className="leftside-detail-page">
            <div>
              <img src={imgUrl} alt={imdb_id} />
            </div>
            <div className="left-detail">
              <h4>
                {vote_average}
                <span> rattings</span>
              </h4>
              <h4>
                {vote_count}
                <span> reviews</span>
              </h4>
            </div>
          </div>

          <div className="middleside-detail-page">
            <h1 id="title">{original_title}</h1>
            <h4 id="release-date">Release Date: {release_date}</h4>
            <div className="middle-detail">
              <h4>
                {vote_average}
                <span> rattings</span>
              </h4>
              <h4>
                {vote_count}
                <span> reviews</span>
              </h4>
            </div>
            <div className="buttongroup">
              <Button
                id="watch-button"
                variant="contained"
                onClick={handleOpen}
              >
                WATCH TRAILER <PlayArrowOutlinedIcon />
              </Button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 800,
                    height: 500,
                    bgcolor: "background.paper",
                    border: "2px solid #000",
                    boxShadow: 24,
                  }}
                >
                  <CardMedia
                    style={{ width: "100%", height: "100%" }}
                    component="iframe"
                    src={urlVideo}
                  />
                </Box>
              </Modal>
              <Fab style={{ marginLeft: "2%" }}>
                <BookmarkBorderOutlinedIcon
                  onClick={() =>
                    addToSave({
                      vote_average,
                      title,
                      release_date,
                      id,
                      poster_path,
                      genre_ids,
                      name,
                    })
                  }
                />
              </Fab>
              <Fab id="other-button">
                <ShareOutlinedIcon />
              </Fab>
            </div>
            <h4 id="overview">{overview}</h4>

            <div className="moviedetail-table">
              <h1>Details</h1>
              <div>
                <TableContainer>
                  <Table sx={{ minWidth: "50%", maxWidth: "60%" }}>
                    <TableBody>
                      <TableRow>
                        <TableCell style={{ color: "white" }}>
                          <strong>Genres</strong>
                        </TableCell>
                        {genresList &&
                          genresList.map((i) => (
                            <TableCell style={{ color: "white" }} align="right">
                              <ButtonContainer variant="outlined" genre={i} />
                            </TableCell>
                          ))}
                      </TableRow>
                      <TableRow>
                        <TableCell style={{ color: "white" }}>
                          <strong>Country of Origin</strong>
                        </TableCell>
                        {countryList &&
                          countryList.map((i) => (
                            <TableCell style={{ color: "white" }} align="right">
                              {i.name}
                            </TableCell>
                          ))}
                      </TableRow>

                      <TableRow
                        sx={{
                          borderBottom: "none",
                          [`& .${tableCellClasses.root}`]: {
                            borderBottom: "none",
                          },
                        }}
                      >
                        <TableCell style={{ color: "white" }}>
                          <strong>Runtime</strong>
                        </TableCell>
                        <TableCell style={{ color: "white" }} align="right">
                          {/* {runtime} */}
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            </div>
          </div>

          <div className="right-detail-page">
            <h2>CAST & CREW</h2>
            <div className="cast-list">
              {cast?.map((item) => {
                return (
                  <div className="cast-block">
                    <div className="img-cast-block">
                      <img
                        src={APIConfig.w200Image(item.profile_path)}
                        alt=""
                      />
                    </div>

                    <div className="detail-cast-block">
                      <h3> {item.name} </h3>
                      <h4>As: {item.character}</h4>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetailPage;
