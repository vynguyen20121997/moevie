import React from "react";
import HeroSlider from "../Compoment/SmallCompoment/HeroSlider";
import {
  APIConfig,
  MoviebyOptions,
  MoviesEndPoints,
} from "../Compoment/API/APIConfig";
import { OnFetchAxios } from "../Compoment/API/OnfetchAxios";
import SliderContainer from "../Compoment/SmallCompoment/SliderContainer";
import "./TvPage.css";
const TVShowPage = () => {
  const urlAiringToday = MoviesEndPoints.airingtoday + APIConfig.apiKey;
  const fetchOptions = {
    url: urlAiringToday,
    key: "airingtodayHooks",
  };
  const { data: airingtodayData, isLoading } = OnFetchAxios(fetchOptions);
  const ketqua = airingtodayData?.data?.results;

  const urlpopularMovies =
    MoviesEndPoints.popular + APIConfig.apiKey + MoviebyOptions.byPageNumber;
  const fetchPopularMovies = {
    url: urlpopularMovies,
    key: "popularMoviesHooks",
  };
  const { data: popularMoviesrData, isLoading: popularLoading } =
    OnFetchAxios(fetchPopularMovies);
  const popularData = popularMoviesrData?.data?.results;

  const urlontheair =
    MoviesEndPoints.topRated + APIConfig.apiKey + MoviebyOptions.byPageNumber;
  const fetchtopontheair = {
    url: urlontheair,
    key: "ontheairHooks",
  };
  const { data: ontheairData, isLoading: ontheairLoading } =
    OnFetchAxios(fetchtopontheair);
  const ontheair = ontheairData?.data?.results;

  const urlUpcomingMovies =
    MoviesEndPoints.upcoming + APIConfig.apiKey + MoviebyOptions.byPageNumber;
  const fetchUpcomingMovies = {
    url: urlUpcomingMovies,
    key: "UpcomingMoviesHooks",
  };
  const { data: UpcomingMoviesrData, isLoading: UpcomingLoading } =
    OnFetchAxios(fetchUpcomingMovies);
  const UpcomingData = UpcomingMoviesrData?.data?.results;

  const urlNowPlaying =
    MoviesEndPoints.nowPlaying + APIConfig.apiKey + MoviebyOptions.byPageNumber;
  const fetchNowPlayingMovies = {
    url: urlNowPlaying,
    key: "NowPlayingMoviesHooks",
  };
  const { data: nowPlayingMoviesrData, isLoading: nowPlayingLoading } =
    OnFetchAxios(fetchNowPlayingMovies);
  const nowPlayingData = nowPlayingMoviesrData?.data?.results;
  if (isLoading) return null;
  // if (popularLoading) return null;
  // if (topRatedLoading) return null;
  // if (UpcomingLoading) return null;
  // if (nowPlayingLoading) return null;

  return (
    <>
      <div
        className="heroSlider"
        style={{ boxShadow: " grey 0px 1px 50px -10px", width: "100%" }}
      >
        <HeroSlider items={ketqua} loading={isLoading} />
      </div>

      <div className="movie-slider" id="popular-slider">
        <SliderContainer
          loading={popularLoading}
          items={popularData}
          movieCategoryTitle="Popular"
        />
      </div>

      <div className="movie-slider">
        <SliderContainer
          loading={ontheairLoading}
          items={ontheair}
          movieCategoryTitle="On The Air"
        />
      </div>

      <div className="movie-slider">
        <SliderContainer
          loading={UpcomingLoading}
          items={UpcomingData}
          movieCategoryTitle="Upcoming "
        />
      </div>

      <div className="movie-slider" style={{ margin: "1%" }}>
        <SliderContainer
          items={nowPlayingData}
          loading={nowPlayingLoading}
          movieCategoryTitle="Now Playing"
        />
      </div>
    </>
  );
};

export default TVShowPage;
