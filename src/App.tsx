import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header/Header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import HomePage from "./HomePage/HomePage";
import MovieDetailPage from "./DetailPage/DetailPage";
// import { Test } from "./Test/test";
import Footer from "./Footer/Footer";
import GenresPage from "./Genres Page/GenresPage";
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
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/genres" element={<GenresPage />} />
            <Route path="/movies/:movieId" element={<MovieDetailPage />} />
            {/* <Route path="/genres/:genreId" element={<GenresPageDetail />} /> */}
          </Routes>
          <Footer />
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
