// import React, { useEffect, useState } from 'react'
// import "./GenresStyle.css"
// import { OnfetchGenresHook } from '../Compoment/API/OnfetchMoviebyGenresHook'
// import { APIConfig } from '../Compoment/API/APIConfig';
// import { MovieSlider } from '../HomePage/BodyCompoment/SliderContainer';

// const GenresPage = () => {
//       const { data: action } = OnfetchGenresHook(28);
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

//       // const [ genres, setGenres]= useState([])
//       // const fetchGenresList = () =>{
//       //   fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${APIConfig.apiKey}`)
//       //   .then((response)=> response.json())
//       //   .then((data)=> {setGenres(data)})
//       // }
//       // useEffect(()=>{
//       //   fetchGenresList();},
//       //   []);
//       // const hehe = () => {
//       //   const dataMoviebyGenre = genres.map((i) => {
//       //   const { data } = OnfetchGenresHook(i.id);})

//       // }

//       return (
//             <div style={{
//                   width: '100%',
//                   paddingTop: '4%',
//             }}>

//                   <div className='genresSlider' style={{ marginTop: '1%' }} >
//                         <MovieSlider
//                               movies={action}
//                               movieCategoryTitle="Action"
//                         />
//                   </div>
//                   <div className='genresSlider'  >

//                         <MovieSlider
//                               movies={adventure}
//                               movieCategoryTitle="Adventure"
//                         />
//                   </div>
//                   <div className='genresSlider'  >

//                         <MovieSlider
//                               movies={animation}
//                               movieCategoryTitle="Animation"
//                         />
//                   </div>
//                   <div className='genresSlider' >

//                         <MovieSlider
//                               movies={crime}
//                               movieCategoryTitle="Crime"
//                         />
//                   </div>
//                   <div className='genresSlider' >

//                         <MovieSlider
//                               movies={documentary}
//                               movieCategoryTitle="Documentary"
//                         />
//                   </div>
//                   <div className='genresSlider'>

//                         <MovieSlider
//                               movies={comedy}
//                               movieCategoryTitle="Comedy"
//                         />
//                   </div>
//                   <div className='genresSlider' >

//                         <MovieSlider
//                               movies={drama}
//                               movieCategoryTitle="Drama"
//                         />
//                   </div>
//                   <div className='genresSlider'>

//                         <MovieSlider
//                               movies={family}
//                               movieCategoryTitle="Family"
//                         />
//                   </div>
//                   <div className='genresSlider' >

//                         <MovieSlider
//                               movies={history}
//                               movieCategoryTitle="History"
//                         />
//                   </div>
//                   <div className='genresSlider'  >

//                         <MovieSlider
//                               movies={horror}
//                               movieCategoryTitle="Horror"
//                         />
//                   </div>
//                   <div className='genresSlider' >

//                         <MovieSlider
//                               movies={fantasy}
//                               movieCategoryTitle="Fantasy"
//                         />
//                   </div>
//                   <div className='genresSlider'>

//                         <MovieSlider
//                               movies={romance}
//                               movieCategoryTitle="Romance"
//                         />
//                   </div>

//             </div>
//       )
// }

// export default GenresPage
