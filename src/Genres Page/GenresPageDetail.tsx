import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import {
  APIConfig,
  MoviebyOptions,
  MoviesEndPoints,
} from "../Compoment/API/APIConfig";
import { newGenreArrayAPI } from "../Compoment/API/APIServies";

const GenresPageDetail = () => {
  const params: { genreId: string } = useParams() as { genreId: string };
  const idGenre = params.genreId;
  const idGenreNumber = parseInt(idGenre);
  const newUrl =
    MoviesEndPoints.discover +
    APIConfig.apiKey +
    MoviebyOptions.byGenreId(idGenreNumber);

  // const nameGenre = genreList && genreList.find((i) => i.id == idGenre);

  // console.log("gi day", nameGenre);
  return (
    <div>
      <div>
        <div style={{ paddingTop: "5%", paddingLeft: "10%" }}>
          {/* <h1 style={{ color: "white" }}>{nameGenre && nameGenre.name}</h1> */}
        </div>
        <div
          className="moviecard"
          style={{
            paddingLeft: "10%",
            display: "grid",
            gridTemplateColumns: " auto auto auto auto auto",
          }}
        >
          {/* {data.map((i) => {
            return <CardContainer movieDetail={i} />;
          })} */}
        </div>
      </div>
    </div>
  );
};

export default GenresPageDetail;
