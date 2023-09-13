import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./HomePage/Body";
import Header from "./Header/Header";
import MovieDetailPage from "./MovieDetailPage/MovieDetail";
import Footer from "./Footer/Footer";
import { Test } from "./Test/test";
import GenresPage from "./Genres Page/GenresPage";
import { OnfetchDataById } from "./Compoment/API/OnfetchDataById";
import { GenresButton } from "./Compoment/Button/GenresButton";
import GenresPageDetail from "./Genres Page/GenresPageDetail";
function App() {
  return (
    <>

      <div className="App"
        style={{
          backgroundColor: "black",
          width: '100%',
          minHeight: ' 100vh'
        }}
      >
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/genres" element={<GenresPage />} />
            <Route path="/movies/:movieId" element={<MovieDetailPage />} />
            <Route path="/genres/:genreId" element={<GenresPageDetail />} />
            <Route path="/test" element={<OnfetchDataById />} />
            {/* <Route path="/button" element={<GenresButton />} /> */}

          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
