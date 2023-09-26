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
import "./App.css";
const queryClient = new QueryClient();
interface MovieItem {
  name: string;
  id: number;
  title?: string;
  poster_path: string;
}
export interface MovieObject {
  vote_average: number;
  title: string;
  release_date: string;
  id: number;
  poster_path: string;
  genre_ids: number[];
  name: string;
}
type AddToSaveType = ({
  vote_average,
  title,
  release_date,
  id,
  poster_path,
  genre_ids,
  name,
}: MovieObject) => void;

export const GenreListContext = createContext<AddToSaveType>(() => {});
function App(): JSX.Element {
  const [savedItem, setSavedItem] = useState<MovieObject[]>([]);
  const addToSave = ({
    vote_average,
    title,
    release_date,
    id,
    poster_path,
    genre_ids,
    name,
  }: MovieObject) => {
    const movies = [...savedItem];
    const itemIndex = movies?.findIndex((item) => item.id === id);
    console.log(itemIndex);
    if (itemIndex === -1) {
      setSavedItem([
        ...movies,
        { vote_average, title, release_date, id, poster_path, genre_ids, name },
      ]);
    } else {
      return alert("You already added");
    }
  };
  console.log("thêm gì vô vậy ?", savedItem);
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
