import type { FC } from "react";
import type { MovieArrayType } from "../../api/Movie";
import { Svg } from "../Svg/Svg";
import { useFavorites } from "../../hooks/useFavorites";
import { MovieCard } from "../MovieCard/MovieCard";

interface IFavoritesMovieList {
    movieList: MovieArrayType
}

export const FavoritesMovieView: FC<IFavoritesMovieList> = ({
    movieList
}) => {
    const { unlike } = useFavorites();

    return (
        <ul className="favorites-movie__list">
            {movieList.map(movie => (
                <li className="favorites-movie__item" key={movie.id}>
                    <div className="favorites-movie__close" onClick={() => unlike({ id: movie.id })}>
                        <Svg className="favorites-movie__icon" iconId="icon-close-s" />
                    </div>
                    <MovieCard movie={movie} />
                    {/* <img src={movie.posterUrl ? movie.posterUrl : '#'} alt="Карточка фильма" className="favorites-movie__img" /> */}
                </li>
            ))}
        </ul>
    )
}