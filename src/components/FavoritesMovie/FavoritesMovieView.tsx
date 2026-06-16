import type { FC } from "react";
import type { MovieArrayType } from "../../api/Movie";

interface IFavoritesMovieList {
    movieList: MovieArrayType
}

export const FavoritesMovieView: FC<IFavoritesMovieList> = ({
    movieList
}) => {
    return (
        <ul className="favorites-movie__list">
            {movieList.map(movie => (
                <li className="favorites-movie__item" key={movie.id}>
                    <img src={movie.posterUrl ? movie.posterUrl : '#'} alt="Карточка фильма" className="favorites-movie__img" />
                </li>
            ))}
        </ul>
    )
}