import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header/Header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import HomePage from "./HomePage/HomePage";
import MovieDetailPage from "./DetailPage/DetailPage";
import Footer from "./Footer/Footer";
import GenresPage from "./Genres Page/GenresPage";
import GenresPageDetail from "./Genres Page/GenresPageDetail";
import RegisterPage from "./Compoment/RegisterPage/RegisterPage";
import { GenreListContext } from "./Compoment/Data-Hooks/test222";
const queryClient = new QueryClient();

function App(): JSX.Element {
  return (
    <div
      className="App"
      style={{
        backgroundColor: "black",
        width: "100%",
        minHeight: " 100vh",
      }}
    >
      <GenreListContext.Provider>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/genres" element={<GenresPage />} />
              <Route path="/movies/:movieId" element={<MovieDetailPage />} />
              <Route path="/genres/:genreId" element={<GenresPageDetail />} />
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
