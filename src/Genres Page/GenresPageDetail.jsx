// import React, { useEffect, useState, useRef } from 'react'
// import { useParams } from 'react-router-dom'
// import { OnfetchGenresHook } from '../Compoment/API/OnfetchMoviebyGenresHook'
// import CardContainer from '../HomePage/BodyCompoment/SliderContainer'
// import { APIConfig } from '../Compoment/API/APIConfig'
// const GenresPageDetail = (props) => {
//   const params = useParams()
//   const { data } = OnfetchGenresHook(params.genreId);
//   const idGenre = params.genreId;
//   const [genreList, setGenreList] = useState([])

//   const OnFetchGenreist = () => {
//     const urlLink = `https://api.themoviedb.org/3/genre/movie/list?api_key=${APIConfig.apiKey}`

//     fetch(urlLink)
//       .then((response) => response.json())
//       .then((data) => {
//         setGenreList(data.genres);

//       })
//   };

//   useEffect(() => {
//     OnFetchGenreist();  }, []);
//     const nameGenre = genreList&&genreList.find((i) => i.id == idGenre);

//   console.log('gi day', nameGenre)

//   return (
//     <div>
//       <div>
//         <div style={{ paddingTop:'5%', paddingLeft:'10%'}}>
//         <h1 style={{color:'white'}} >
//          {nameGenre&&nameGenre.name}
//           </h1>
//        </div>
//         <div className="moviecard"
//           style={{
//             paddingLeft: '10%',
//             display: 'grid',
//             gridTemplateColumns: ' auto auto auto auto auto',
//           }}>

//           {data.map((i) => {
//             return <CardContainer movieDetail={i} />
//           })}
//         </div>
//         </div>
//     </div>
//   )
// }

// export default GenresPageDetail
