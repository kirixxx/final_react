import { useQuery } from "@tanstack/react-query";
import { useState, type FC } from "react";
import { getGenreMovies } from "../../api/Movie";
import { MovieCard } from "../../components/MovieCard/MovieCard";
import { useNavigate, useParams } from "react-router";
import { Button } from "../../components/Button/Button";
import { Svg } from "../../components/Svg/Svg";
import { Loader } from "../../components/Loader";
import { SkeletonLoaderGenres } from "../../components/Loader/SkeletonLoaderGenres";

export const GenreMovie: FC = () => {
    const { genreId } = useParams();
    const navigate = useNavigate();
    const [moviesCount, setMoviesCount] = useState<number>(10);

    const genreMoviesQuery = useQuery({
        queryFn: () => getGenreMovies(genreId || ''),
        queryKey: ["movie", "genre"],
        retry: false,
        refetchOnWindowFocus: false,
    })

    switch (genreMoviesQuery.status) {
        case "pending":
            return <SkeletonLoaderGenres />
        case "error":
            return <span>ошибка загрузки страницы</span>
        case "success":
            return (
                <section className="genre-movie">
                    <div className="container">
                        <div className="genre-movie__wrapper">
                            <Button className="genre-movie__btn" onClick={() => navigate('/genres')}>
                                <Svg className="genre-movie__btn-icon" width={40} height={40} iconId="icon-back" />
                                <span className="genre-movie__btn-text">{genreId}</span>
                            </Button>
                            <ul className="genre-movie__list">
                                {genreMoviesQuery.data?.slice(0, moviesCount).map(movie => (
                                    <li className="genre-movie__item" key={movie.id}>
                                        <MovieCard movie={movie} />
                                    </li>
                                ))}
                            </ul>
                            {moviesCount <= genreMoviesQuery.data.length && <Button className="genre-movie__btn-load" onClick={() => setMoviesCount(prev => prev + 10)}>
                                Показать еще
                            </Button>}
                        </div>
                    </div>
                </section>
            )
    }

}