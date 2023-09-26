import React, { useState, useContext, useMemo } from "react";
import { APIConfig } from "../API/APIConfig";
import { Button, Fab, Rating } from "@mui/material";
import { Link } from "react-router-dom";
import type * as CSS from "csstype";
import { GenreListContext } from "../../App";
import { ButtonContainer } from "../Button/GenresButton";
import Loading from "../Loading/Loading";
import "./styleMovieCard.css";
import AddIcon from "@mui/icons-material/Add";
import { OnFetchGenreList } from "../API/OnfetchAxios";
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

interface MovieItem {
  name: string;
  id: number;
  title?: string;
  poster_path: string;
  quantity?: number;
}
interface PropType {
  movieItem?: MovieItem;
  movieDetail: Movie;
  loadingCard: boolean;
  genreData: genreData[];
}
interface genreData {
  id: number;
  name: string;
}

interface genreDataType {
  genres: [
    {
      id: number;
      name: string;
    }
  ];
}

const CardContainer: React.FC<PropType> = (props) => {
  const addToSave: (movie: MovieItem) => void = useContext(GenreListContext);
  const [isHover, SetIsHover] = useState<boolean>(false);
  const { movieDetail, loadingCard, genreData } = props;
  const {
    vote_average,
    title,
    release_date,
    id,
    poster_path,
    genre_ids,
    name,
  } = movieDetail;
  const genreFilter = () => {
    const result = [];
    for (const genreId of genre_ids) {
      const element = genreData?.find((item) => item.id === genreId);
      if (element) {
        result.push({ name: element.name, id: element.id });
      }
    }
    return result;
  };
  const genreNames = genreFilter();
  const handleMouseEnter = () => {
    SetIsHover(true);
  };
  const handleMouseLeave = () => {
    SetIsHover(false);
  };
  const ratingfixed = vote_average / 2;
  const boxStyle = {
    scale: isHover ? "1" : "",
    boxShadow: isHover ? "0px 10px 20px 2px rgba(0, 200, 255, 0.7)" : "",
    transform: isHover ? "translateY(-5px)" : "",
  };
  const onHoverDisplaying: CSS.Properties = {
    display: isHover ? "block" : "",
    position: "absolute",
    top: "0",
    borderRadius: "15px",
    width: "100%",
    height: "270px",
    color: "white",
  };
  return (
    <>
      {loadingCard ? (
        <Loading />
      ) : (
        <Link to={`/movies/${id}`}>
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="movie-card"
            style={boxStyle}
          >
            <img
              style={{ opacity: isHover ? "0.5" : "" }}
              src={APIConfig.w500Image(poster_path)}
              alt=""
            />

            <div
              className="hide"
              style={onHoverDisplaying}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="content-content-hide">
                <h4>{title || name}</h4>
                <h5>{release_date}</h5>
              </div>

              <div className="rating-content-hide">
                <Rating
                  name="customized-10"
                  size="small"
                  readOnly
                  value={ratingfixed}
                />
                <h5> {vote_average}/10</h5>
              </div>

              <div className="genre-content-hide">
                {genreNames?.slice(0, 2).map((item) => {
                  return (
                    <ButtonContainer
                      variant="outlined"
                      size="small"
                      stylebutton={{
                        maxWidth: "80px",
                        fontSize: "10px",
                        maxHeight: "30px",
                        minWidth: "30px",
                        minHeight: "30px",
                        marginLeft: "1%",
                      }}
                      genre={item}
                    />
                  );
                })}
              </div>

              <div className="content-btn-hide">
                <Link to={`/movies/${id}`}>
                  <Button
                    variant="contained"
                    size="large"
                    className="play-btn-content-btn-hide"
                  >
                    WATCH NOW
                  </Button>
                </Link>
                <Fab
                  style={{ marginLeft: "3%" }}
                  size="small"
                  color="primary"
                  className="play-btn-content-btn-hide"
                  onClick={() => addToSave({ title, name, id, poster_path })}
                >
                  <AddIcon />
                </Fab>
              </div>
            </div>
          </div>
        </Link>
      )}
    </>
  );
};

export default CardContainer;
