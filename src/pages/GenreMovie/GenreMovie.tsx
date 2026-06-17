import { useQuery } from "@tanstack/react-query";
import type { FC } from "react";
import { getGenreMovies } from "../../api/Movie";
import { MovieCard } from "../../components/MovieCard/MovieCard";
import { useLocation, useNavigate, useParams } from "react-router";
import { Button } from "../../components/Button/Button";
import { Svg } from "../../components/Svg/Svg";

export const GenreMovie: FC = () => {
    const { genreId } = useParams();
    const navigate = useNavigate();

    const genreMoviesQuery = useQuery({
        queryFn: () => getGenreMovies(genreId || ''),
        queryKey: ["movie", "genre"],
        retry: false,
        refetchOnWindowFocus: false,
    })

    return (
        <section className="genre-movie">
            <div className="container">
                <div className="genre-movie__wrapper">
                    <Button className="genre-movie__btn" onClick={() => navigate('/genres')}>
                        <Svg className="genre-movie__btn-icon" width={40} height={40} iconId="icon-back" />
                        <span className="genre-movie__btn-text">{genreId}</span>
                    </Button>
                    <ul className="genre-movie__list">
                        {genreMoviesQuery.data?.map(movie => (
                            <li className="genre-movie__item" key={movie.id}>
                                <MovieCard movie={movie} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}