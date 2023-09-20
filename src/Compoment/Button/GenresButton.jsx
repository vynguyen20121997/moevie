import React, { useState, useEffect } from "react";
// import { OnfetchGenresList } from '../API/OnfetchGenresList'
import { APIConfig } from "../API/APIConfig";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import useGenreList from "../Data-Hooks/GenresListHooks";

export const GenresButton = (props) => {
  //   const { genre = [], color } = props;
  const { data: genreList } = useGenreList();
  const genreListData = genreList && genreList.data.genres;

  console.log("nut", genreListData);
  return (
    <>
      {genreListData &&
        genreListData.map((i) => {
          const styleObject = {
            maxWidth: "225px",
            fontSize: "16px",
            minWidth: "225px",
          };
          return (
            <div style={{ marginTop: "5%", display: "block" }}>
              <ButtonContainer
                stylebutton={styleObject}
                genre={i}
                variant="outlined"
                size="large"
              />
            </div>
          );
        })}
    </>
  );
};

export default GenresButton;

export const ButtonContainer = (props) => {
  const { genre, variant, size, stylebutton } = props;
  const { name, id: genreId } = genre;
  return (
    <>
      <Link to={`/genres/${genreId}`}>
        <Button
          style={stylebutton}
          sx={size}
          variant={variant}
          color={
            name === "Action"
              ? "primary"
              : name === "Horror"
              ? "error"
              : name === "Adventure"
              ? "success"
              : name === "Comedy"
              ? "warning"
              : name === "Animation"
              ? "warning"
              : name === "Crime"
              ? "secondary"
              : name === "Drama"
              ? "success"
              : name === "Family"
              ? "secondary"
              : name === "Fantasy"
              ? "primary"
              : name === "History"
              ? "warning"
              : name === "Horror"
              ? "info"
              : name === "Music"
              ? "warning"
              : name === "Mystery"
              ? "warning"
              : name === "Romance"
              ? "warning"
              : name === "Science Fiction"
              ? "error"
              : name === "TV Movie"
              ? "warning"
              : name === "Thriller"
              ? "primary"
              : name === "War"
              ? "primary"
              : name === "Western"
              ? "warning"
              : "primary"
          }
        >
          {" "}
          <p>{name}</p>{" "}
        </Button>
      </Link>
    </>
  );
};
