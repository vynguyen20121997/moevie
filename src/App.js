import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Body from "./HomePage/Body";
import Header from "./Header/Header";
// import MovieDetailPage from "./MovieDetailPage/MovieDetail";
import Footer from "./Footer/Footer";
// import { GenreList } from "./Test/TestAgain";
// import GenresPage from "./Genres Page/GenresPage";
// import { OnfetchDataById } from "./Compoment/API/OnfetchDataById";
// import { GenresButton } from "./Compoment/Button/GenresButton";
// import GenresPageDetail from "./Genres Page/GenresPageDetail";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./Test/TestAgain2";
const queryClient = new QueryClient();

function App() {
  return (
    <>
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
              {/* <Route path="/" element={<Body />} />
              <Route path="/genres" element={<GenresPage />} />
              <Route path="/movies/:movieId" element={<MovieDetailPage />} />
              <Route path="/genres/:genreId" element={<GenresPageDetail />} />
              {/* <Route path="/test" element={<OnfetchDataById />} /> */}
              {/* <Route path="/button" element={<GenresButton />} />
              <Route path="/testa" element={<GenreList />} />
              <Route path="/testb" element={<GenreList />} />  */}
                <Route path="/testb" element={<Home />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </QueryClientProvider>
      </div>
    </>
  );
}

export default App;
