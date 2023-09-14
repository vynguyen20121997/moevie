import React, { useState, useEffect } from 'react'
// import { OnfetchGenresList } from '../API/OnfetchGenresList'
import { APIConfig } from '../API/APIConfig'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

export const GenresButton = (props) => {
  const { genre = [], color } = props;
  const [genres, setGenres] = useState([])

  const OnFetchDataList = () => {
    const urlLink = `https://api.themoviedb.org/3/genre/movie/list?api_key=${APIConfig.apiKey}`
    // const urlLink = `${url}?api_key=${APIConfig.apiKey}`
    fetch(urlLink)
      .then((response) => response.json())
      .then((data) => {
        setGenres(data);
      })
  };

  useEffect(() => {
    OnFetchDataList();
  }, []);


  return (
    <>
      {genres?.genres?.map((i) => (

        <div style={{ marginTop: '5%' }} >   
        <ButtonContainer
          genre={i} variant="outlined" size="large"/>
        </div>
      ))}
    </>)
}

export default GenresButton;


export const ButtonContainer = (props) => {
  const { genre,variant, size, stylebutton } = props;
  const { name, id : genreId } = genre;
  return (
    <>
      <Link to={`/genres/${genreId}`}>
        <Button sx={size} 
         variant={variant} color={
            name === "Action" ? "primary"
              : name === "Horror" ? "error"
                : name === "Adventure" ? "success"
                  : name === "Comedy" ? "warning"
                    : name === "Animation" ? "warning"
                      : name === "Crime" ? "secondary"
                        : name === "Drama" ? "success"
                          : name === "Family" ? "secondary"
                            : name === "Fantasy" ? "primary"
                              : name === "History" ? "warning"
                                : name === "Horror" ? "info"
                                  : name === "Music" ? "warning"
                                    : name === "Mystery" ? "warning"
                                      : name === "Romance" ? "warning"
                                        : name === "Science Fiction" ? "error"
                                          : name === "TV Movie" ? "warning"
                                            : name === "Thriller" ? "primary"
                                              : name === "War" ? "primary"
                                                : name === "Western" ? "warning"
                                                  : "primary" }> <p >{name}</p> </Button>
        </Link>

    </>)
}
