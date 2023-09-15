import React,{ useState, useEffect } from 'react'
import { APIConfig } from './APIConfig';

export const OnfetchGenresHook = (genresid) => {
    const [data, setData] = useState([])
    //   const [loading, setLoading] = useState(false)
    
      const OnFetchDataList = () => {
        const urlLink = `https://api.themoviedb.org/3/discover/movie?api_key=${APIConfig.apiKey}&with_genres=${genresid}`
        // setLoading(true);
        fetch(urlLink)
          .then((response) => response.json())
          .then((data) => {
            setData(data.results);
            // setLoading(false);
          })
      };
    
      useEffect(() => {
        OnFetchDataList();
      }, []);
    
      return {
        data,
        //  loading
        };
      
    };
