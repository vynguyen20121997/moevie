// import React, { useState, useEffect } from 'react'
// import { APIConfig } from './APIConfig';

// export const OnfetchGenresList = () => {
//     const [list, setList] = useState([])
//     //   const [loading, setLoading] = useState(false)
    
//       const OnFetchDataList = () => {
//         const urlLink = `https://api.themoviedb.org/3/genre/movie/list?api_key=${APIConfig.apiKey}`
//         // const urlLink = `${url}?api_key=${APIConfig.apiKey}`
//         // setLoading(true);
//         fetch(urlLink)
//           .then((response) => response.json())
//           .then((data) => {
//             setList(data);
//             // setLoading(false);
//           })
//       };
    
//       useEffect(() => {
//         OnFetchDataList();
//       }, []);
    
//       return {
//         list,
//         //  loading
//         };
      
//     };
