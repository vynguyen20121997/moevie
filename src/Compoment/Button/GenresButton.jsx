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

        <div style={{ marginTop: '5%' }} >   <ButtonContainer
          color={
            i.name === "Action" ? "primary"
              : i.name === "Horror" ? "error"
                : i.name === "Adventure" ? "success"
                  : i.name === "Comedy" ? "warning"
                    : i.name === "Animation" ? "warning"
                      : i.name === "Crime" ? "secondary"
                        : i.name === "Drama" ? "success"
                          : i.name === "Family" ? "secondary"
                            : i.name === "Fantasy" ? "primary"
                              : i.name === "History" ? "warning"
                                : i.name === "Horror" ? "info"
                                  : i.name === "Music" ? "warning"
                                    : i.name === "Mystery" ? "warning"
                                      : i.name === "Romance" ? "warning"
                                        : i.name === "Science Fiction" ? "error"
                                          : i.name === "TV Movie" ? "warning"
                                            : i.name === "Thriller" ? "primary"
                                              : i.name === "War" ? "primary"
                                                : i.name === "Western" ? "warning"
                                                  : "primary"}  genre={i} />
        </div>
      ))}
    </>)
}

export default GenresButton;


export const ButtonContainer = (props) => {
  const { genre, color } = props;
  const { name, id : genreId } = genre;
  return (
    <>
      <Link to={`/genres/${genreId}`}>
        <Button variant="outlined" color={color}> {name}</Button>
        </Link>

    </>)
}
