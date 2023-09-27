import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header/Header";
import {
  QueryClient,
  QueryClientProvider,
  UseQueryResult,
  useQuery,
} from "@tanstack/react-query";
import React, { createContext, useEffect, useState } from "react";
import HomePage from "./HomePage/HomePage";
import MovieDetailPage from "./DetailPage/DetailPage";
import Footer from "./Footer/Footer";
import GenresPage from "./Genres Page/GenresPage";
import GenresPageDetail from "./Genres Page/GenresPageDetail";
import RegisterPage from "./RegisterPage/RegisterPage";
import TVShowPage from "./HomePage/TvPage";
import MovieTVListPageDetail from "./Genres Page/Movie&TVListPageDetail";
import Alert from "@mui/material/Alert";
import "./App.css";
import {
  AddToSaveType,
  MovieObjectForApp,
} from "./Compoment/Type/InterfaceType";
const queryClient = new QueryClient();
export const GenreListContext = createContext<AddToSaveType>(() => {});
function App(): JSX.Element {
  const [savedItem, setSavedItem] = useState<MovieObjectForApp[]>([]);
  const addToSave = ({
    vote_average,
    title,
    release_date,
    id,
    poster_path,
    genre_ids,
    name,
  }: MovieObjectForApp) => {
    const movies = [...savedItem];
    const itemIndex = movies?.findIndex((item) => item.id === id);
    console.log(itemIndex);
    if (itemIndex === -1) {
      setSavedItem([
        ...movies,
        { vote_average, title, release_date, id, poster_path, genre_ids, name },
      ]);
    } else {
      return alert(
        // <Alert variant="outlined" severity="error">
        "You Already Added"
        // </Alert>
      );
    }
  };
  localStorage.setItem("favorite", JSON.stringify(savedItem));
  return (
    <div className="App">
      <GenreListContext.Provider value={addToSave}>
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
            </Routes>
            <Footer />
          </BrowserRouter>
        </QueryClientProvider>
      </GenreListContext.Provider>
    </div>
  );
}
export default App;
