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
  quantity?: number;
}

type AddToSaveType = ({
  title,
  name,
  id,
  poster_path,
  quantity,
}: MovieItem) => void;

export const GenreListContext = createContext<AddToSaveType>(() => {});
function App(): JSX.Element {
  const [savedItem, setSavedItem] = useState<MovieItem[]>([]);

  const addToSave = ({ title, name, id, poster_path, quantity }: MovieItem) => {
    const movies = [...savedItem];
    const itemIndex = movies?.findIndex((item) => item.id === id);
    console.log(itemIndex);
    if (itemIndex === -1) {
      setSavedItem([...movies, { name, id, poster_path }]);
    } else {
      // return alert("You already added")
    }
  };

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
