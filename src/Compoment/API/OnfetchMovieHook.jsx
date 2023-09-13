import React, { useState, useEffect } from 'react'
import { APIConfig } from './APIConfig';
/**
 * Custom hook
 * @param {movieType} movieType
 * @desc movieType is one of "popular" | "upcoming" | "top_rated"
 */
export const OnfetchFunction = (movieType) => {
  const [data, setData] = useState([])
//   const [loading, setLoading] = useState(false)

  const OnFetchDataList = () => {
    const urlLink = `https://api.themoviedb.org/3/movie/${movieType}?api_key=${APIConfig.apiKey}`
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

