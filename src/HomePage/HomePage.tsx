import React from "react";
// import HeroSlider from "../Compoment/SmallCompoment/HeroSlider";
import {
  APIConfig,
  MoviebyOptions,
  MoviesEndPoints,
} from "../Compoment/API/APIConfig";
import { OnFetchAxios } from "../Compoment/API/OnfetchAxios";
// import { APIConfig } from "../Compoment/API/APIConfig";
// import { tmdbAPI } from "../Compoment/API/tmdbAPI";
// import { OnFetchAxios } from "../Compoment/API/OnfetchAxios";
// import { ontionalPageFilter } from "../Compoment/API/tmdbAPI";
// import { MovieSlider } from "../Compoment/SmallCompoment/SliderContainer";
import Test from "../Test/test";

const HomePage = () => {
  //   const { data: popularMovies } = OnFetchAxios(
  //     tmdbAPI.getMoviesList("popular"),
  //     ontionalPageFilter,
  //     "popular"
  //   );
  const url =
    MoviesEndPoints.popular + APIConfig.apiKey + MoviebyOptions.byPageNumber;
  const fetchOptions = {
    url,
    key: "heroSliderMovieHooks",
  };
  const { data, isLoading } = OnFetchAxios(fetchOptions);
  const ketqua = data?.data?.results;
  //   const { data: nowPlayingMovies } = OnFetchAxios(
  //     tmdbAPI.getMoviesList("now_playing"),
  //     ontionalPageFilter,
  //     "nowplaying"
  //   );
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

  console.log("gif day", ketqua);
  return (
    <>
      {/* <div style={{ boxShadow: " grey 0px 1px 50px -10px" }}>
        <HeroSlider items={ketqua} />
      </div> */}
      <div>
        <Test items={ketqua} />
      </div>
      {/* <div style={{ margin: "1%", marginTop: "2%" }}>
       <div style={{ margin: "1%" }}>
          <MovieSlider movies={popularMovies} movieCategoryTitle="POPULAR " />
        </div>

         <div style={{ margin: "1%" }}>
         <MovieSlider  */}
      {/* //             movies={nowPlayingMovies}
//             movieCategoryTitle="Now playing "
//           /> */}
      {/* //         </div> */}
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
