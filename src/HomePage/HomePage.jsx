import React from "react";
import HeroSlider from "../Compoment/SmallCompoment/HeroSlider";
import { APIConfig } from "../Compoment/API/APIConfig";
import { tmdbAPI } from "../Compoment/API/tmdbAPI";
import { OnFetchAxios } from "../Compoment/API/OnfetchAxios";
import { ontionalPageFilter } from "../Compoment/API/tmdbAPI";
import { MovieSlider } from "../Compoment/SmallCompoment/SliderContainer";

const HomePage = () => {
  const { data: popularMovies } = OnFetchAxios(
    tmdbAPI.getMoviesList("popular"),
    ontionalPageFilter,
    "popular"
  );

  const { data: nowPlayingMovies } = OnFetchAxios(
    tmdbAPI.getMoviesList("now_playing"),
    ontionalPageFilter,
    "nowplaying"
  );
  const { data: topRatedMovies } = OnFetchAxios(
    tmdbAPI.getMoviesList("top_rated"),
    ontionalPageFilter,
    "top_rated"
  );
  const { data: UpComingMovies } = OnFetchAxios(
    tmdbAPI.getMoviesList("upcoming"),
    ontionalPageFilter,
    "upcoming"
  );
  console.log("topRatedMovies", topRatedMovies);

  return (
    <>
      <div style={{ boxShadow: " grey 0px 1px 50px -10px" }}>
        <HeroSlider />
      </div>

      <div style={{ margin: "1%", marginTop: "2%" }}>
        <div style={{ margin: "1%" }}>
          <MovieSlider movies={popularMovies} movieCategoryTitle="POPULAR " />
        </div>

        <div style={{ margin: "1%" }}>
          <MovieSlider
            movies={nowPlayingMovies}
            movieCategoryTitle="Now playing "
          />
        </div>

        <div style={{ margin: "1%" }}>
          <MovieSlider movies={topRatedMovies} movieCategoryTitle="Top Rated" />
        </div>

        <div style={{ margin: "1%" }}>
          <MovieSlider movies={UpComingMovies} movieCategoryTitle="Upcoming " />
        </div>
      </div>
    </>
  );
};

export default HomePage;
