import { useEffect, useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { APIConfig } from "../API/APIConfig";
import { Button } from "@mui/material";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import "./style2.css";
import Rating from "@mui/material/Rating";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  overview: string;
}
interface MovieSliderProps {
  movies?: Movie[];
  movieCategoryTitle: string;
}
export const MovieSlider: React.FC<MovieSliderProps> = (props) => {
  const { movies = [], movieCategoryTitle } = props;
  const [isHover, SetIsHover] = useState(false);
  const handleMouseEnter = () => {
    SetIsHover(true);
  };
  const handleMouseLeave = () => {
    SetIsHover(false);
  };
  const boxStyle = {
    scale: isHover ? "1" : null,
    boxShadow: isHover ? "0px 10px 20px 2px rgba(0, 200, 255, 0.7)" : null,
    transform: isHover ? "translateY(-5px)" : null,
  };

  const onHoverDisplaying = {
    display: isHover ? "block" : null,
    position: "absolute",
    top: "0",
    borderRadius: "15px",
    width: "100%",
    height: "270px",
    color: "white",
  };

  return (
    <>
      <div className="button1">
        <div className="left">
          <Button
            variant="outlined"
            sx={{
              borderBottomLeftRadius: "15px",
              borderTopLeftRadius: "15px",
              margin: "0",
            }}
          >
            <h3 style={{ margin: "0", padding: "0 50px" }}>
              {movieCategoryTitle}
            </h3>
          </Button>
          <Button>
            See all
            <NavigateNextIcon />
          </Button>
        </div>

        <div className="right">
          <Button 
          // onClick={() => swiper?.slidePrev()}
          >
            <ArrowBackIosNewIcon />
          </Button>
          <Button 
          // onClick={() => swiper?.slideNext()}
          >
            <ArrowForwardIosOutlinedIcon />
          </Button>
        </div>
      </div>

      <div className="carousel">
    
          {movies?.map((i: Movie, index: number) =>{ 
             const { vote_average, title, release_date, id, poster_path} = i;
            const ratingfixed = vote_average / 2;
           return (
           
            <>
            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="movie-card"
              // style={boxStyle}
            >
              <img
                // style={{ opacity: isHover ? "0.5" : null }}
                src={APIConfig.w500Image(poster_path)}
                alt=""
              />
      
              <div
                className="hide"
                // style={onHoverDisplaying}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="content-content-hide">
                  <h4>{title}</h4>
                  <h5>{release_date}</h5>
                </div>
      
                <div className="rating-content-btn-hide">
                  <Rating
                    name="customized-10"
                    size="small"
                    readOnly
                    value={ratingfixed}
                  />
                  <h5> {vote_average}/10</h5>
                </div>
                <div className="content-btn-hide">
            <Link to={`/movies/${id}`}>
              {" "}
              <Button
                style={{ borderRadius: "5px", padding: "5%" }}
                variant="contained"
                size="medium"
                className="play-btn-content-btn-hide"
              >
                WATCH NOW
              </Button>
            </Link>
            {/* <Fab
              style={{ marginLeft: "8%" }}
              size="medium"
              color="primary"
              variant="contained"
              className="play-btn-content-btn-hide"
            >
              <AddIcon variant="contained" fontSize="medium" />
            </Fab> */}
          </div>
        </div>
      </div>
    </>
        
          )})}
     
      </div>
    </>
  );
};

export const CardContainer = ()=>{
  return(
    <></>
  )
}