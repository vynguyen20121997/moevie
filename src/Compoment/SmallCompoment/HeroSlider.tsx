// import React, { ReactNode, useCallback, useEffect } from "react";
// import { useTheme } from "@mui/material/styles";
// import Button from "@mui/material/Button";
// import { useState, useContext } from "react";
// import { APIConfig } from "../API/APIConfig";
// import { OnFetchAxios } from "../API/OnfetchAxios";
// import { Link, Navigate, useNavigate } from "react-router-dom";
// import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// import "./style.css";
// import Fab from "@mui/material/Fab";
// import "@fontsource/roboto/300.css";
// import "@fontsource/roboto/400.css";
// import "@fontsource/roboto/500.css";
// import "@fontsource/roboto/700.css";
// // import { Movie } from "../TS_TYPES/movie.type";
// import { MoviesEndPoints } from "../API/APIConfig";
// import { MoviebyOptions } from "../API/APIConfig";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// // import { SwiperOptions } from "swiper/types";
// // import { Swiper, SwiperSlide } from "swiper/react";
// export interface Movie {
//   id: number;
//   title: string;
//   original_title: string;
//   overview: string;
//   poster_path: string;
//   backdrop_path: string;
//   vote_count: number;
//   vote_average: number;
//   release_date: string;
//   popularity: number;
// }

// interface HeroSliderProps {
//   items: Movie[];
// }

// export const HeroSlider = ({ items }: HeroSliderProps) => {
//   const navigate = useNavigate();
  
//   console.log("hienra", items);
//   return (
//     <>
//       <div className="slider">

//         <div className="btn1">
//           <Fab
//             color="primary"
           
//           >
//             <ChevronLeftIcon fontSize="large" />
//           </Fab>
//         </div>
        
//           {items &&
//             items.map((i, index) => (
             
//                 <div
//                   key={index}
//                   className="hero-slider-container"
//                   style={{
//                     backgroundImage: `url(${APIConfig.originalImage(
//                       i.backdrop_path
//                     )})`,
//                   }}
//                 >
//                   <div
//                     className="content"
//                     style={{
//                       padding: "5%",
//                       paddingRight: "-2%",
//                       height: "100%",
//                       width: "100%",
//                     }}
//                   >
//                     <div
//                       className="poster"
//                       style={{
//                         width: "25%",
//                         position: "relative",
//                         borderRadius: "15px",
//                       }}
//                     >
//                       <Link to={`/movies/${i.id}`}>
//                         <img
//                           style={{ borderRadius: "15px" }}
//                           onClick={() => {
//                             navigate(`/movies/${i.id}`);
//                           }}
//                           src={APIConfig.w500Image(i.poster_path)}
//                           alt=""
//                         />
//                       </Link>
//                     </div>
//                     <div
//                       className="info"
//                       style={{
//                         width: "60%",
//                         paddingTop: "5%",
//                         color: "white",
//                         paddingLeft: "2%",
//                         position: "relative",
//                         height: "100%",
//                       }}
//                     >
//                       <h1 style={{ width: "40%", height: "10%" }}>{i.title}</h1>
//                       <h4 style={{ width: "55%", height: "20%" }}>
//                         {i.overview}
//                       </h4>
//                       <div className="btn" style={{ height: "20%" }}>
//                         <Button
//                           onClick={() => {
//                             navigate(`/movies/${i.id}`);
//                           }}
//                           style={{
//                             borderRadius: "30px",
//                             marginLeft: "2%",
//                             width: "200px",
//                             height: "58px",
//                             padding: "0",
//                           }}
//                           size="large"
//                           variant="contained"
//                         >
//                           WATCH NOW
//                         </Button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
             
//             ))}
       
//         ;
//         <div className="btn2">
//           <Fab
//             color="primary"
         
//           >
//             <ChevronRightIcon fontSize="large" />
//           </Fab>
//         </div>

//       </div>
//     </>
//   );
// };

// export default HeroSlider;
