import React from "react";
import HeroSlider from "./BodyCompoment/HeroSlider";
import { OnfetchFunction } from "../Compoment/API/OnfetchMovieHook";
import { MovieSlider } from "./BodyCompoment/SliderContainer";
const Body = () => {
  const { data: popularMovies } = OnfetchFunction("popular");
  const { data: nowPlayingMovies } = OnfetchFunction("now_playing");
  const { data: topRatedMovies } = OnfetchFunction("top_rated");
  const { data: UpComingMovies } = OnfetchFunction("upcoming");

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

export default Body;
