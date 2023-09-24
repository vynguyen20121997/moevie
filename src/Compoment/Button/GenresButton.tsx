import React, { useState, useEffect } from "react";
// import { OnfetchGenresList } from '../API/OnfetchGenresList'
import { APIConfig } from "../API/APIConfig";
import { Button, ButtonPropsVariantOverrides } from "@mui/material";
import { Link } from "react-router-dom";
import useGenreList from "../Data-Hooks/GenresListHooks";

export const GenresButton = () => {
  interface genreObject {
    id: number;
    name: string;
  }
  const { data: genreList } = useGenreList();
  const genreListData: genreObject[] = genreList?.data?.genres;

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

interface genreObject {
  id: number;
  name: string;
}
interface ButtonPropType {
  genre: genreObject;
  variant?: "text" | "contained" | "outlined";
  size?: string;
  stylebutton?: {
    maxWidth?: string;
    fontSize?: string;
    minWidth?: string;
    maxHeight?: string;
    minHeight?: string;
    marginLeft?: string;
  };
}

export const ButtonContainer: React.FC<ButtonPropType> = (props) => {
  const { genre, variant, size, stylebutton } = props;
  const { name, id: genreId } = genre;
  return (
    <>
      <Link to={`/genres/${genreId}`}>
        <Button
          variant={variant}
          style={stylebutton}
          // sx={size}
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
          <p>{name}</p>
        </Button>
      </Link>
    </>
  );
};
