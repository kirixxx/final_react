import type { FC } from "react";
import type { MovieArrayType } from "../../api/Movie";
import { MovieCard } from "../MovieCard/MovieCard";
interface ITopMovieList {
    movieList: MovieArrayType
}

export const TopMovieList: FC<ITopMovieList> = ({
    movieList
}) => {
    return (
        <section className="top-movie">
            <div className="container">
                <div className="top-movie__wrapper">
                    <h2 className="top-movie__title">Топ 10 фильмов</h2>
                    <ul className="top-movie__list">
                        {movieList.map(movie => (
                            <li className="top-movie__item" key={movie.id}>
                                <MovieCard movie={movie}/>
                                {/* <img src={movie.posterUrl ? movie.posterUrl : '#'} alt="Карточка фильма" className="top-movie__img" /> */}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
};