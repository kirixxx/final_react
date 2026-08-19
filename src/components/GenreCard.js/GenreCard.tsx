import type { FC } from "react";
import type { GenreType } from "../../api/Movie";
import { useNavigate } from "react-router";

interface IGenrecard {
    genre: GenreType;
}

export const GenreCard: FC<IGenrecard> = ({
    genre
}) => {
    const navigate = useNavigate();

    return (
        <div className="genre-card" onClick={() => navigate(`/genres/${genre.name}`)}>
            <img src={genre.img} alt="Карточка жанра" className="genre-card__img" />
            <p className="genre-card__title">{genre.name}</p>
        </div>
    )
}