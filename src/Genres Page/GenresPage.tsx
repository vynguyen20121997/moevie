import React, { useEffect, useState } from "react";
import "./GenresStyle.css";
import {
  APIConfig,
  MoviebyOptions,
  MoviesEndPoints,
} from "../Compoment/API/APIConfig";
import SliderContainer from "../Compoment/SmallCompoment/SliderContainer";
import { OnFetchAxios } from "../Compoment/API/OnfetchAxios";

const GenresPage = () => {
  const urlAction =
    MoviesEndPoints.discover + APIConfig.apiKey + MoviebyOptions.byGenreId(28);
  const fetchAction = {
    url: urlAction,
    key: "actionMoviesHooks",
  };
  const { data: action, isLoading: actionLoading } = OnFetchAxios(fetchAction);
  const actionData = action?.data?.results;

  //   const urladventure =
  //   MoviesEndPoints.discover + APIConfig.apiKey + MoviebyOptions.byGenreId(28);
  // const fetchAdventure = {
  //   url: urlAction,
  //   key: "actionMoviesHooks",
  // };
  // const { data: action, isLoading: actionLoading } = OnFetchAxios(fetchAction);
  // const actionData = action?.data?.results;

  //       const { data: adventure } = OnfetchGenresHook(12);
  //       const { data: animation } = OnfetchGenresHook(16);
  //       const { data: comedy } = OnfetchGenresHook(35);
  //       const { data: crime } = OnfetchGenresHook(80);
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
      {/* <div className='genresSlider'  >
                     <MovieSlider
                               movies={adventure} 
                               movieCategoryTitle="Adventure"
                         /> 
                </div>
                   <div className='genresSlider'  >

                    <MovieSlider
                                  movies={animation}
                                  movieCategoryTitle="Animation"
                            />
                       </div>
                       <div className='genresSlider' >

                             <MovieSlider
                                  movies={crime}
                                  movieCategoryTitle="Crime"
                            />
                      </div>
                      <div className='genresSlider' >

                            <MovieSlider
                                  movies={documentary}
                                  movieCategoryTitle="Documentary"
                            />
                      </div>
                      <div className='genresSlider'>

                            <MovieSlider
                                  movies={comedy}
                                  movieCategoryTitle="Comedy"
                            />
                      </div>
                      <div className='genresSlider' >

                            <MovieSlider
                                  movies={drama}
                                  movieCategoryTitle="Drama"
                            />
                      </div>
                      <div className='genresSlider'>

                            <MovieSlider
                                  movies={family}
                                  movieCategoryTitle="Family"
                            />
                      </div>
                      <div className='genresSlider' >

                            <MovieSlider
                                  movies={history}
                                  movieCategoryTitle="History"
                            />
                      </div>
                      <div className='genresSlider'  >

                            <MovieSlider
                                  movies={horror}
                                  movieCategoryTitle="Horror"
                            />
                      </div>
                      <div className='genresSlider' >

                            <MovieSlider
                                  movies={fantasy}
                                  movieCategoryTitle="Fantasy"
                            />
                      </div>
                      <div className='genresSlider'>

                            <MovieSlider
                                  movies={romance}
                                  movieCategoryTitle="Romance"
                            />
                      </div> */}
    </div>
  );
};

export default GenresPage;
