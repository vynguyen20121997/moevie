import React from "react";
import HeroSlider from "../Compoment/SmallCompoment/HeroSlider";
import {
  APIConfig,
  MoviebyOptions,
  MoviesEndPoints,
} from "../Compoment/API/APIConfig";
import { OnFetchAxios } from "../Compoment/API/OnfetchAxios";
import SliderContainer from "../Compoment/SmallCompoment/SliderContainer";
// import Test from "../Test/test";

const HomePage = () => {
  const urlHeroSlider =
    MoviesEndPoints.popular + APIConfig.apiKey + MoviebyOptions.byPageNumber;
  const fetchOptions = {
    url: urlHeroSlider,
    key: "heroSliderMovieHooks",
  };
  const { data: heroSliderData, isLoading } = OnFetchAxios(fetchOptions);
  const ketqua = heroSliderData?.data?.results;

  const urlpopularMovies =
    MoviesEndPoints.popular + APIConfig.apiKey + MoviebyOptions.byPageNumber;
  const fetchPopularMovies = {
    url: urlpopularMovies,
    key: "popularMoviesHooks",
  };
  const { data: popularMoviesrData, isLoading: popularLoading } =
    OnFetchAxios(fetchPopularMovies);
  const popularData = popularMoviesrData?.data?.results;

  
  const urltopRatedMovies =
    MoviesEndPoints.topRated + APIConfig.apiKey + MoviebyOptions.byPageNumber;
  const fetchtopRatedMovies = {
    url: urltopRatedMovies,
    key: "topRatedMoviesHooks",
  };
  const { data: topRatedMoviesrData, isLoading: topRatedLoading } =
    OnFetchAxios(fetchtopRatedMovies);
  const topRatedData = popularMoviesrData?.data?.results;
  //   const { data: topRatedMovies } = OnFetchAxios(
  //     tmdbAPI.getMoviesList("top_rated"),
  //     ontionalPageFilter,
  //     "top_rated"
  //   );
  //   const { data: UpComingMovies } = OnFetchAxios(
  //     tmdbAPI.getMoviesList("upcoming"),
  //     ontionalPageFilter,
  //     "upcoming"
  //   );

  if (isLoading) return null;
  return (
    <>
      <div style={{ boxShadow: " grey 0px 1px 50px -10px", width: "100%" }}>
        <HeroSlider items={ketqua} />
      </div>
      <div
      // style={{ margin: "1%", marginTop: "2%" }}
      >
        <div style={{ margin: "1%" }}>
          <SliderContainer items={popularData} movieCategoryTitle="Popular" />
        </div>
      </div>
      <div style={{ margin: "1%" }}>
        <SliderContainer
          items={topRatedData}
          movieCategoryTitle="Now playing "
        />
      </div>
      {/* //         <div style={{ margin: "1%" }}>
//           <MovieSlider movies={topRatedMovies} movieCategoryTitle="Top Rated" />
//         </div>

//         <div style={{ margin: "1%" }}>
//           <MovieSlider movies={UpComingMovies} movieCategoryTitle="Upcoming " />
//         </div>
//       </div>
    </> */}{" "}
    </>
  );
};

export default HomePage;
