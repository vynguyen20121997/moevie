import React, { useState } from "react";
import { APIConfig } from "../API/APIConfig";
import { Button, Rating } from "@mui/material";
import { Link } from "react-router-dom";
import type * as CSS from "csstype";

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
  genre_ids: {
    id: number;
  };
}

type PropType = {
  movieDetail: Movie;
};

const CardContainer: React.FC<PropType> = (props) => {
  const { movieDetail } = props;
  const { vote_average, title, release_date, id, poster_path, genre_ids } =
    movieDetail;
  const [isHover, SetIsHover] = useState<boolean>(false);

  //   const genreList = data && data.data;
  //   console.log("gi ne", genreList);

  // const genreFilter = () => {
  //   const result = [];
  //   for (const genreId of genre_ids) {
  //     const element = genreList.find((i) => i.id === genreId);
  //     if (element) {
  //       result.push({ name: element.name, id: element.id });
  //     }
  //   }
  //   return result;
  // };

  const handleMouseEnter = () => {
    SetIsHover(true);
  };
  const handleMouseLeave = () => {
    SetIsHover(false);
  };

  const ratingfixed = vote_average / 2;

  const boxStyle = {
    scale: isHover ? "1" : null,
    boxShadow: isHover ? "0px 10px 20px 2px rgba(0, 200, 255, 0.7)" : null,
    transform: isHover ? "translateY(-5px)" : null,
  };

  const onHoverDisplaying: CSS.Properties = {
    // display: isHover ? "block" : null,
    position: "absolute",
    top: "0",
    borderRadius: "15px",
    width: "100%",
    height: "270px",
    color: "white",
  };
  // const genreNames = genreFilter();

  return (
    <>
      <Link to={`/movies/${id}`}>
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="movie-card"
          // style={boxStyle}
        >
          <img
            //   style={{ opacity: isHover ? "0.5" : null }}
            src={APIConfig.w500Image(poster_path)}
            alt=""
          />

          <div
            className="hide"
            //   style={onHoverDisplaying}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
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

            {/* <div className="genre">
              {genreNames.map((i) => {
                return (
                  <ButtonContainer
                    variant="contained"
                    size="small"
                    style={{
                      maxWidth: "30px",
                      fontSize: "12px",
                      maxHeight: "30px",
                      minWidth: "30px",
                      minHeight: "30px",
                    }}
                    genre={i}
                  />
                );
              })}
            </div> */}

            <div className="content-btn-hide">
              <Link to={`/movies/${id}`}>
                {" "}
                <Button
                  style={{ borderRadius: "5px", padding: "5%" }}
                  variant="contained"
                  size="medium"
                  className="play-btn-content-btn-hide"
                >
                  WATCH NOW
                </Button>
              </Link>
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
      </Link>{" "}
    </>
  );
};

export default CardContainer;
