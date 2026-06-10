import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* <Route index element={<MainPage />} />
        <Route path="genres" element={<GenresPage />} />
        <Route path="genres/:genreId" element={<GenrePage />} />
        <Route path="movie/:movieId" element={<MoviePage />} />
        <Route path="profile/:userId" element={<ProfilePage />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
