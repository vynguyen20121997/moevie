import React from "react";
import HeroSlider from "../Compoment/SmallCompoment/HeroSlider";
import {
  APIConfig,
  MoviebyOptions,
  MoviesEndPoints,
} from "../Compoment/API/APIConfig";
import { OnFetchAxios, OnFetchGenreList } from "../Compoment/API/OnfetchAxios";
import SliderContainer from "../Compoment/SmallCompoment/SliderContainer";
import "./TvPage.css";
import { genreDataType } from "../Compoment/Type/InterfaceType";
const TVShowPage = () => {
  const { data: genreListData } = OnFetchGenreList();
  const genreList: genreDataType[] = genreListData?.data.genres;
  const urlAiringToday = MoviesEndPoints.airingtoday + APIConfig.apiKey;
  const fetchOptions = {
    url: urlAiringToday,
    key: "airingtodayHooks",
  };
  const { data: airingtodayData, isLoading } = OnFetchAxios(fetchOptions);
  const ketqua = airingtodayData?.data?.results;

  const urlpopularTV =
    MoviesEndPoints.populartv + APIConfig.apiKey + MoviebyOptions.byPageNumber;
  const fetchPopularTV = {
    url: urlpopularTV,
    key: "popularTVHooks",
  };
  const { data: popularTVData, isLoading: popularLoading } =
    OnFetchAxios(fetchPopularTV);
  const popularTV = popularTVData?.data?.results;

  const urlontheairTV =
    MoviesEndPoints.ontheair + APIConfig.apiKey + MoviebyOptions.byPageNumber;
  const fetchtopontheairTV = {
    url: urlontheairTV,
    key: "ontheairHooks",
  };
  const { data: ontheairData, isLoading: ontheairLoading } =
    OnFetchAxios(fetchtopontheairTV);
  const ontheairTV = ontheairData?.data?.results;

  const urlTopRatedTV =
    MoviesEndPoints.topratedtv + APIConfig.apiKey + MoviebyOptions.byPageNumber;
  const fetchtopRatedTV = {
    url: urlTopRatedTV,
    key: "topRatedHooks",
  };
  const { data: topRatedData, isLoading: topRatedLoading } =
    OnFetchAxios(fetchtopRatedTV);
  const topRatedTV = topRatedData?.data?.results;

  const urlArivingToday = MoviesEndPoints.airingtoday + APIConfig.apiKey;
  const fetchArivingToday = {
    url: urlArivingToday,
    key: "arivingTodayHooks",
  };
  const { data: arivingTodayData, isLoading: arivingTodayLoading } =
    OnFetchAxios(fetchArivingToday);
  const arivingTodaytv = arivingTodayData?.data?.results;
  if (isLoading) return null;
  return (
    <>
      <div
        className="heroSlider"
        style={{ boxShadow: " grey 0px 1px 50px -10px", width: "100%" }}
      >
        <HeroSlider items={ketqua} loading={isLoading} genreData={genreList} />
      </div>

      <div className="movie-slider" id="popular-slider">
        <SliderContainer
          genreData={genreList}
          loading={popularLoading}
          items={popularTV}
          movieCategoryTitle="Popular Show"
        />
      </div>

      <div className="movie-slider">
        <SliderContainer
          genreData={genreList}
          loading={ontheairLoading}
          items={ontheairTV}
          movieCategoryTitle="On The Air"
        />
      </div>

      <div className="movie-slider">
        <SliderContainer
          genreData={genreList}
          loading={topRatedLoading}
          items={topRatedTV}
          movieCategoryTitle="Top Rated "
        />
      </div>

      <div className="movie-slider" style={{ margin: "1%" }}>
        <SliderContainer
          genreData={genreList}
          items={arivingTodaytv}
          loading={arivingTodayLoading}
          movieCategoryTitle="Ariving Today"
        />
      </div>
    </>
  );
};

export default TVShowPage;
