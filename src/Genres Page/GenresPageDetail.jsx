import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { OnfetchGenresHook } from '../Compoment/API/OnfetchMoviebyGenresHook'
import CardContainer from '../HomePage/BodyCompoment/SliderContainer'
import { APIConfig } from '../Compoment/API/APIConfig'
const GenresPageDetail = (props) => {
  const params = useParams()
  const { data } = OnfetchGenresHook(params.genreId);
  const idGenre = params.genreId;
  const [genreList, setGenreList] = useState([])
  const [genreNames, setGenreNames] = useState([]);

  const OnFetchGenreist = () => {
    const urlLink = `https://api.themoviedb.org/3/genre/movie/list?api_key=${APIConfig.apiKey}`

    fetch(urlLink)
      .then((response) => response.json())
      .then((data) => {
        setGenreList(data.genres);

      })
  };

  const genreFilter = (idGenre, genreList) => {
    const result = []
    for (const genre of genreList) {
      if (genre.id == idGenre) {
        result.push({ name: genre.name, id: genre.id });
      }
    }

    return result;
  };
  useEffect(() => {
    OnFetchGenreist();
    setGenreNames(genreFilter(idGenre, genreList));
  }, [idGenre, genreList]);

  return (
    <div>
      <div>
        <div style={{ paddingTop:'5%', paddingLeft:'10%'}}> <h1 style={{color:'white'}} >{genreNames.name}</h1></div>
        <div className="moviecard"
          style={{
            paddingLeft: '10%',
            display: 'grid',
            gridTemplateColumns: ' auto auto auto auto auto',
          }}>

          {data.map((i) => {
            return <CardContainer movieDetail={i} />
          })}
        </div>
        </div>
    </div>
  )
}

export default GenresPageDetail