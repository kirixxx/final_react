import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { MainPage } from "./pages/Main/MainPage";
import { ProfilePage } from "./pages/Profile/ProfilePage";
import { MoviePage } from "./pages/Movies/MoviesPage";
import { GenresPage } from "./pages/Genres/GenresPage";
import { GenreMovie } from "./pages/GenreMovie/GenreMovie";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="genres" element={<GenresPage />} />
        <Route path="genres/:genreId" element={<GenreMovie />} />
        <Route path="movie/:movieId" element={<MoviePage />} />
        <Route path="profile/:userId" element={<ProfilePage />} />
      </Route>
    </Routes>
  );
}

export default App;
