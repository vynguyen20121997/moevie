import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import {
  AddToSaveType,
  MovieObjectForApp,
} from "./Compoment/Type/InterfaceType";
import MovieDetailPage from "./DetailPage/DetailPage";
import Footer from "./Footer/Footer";
import GenresPage from "./Genres Page/GenresPage";
import GenresPageDetail from "./Genres Page/GenresPageDetail";
import MovieTVListPageDetail from "./Genres Page/Movie&TVListPageDetail";
import Header from "./Header/Header";
import HomePage from "./HomePage/HomePage";
import TVShowPage from "./HomePage/TvPage";
import RegisterPage from "./RegisterPage/RegisterPage";
import LoginPage from "./LoginPage/LoginPage";
import { Provider } from "react-redux";
import { store } from "./Compoment/redux/store";
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
    if (itemIndex === -1) {
      setSavedItem([
        ...movies,
        { vote_average, title, release_date, id, poster_path, genre_ids, name },
      ]);
    } else {
      return alert("You Already Added");
    }
  };

  localStorage.setItem("favorite", JSON.stringify(savedItem));

  return (
    <div className="App">
      <GenreListContext.Provider value={addToSave}>
        <QueryClientProvider client={queryClient}>
          <Provider store={store}>
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
                <Route path="/login" element={<LoginPage />} />
              </Routes>
              <Footer />
            </BrowserRouter>
          </Provider>
          ,
        </QueryClientProvider>
      </GenreListContext.Provider>
    </div>
  );
}
export default App;
