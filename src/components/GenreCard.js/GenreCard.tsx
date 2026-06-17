import type { FC } from "react";
import type { GenreType } from "../../api/Movie";

interface IGenrecard {
    genre: GenreType;
}

export const GenreCard: FC<IGenrecard> = ({
    genre
}) => {
    return (
        <div className="genre-card">
            <img src={genre.img} alt="Карточка жанра" className="genre-card__img" />
            <p className="genre-card__title">{genre.name}</p>
        </div>
    )
}