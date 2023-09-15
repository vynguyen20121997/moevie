// import { category, movieType, tvType } from "../Compoment/API/tmdbAPI";
// import { APIConfig } from "../Compoment/API/APIConfig";
// import { Link } from "react-router-dom";
// import { Button } from "@mui/base";
// import { useState } from "react";
// import { useEffect } from "react";

// export const MovieCard = props => {

//     const item  = props.item;

//     const link = '/' + category[props.category] + '/' + item.id;

//     const bg = APIConfig.w500Image(item.poster_path || item.backdrop_path);

//     return (
//         <Link to={link}>
//             <div className="movie-card" style={{backgroundImage: `url(${bg})`}}>
//                 <Button>
//                     <i className="bx bx-play"></i>
//                 </Button>
//             </div>
//             <h3>{item.title || item.name}</h3>
//         </Link>
//     );
// }

// export const MovieList = props => {

//     const [items, setItems] = useState([]);

//     useEffect(() => {
//         const getList = async () => {
//             let response = null;
//             const params = {};

//             if (props.type !== 'similar') {
//                 switch(props.category) {
//                     case category.movie:
//                         response = await APIConfig.getMoviesList(props.type, {params});
//                         break;
//                     default:
//                         response = await APIConfig.getTvList(props.type, {params});
//                 }
//             } else {
//                 response = await APIConfig.similar(props.category, props.id);
//             }
//             setItems(response.results);
//         }
//         getList();
//     }, []);

//     return (
//         <div className="movie-list">
//            <div>
//                 {
//                     items.map((item, i) => (
//                        <div>
//                             <MovieCard item={item} category={props.category}/>
//                         </div>
//                     ))
//                 }
//            </div>
//         </div>
//     );
// }

// const Home = () => {
//     return (
//       <>

//         <div className="container">
//           <div className="section mb-3">
//             <div className="section__header mb-2">
//               <h2>Trending Movies</h2>
//               <Link to="/movie">
//                 <Button className="small">View more</Button>
//               </Link>
//             </div>
//             <MovieList category={category.movie} type={movieType.popular} />
//           </div>

//           <div className="section mb-3">
//             <div className="section__header mb-2">
//               <h2>Top Rated Movies</h2>
//               <Link to="/movie">
//                 <Button className="small">View more</Button>
//               </Link>
//             </div>
//             <MovieList category={category.movie} type={movieType.top_rated} />
//           </div>

//           <div className="section mb-3">
//             <div className="section__header mb-2">
//               <h2>Trending TV</h2>
//               <Link to="/tv">
//                 <Button className="small">View more</Button>
//               </Link>
//             </div>
//             <MovieList category={category.tv} type={tvType.popular} />
//           </div>

//           <div className="section mb-3">
//             <div className="section__header mb-2">
//               <h2>Top Rated TV</h2>
//               <Link to="/tv">
//                 <Button className="small">View more</Button>
//               </Link>
//             </div>
//             <MovieList category={category.tv} type={tvType.top_rated} />
//           </div>
//         </div>
//       </>
//     );
//   };

//   export default Home;
