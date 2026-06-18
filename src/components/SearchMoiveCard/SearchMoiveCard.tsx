import type { FC } from "react";
import type { MovieType } from "../../api/Movie";
import { Rating } from "../Rating/Rating";
import { formatRuntime } from "../../utils/formatRuntime";

interface ISearchMoiveCard {
    movie: MovieType;
}

export const SearchMoiveCard: FC<ISearchMoiveCard> = ({
    movie,
}) => {
    return (
        <div className="search-card">
            <img src={movie.posterUrl ? movie.posterUrl : '#'} alt="Карточка фильма" width={40} height={52} className="search-card__img" />
            <div className="search-card__info">
                <div className="search-card__details">
                    <Rating size="small" ratingValue={movie.tmdbRating?.toFixed(1)} />
                    <p className="search-card__text">{movie.releaseYear}</p>
                    <p className="search-card__text">{movie.genres}</p>
                    <p className="search-card__text">{formatRuntime(movie.runtime)}</p>
                </div>
                <h2 className="search-card__title">{movie.originalTitle}</h2>
            </div>
        </div>
    )
}