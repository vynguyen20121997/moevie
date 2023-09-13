import React, { useEffect, useState } from 'react'
import { Button } from '@mui/material'
import { Params, useParams, useNavigate } from 'react-router-dom'
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import { APIConfig } from '../Compoment/API/APIConfig';
import Fab from '@mui/material/Fab';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import "./style3.css";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
// import { OnfetchDataById } from '../Compoment/API/OnfetchDataById';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { OnFetchVideo } from '../Compoment/API/Onfetchvideo';
import CardMedia from '@mui/material/CardMedia';
const MovieDetailPage = () => {
  const [open, setOpen] = React.useState(false);
  const params = useParams()
  // const navigate = useNavigate();
  const {data:video} = OnFetchVideo(params.movieId);
  const [data, setData] = useState([])
  const OnFetchmovieDetails = (movieId) => {
    const urlLink = `https://api.themoviedb.org/3/movie/${params.movieId}?api_key=${APIConfig.apiKey}`;
    fetch(urlLink)
      .then((response) => response.json())
      .then((e) => {
        setData(e);
      })
  };
  useEffect(() => { OnFetchmovieDetails(); OnFetchDataList(); }, []);
  const [credit, setCredit] = useState([]);
  const OnFetchDataList = () => {
    const urlLink = `https://api.themoviedb.org/3/movie/${params.movieId}/credits?api_key=${APIConfig.apiKey}`
    fetch(urlLink)
      .then((response) => response.json())
      .then((data) => {
        setCredit(data.cast);
      })
  };
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { overview, release_date, vote_count, vote_average, poster_path, original_title,
    imdb_id, original_language, name, backdrop_path, runtime } = data;
  const genresList = data.genres;
  const countryList = data.production_countries;
  const imgUrl = APIConfig.w500Image(poster_path);
  const backgroundUrl = APIConfig.originalImage(backdrop_path);

// const videoNe = video[0];
// console.log('heheh',videoNe )
//   const urlVideo = `https://www.youtube.com/embed/${video[0].key}`


  return (<>
  <Typography>
    <div className="detailpage-body"
      style={{
        backgroundImage: `linear-gradient(to bottom,
           rgba(0, 0, 0, 0.1), 
           rgba(0, 0, 0, 10)), url(${backgroundUrl})`,
      }}>

      <div className="detail-page">

        <div className="leftside-detail-page">
          <div>
            <img
              src={imgUrl} alt={imdb_id} /></div>
          <div className='left-detail' >
            <h4>{vote_average}
              <span> rattings

              </span>
            </h4>
            <h4>{vote_count}
              <span > reviews

              </span>
            </h4>
          </div>
        </div>

        <div className="middleside-detail-page">
          <h1 id='title'>{original_title}</h1>
          <h4 id='release-date' >Release Date: {release_date}</h4>
          <div className='buttongroup'>
            <Button id='watch-button' variant="contained" onClick={handleOpen} >
              WATCH TRAILER <PlayArrowOutlinedIcon />
            </Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 800,
                height:500,
                bgcolor: 'background.paper',
                border: '2px solid #000',
                boxShadow: 24,
               
              }}>
              <CardMedia 
              width= "100%"
              height="100%"
          component="iframe"
            // src={urlVideo}
           AutoPlay
        />
              </Box>
            </Modal>

            <Fab id='other-button' variant="contained">
              <BookmarkBorderOutlinedIcon />
            </Fab>
            <Fab id='other-button' variant="contained">
              <ShareOutlinedIcon />
            </Fab>
          </div>
          <h4 >{overview}</h4>

          <div className="moviedetail-table">
            <h1>Details</h1>
            <div >
              <TableContainer >
                <Table sx={{ minWidth: '50%', maxWidth: '60%', }}>
                  <TableBody  >
                    <TableRow >
                      <TableCell style={{ color: 'white' }} ><strong>Genres</strong></TableCell>
                      {genresList && genresList.map((i) =>
                        <TableCell style={{ color: 'white' }} align="right">
                          <Button variant="outlined">{i.name}</Button>
                        </TableCell>)}
                    </TableRow>
                    <TableRow >
                      <TableCell style={{ color: 'white' }}><strong>Country of Origin</strong></TableCell>
                      {countryList && countryList.map((i) =>
                        <TableCell style={{ color: 'white' }} align="right">{i.name}</TableCell>)}
                    </TableRow>

                    <TableRow sx={{
                      borderBottom: "none", [`& .${tableCellClasses.root}`]: {
                        borderBottom: "none"
                      }
                    }} >
                      <TableCell style={{ color: 'white' }}><strong>Runtime</strong></TableCell>
                      <TableCell style={{ color: 'white' }} align="right">{runtime}</TableCell>
                    </TableRow>

                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>
       
            
        </div>


        <div className="right-detail-page" >
          <h2>CAST & CREW</h2>
          <div className='cast-list'   >
            {credit && credit.map((i) => {
              return <div className='cast-block' >
                <div className='img-cast-block' >
                  <img src={APIConfig.w200Image(i.profile_path)} alt="" />
                </div>

                <div className='detail-cast-block'>
                  <h3 > {i.name} </h3>
                  <h4>As: {i.character}</h4>
                </div>

              </div>
            })}
          </div>

        </div>


      </div>
    </div>
    </Typography>
  </>)
}

export default MovieDetailPage