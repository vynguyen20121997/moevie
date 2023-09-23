import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header/Header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { createContext, useEffect, useState } from "react";
import HomePage from "./HomePage/HomePage";
import MovieDetailPage from "./DetailPage/DetailPage";
import Footer from "./Footer/Footer";
import GenresPage from "./Genres Page/GenresPage";
import GenresPageDetail from "./Genres Page/GenresPageDetail";
import RegisterPage from "./Compoment/RegisterPage/RegisterPage";
import axios from "axios";
import { APIConfig, MoviesEndPoints } from "./Compoment/API/APIConfig";
import MyOtherComponent from "./Compoment/Data-Hooks/test333";
const queryClient = new QueryClient();
export const GenreListContext = createContext<any[]>([]);

function App(): JSX.Element {
  const [genreList, setGenreList] = useState<any>([]);

  useEffect(() => {
    axios.get(`${MoviesEndPoints.genre}${APIConfig.apiKey}`).then((res) => {
      setGenreList(res.data);
    });
  }, []);

  return (
    <div
      className="App"
      style={{
        // backgroundColor: "black",
        width: "100%",
        minHeight: " 100vh",
      }}
    >
      {" "}
      <GenreListContext.Provider value={genreList}>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/genres" element={<GenresPage />} />
              <Route path="/movies/:movieId" element={<MovieDetailPage />} />
              <Route path="/genres/:genreId" element={<GenresPageDetail />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/test" element={<MyOtherComponent />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </QueryClientProvider>
      </GenreListContext.Provider>
    </div>
  );
}

export default App;
