import type { FC } from "react"
import { Button } from "../Button/Button"
import { Rating } from "../Rating/Rating"
import { Svg } from "../Svg/Svg"
import type { MovieType } from "../../api/Movie"
import { formatRuntime } from "../../utils/formatRuntime"
import { useMutation } from "@tanstack/react-query"
import { addFavoriteMovie, deleteFavoriteMovie } from "../../api/favorites"
import { queryClient } from "../../api/queryClient"
import { useDispatch, useSelector } from "react-redux"
import { selectUserdata } from "../../features/userData/userDataSlice";

interface IFeaturedMovieView {
    movie: MovieType,
    onRefresh: () => void;
}

type likeMovie = {
    id: number;
}

export const FeaturedMovieView: FC<IFeaturedMovieView> = ({
    movie,
    onRefresh
}) => {
    if (!movie) {
        return <span>Ошибка!!</span>
    }

    const userData = useSelector(selectUserdata);
    const isFavorite = userData.favorites?.includes(movie.id.toString()) || false;

    const likeMutation = useMutation({
        mutationFn: (data: likeMovie) => addFavoriteMovie(data.id),
        onSuccess: (data) => {
            if (data) {
                queryClient.invalidateQueries({ queryKey: ["profile", "me"] })
                queryClient.invalidateQueries({ queryKey: ["movie", "favorites"] })
            }
        },
        onError: (error) => {
            console.error("likeMutation: ", error)
        }
    })

    const unlikeMutation = useMutation({
        mutationFn: (data: likeMovie) => deleteFavoriteMovie(data.id),
        onSuccess: (data) => {
            if (data) {
                queryClient.invalidateQueries({ queryKey: ["profile", "me"] })
                queryClient.invalidateQueries({ queryKey: ["movie", "favorites"] })
            }
        },
        onError: (error) => {
            console.error("unlikeMutation: ", error)
        }
    });

    const toggleLikeMovie = () => {
        if (isFavorite) {
            unlikeMutation.mutate({ id: movie.id })
        } else {
            likeMutation.mutate({ id: movie.id })
        }
    }
    return (
        <section className="featured-movie">
            <div className="container">
                <div className="featured-movie__wrapper">
                    <div className="featured-movie__info">
                        <div className="featured-movie__description">
                            <div className="featured-movie__details">
                                <Rating size="small" ratingValue={movie.tmdbRating?.toFixed(1)} />
                                <span className="featured-movie__details-text">{movie.releaseYear}</span>
                                <span className="featured-movie__details-text">{movie.genres ? movie.genres[0] : ''}</span>
                                <span className="featured-movie__details-text">{formatRuntime(movie.runtime)}</span>
                            </div>
                            <p className="featured-movie__title">{movie.title}</p>
                            <p className="featured-movie__text">{movie.plot}</p>
                        </div>
                        <div className="featured-movie__actions">
                            <Button className="featured-movie__btn movie-btn--size-xl btn--color-blue" type="button">Трейлер</Button>
                            <Button className="featured-movie__btn btn--color-gray" type="button">О фильме</Button>
                            <Button className={`featured-movie__btn  btn--size-small`} type="button" onClick={toggleLikeMovie}>
                                {isFavorite ?
                                    <Svg className='featured-movie__icon' iconId="icon-favorite" />
                                    :
                                    <Svg className='featured-movie__icon' iconId="icon-like" />
                                }
                            </Button>
                            <Button className="featured-movie__btn btn--size-small" type="button" onClick={onRefresh}>
                                <Svg iconId="icon-reset" />
                            </Button>
                        </div>
                    </div>
                    <div className="featured-movie__trailer">
                        <img className="featured-movie__trailer-backimg" src={movie.backdropUrl ? movie.backdropUrl : '#'} alt="Картинка трейлера" />
                    </div>
                </div>
            </div>
        </section>
    )
}