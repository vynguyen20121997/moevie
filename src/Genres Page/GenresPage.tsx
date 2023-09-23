import React, { useEffect, useState } from "react";
import "./genresStyle.css";
import {
  APIConfig,
  MoviebyOptions,
  MoviesEndPoints,
} from "../Compoment/API/APIConfig";
import SliderContainer from "../Compoment/SmallCompoment/SliderContainer";
import { OnFetchAxios } from "../Compoment/API/OnfetchAxios";
import { urlCreatingGenreAPI } from "../Compoment/API/APIServies";

interface genreHookObject {
  url: string;
  key: string;
}
const GenresPage = () => {
  const result: genreHookObject[] | null = urlCreatingGenreAPI();

  const actionMovie = result?.find((item) => item.key === "action");
  const { data: action, isLoading: actionLoading } = OnFetchAxios(
    actionMovie ?? {
      url: "",
      key: "",
    }
  );
  const actionData = action?.data?.results;

  const adventureMovie = result?.find((item) => item.key === "adventure");
  const { data: adventure, isLoading: adventureLoading } = OnFetchAxios(
    adventureMovie ?? {
      url: "",
      key: "",
    }
  );
  const adventurenData = adventure?.data?.results;

  const animationMovie = result?.find((item) => item.key === "animation");
  const { data: animation, isLoading: animationLoading } = OnFetchAxios(
    animationMovie ?? {
      url: "",
      key: "",
    }
  );
  const animationData = animation?.data?.results;

  const crimeMovie = result?.find((item) => item.key === "crime");
  const { data: crime, isLoading: crimeLoading } = OnFetchAxios(
    crimeMovie ?? {
      url: "",
      key: "",
    }
  );
  const crimeData = crime?.data?.results;

  const horrorMovie = result?.find((item) => item.key === "horror");
  const { data: horror, isLoading: horrorLoading } = OnFetchAxios(
    horrorMovie ?? {
      url: "",
      key: "",
    }
  );
  const horrorData = horror?.data?.results;

  //       const { data: comedy } = OnfetchGenresHook(35);
  //       const { data: documentary } = OnfetchGenresHook(99);
  //       const { data: drama } = OnfetchGenresHook(18);
  //       const { data: family } = OnfetchGenresHook(10402);
  //       const { data: fantasy } = OnfetchGenresHook(36);
  //       const { data: horror } = OnfetchGenresHook(27);
  //       const { data: history } = OnfetchGenresHook(36);
  //       const { data: romance } = OnfetchGenresHook(10749);

  //       // const hehe = () => {
  //       //   const dataMoviebyGenre = genres.map((i) => {
  //       //   const { data } = OnfetchGenresHook(i.id);})

  return (
    <div
      style={{
        width: "100%",
        paddingTop: "4%",
      }}
    >
      <div className="genresSlider" style={{ marginTop: "1%" }}>
        <SliderContainer items={actionData} movieCategoryTitle="Action" />
      </div>

      <div className="genresSlider">
        <SliderContainer
          items={adventurenData}
          movieCategoryTitle="Adventure"
        />
      </div>
      <div className="genresSlider">
        <SliderContainer items={animationData} movieCategoryTitle="Animation" />
      </div>
      <div className="genresSlider">
        <SliderContainer items={crimeData} movieCategoryTitle="Crime" />
      </div>
      <div className="genresSlider">
        <SliderContainer items={horrorData} movieCategoryTitle="Horror" />
      </div>
    </div>
  );
};

export default GenresPage;
