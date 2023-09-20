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
        {/* <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={9}
          onSwiper={(item) => {
            setSwiper(item); 
          }}
        >
          {movies?.map((i: Movie, index: number) => (
            <SwiperSlide key={index}>
              {/* <CardContainer movieDetail={i} /> */}
            {/* </SwiperSlide> */}
          {/* ))} */}
        {/* </Swiper>  */}
      </div>
    </>
  );
};
