import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { OnfetchGenresHook } from '../Compoment/API/OnfetchMoviebyGenresHook'
import CardContainer from '../HomePage/BodyCompoment/SliderContainer'

const GenresPageDetail = (props) => {
  const params = useParams()
  const { data } = OnfetchGenresHook(params.genreId);
  console.log("gi day ne", data)
  return (
    <div>
      <div>
        <div style={{ paddingTop:'5%', paddingLeft:'10%'}}> <h1 style={{color:'white'}} >ACTION</h1></div>
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