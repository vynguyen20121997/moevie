import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header/Header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import HomePage from "./HomePage/HomePage";
import MovieDetailPage from "./DetailPage/DetailPage";
// import { Test } from "./Test/test";
import Footer from "./Footer/Footer";
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
            {/* <Route path="/genres" element={<GenresPage />} /> */}
            <Route path="/movies/:movieId" element={<MovieDetailPage />} />
            {/* <Route path="/genres/:genreId" element={<GenresPageDetail />} /> */}
            {/* <Route path="/test" element={<OnfetchDataById />} /> */}
            {/* <Route path="/button" element={<GenresButton />} />
              <Route path="/testa" element={<GenreList />} />
              <Route path="/testb" element={<GenreList />} />  */}
            {/* {/* <Route path="/b" element={<Home />} /> */}
            {/* <Route path="/a" element={<Lists />} />
              // <Route path="/b" element={<Testings />} /> */}
            {/* <Route path="/b" element={<Testings />} /> */}
          </Routes>
          <Footer />
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
