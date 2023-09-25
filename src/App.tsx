import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header/Header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { createContext, useEffect, useState } from "react";
import HomePage from "./HomePage/HomePage";
import MovieDetailPage from "./DetailPage/DetailPage";
import Footer from "./Footer/Footer";
import GenresPage from "./Genres Page/GenresPage";
import GenresPageDetail from "./Genres Page/GenresPageDetail";
import RegisterPage from "./RegisterPage/RegisterPage";
import axios from "axios";
import { APIConfig, MoviesEndPoints } from "./Compoment/API/APIConfig";
import TVShowPage from "./HomePage/TvPage";
import MovieTVListPageDetail from "./Genres Page/Movie&TVListPageDetail";
const queryClient = new QueryClient();
interface MovieItem {
  name: string;
  id: number;
  title?: string;
  poster_path: string;
  quantity: number;
}
export const GenreListContext = createContext<any[]>([]);

function App(): JSX.Element {
  const [genreList, setGenreList] = useState<any>([]);
  const [addItem, setAddItem] = useState<MovieItem[]>([]);

  const addToCart = ({ title, name, id, poster_path }: MovieItem) => {
    const products = [...addItem];
    const itemIndex = products?.findIndex((item) => item.id === id);
    console.log(itemIndex);
    if (itemIndex === -1) {
      setAddItem([...products, { name, id, poster_path, quantity: 1 }]);
    } else {
      products[itemIndex].quantity += 1;
      setAddItem(products);
    }
  };

  useEffect(() => {
    axios.get(`${MoviesEndPoints.genre}${APIConfig.apiKey}`).then((res) => {
      setGenreList(res.data);
    });
  }, []);

  return (
    <div
      className="App"
      style={{
        backgroundColor: "black",
        width: "100%",
        minHeight: " 100vh",
      }}
    >
      <GenreListContext.Provider value={genreList}>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/tvshow" element={<TVShowPage />} />
              <Route path="/genres" element={<GenresPage />} />
              <Route path="/movies/:movieId" element={<MovieDetailPage />} />
              <Route path="/genres/:genreId" element={<GenresPageDetail />} />
              <Route
                path="/category/:type"
                element={<MovieTVListPageDetail />}
              />
              <Route path="/register" element={<RegisterPage />} />
              {/* <Route path="/test" element={<Media />} /> */}
            </Routes>
            <Footer />
          </BrowserRouter>
        </QueryClientProvider>
      </GenreListContext.Provider>
    </div>
  );
}

export default App;
