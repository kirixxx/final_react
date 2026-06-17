import type { FC } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { setSelectMovie } from "../../features/selectMovie/selectMovieSlice";
import type { MovieType } from "../../api/Movie";

interface IMovieCard {
    movie: MovieType;
}

export const MovieCard: FC<IMovieCard> = ({
    movie
}) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleMovieCard = () => {
        dispatch(setSelectMovie(movie))
        navigate(`/movie/${movie.id}`);
    }

    return (
        <div className="movie-card" onClick={handleMovieCard}>
            <img src={movie.posterUrl ? movie.posterUrl : '#'} alt="Карточка фильма" className="movie-card__img" />
        </div>
    )
}