import type { FC } from "react"
import { Button } from "../Button/Button"
import { Rating } from "../Rating/Rating"
import { Svg } from "../Svg/Svg"
import type { MovieType } from "../../api/Movie"
import { formatRuntime } from "../../utils/formatRuntime"

interface IFeaturedMovieView {
    movie: MovieType,
}

export const FeaturedMovieView: FC<IFeaturedMovieView> = ({
    movie
}) => {
    if (!movie) {
        return <span>Ошибка!!</span>
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
                            <Button className="featured-movie__btn btn--size-small" type="button">
                                <Svg iconId="icon-like" />
                            </Button>
                            <Button className="featured-movie__btn btn--size-small" type="button">
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