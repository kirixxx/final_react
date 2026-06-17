import type { FC } from "react"
import { Button } from "../Button/Button"
import { Rating } from "../Rating/Rating"
import { Svg } from "../Svg/Svg"
import type { MovieType } from "../../api/Movie"
import { formatRuntime } from "../../utils/formatRuntime"
import { useDispatch, useSelector } from "react-redux"
import { selectUserdata } from "../../features/userData/userDataSlice";
import { useFavorites } from "../../hooks/useFavorites"
import { setSelectMovie } from "../../features/selectMovie/selectMovieSlice"
import { useNavigate } from "react-router-dom"

interface IFeaturedMovieView {
    movie: MovieType,
    onRefresh?: () => void;
    showAboutBtn?: boolean;
    showRefreshBtn?: boolean;
}



export const FeaturedMovieView: FC<IFeaturedMovieView> = ({
    movie,
    onRefresh,
    showAboutBtn = true,
    showRefreshBtn = true,
}) => {
    if (!movie) {
        return <span>Ошибка!!</span>
    }

    const userData = useSelector(selectUserdata);
    const isFavorite = userData.favorites?.includes(movie.id.toString()) || false;
    const { like, unlike } = useFavorites();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const actionsSize = (!showAboutBtn && !showRefreshBtn) ? 'small': 'big';
    const toggleLikeMovie = () => {
        if (isFavorite) {
            unlike({ id: movie.id })
        } else {
            like({ id: movie.id })
        }
    }

    const handleMovieCard = () => {
        dispatch(setSelectMovie(movie))
        navigate(`/movie/${movie.id}`);
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
                        <div className={`featured-movie__actions ${actionsSize === 'small' ? 'size--small': ''}`}>
                            <Button className="featured-movie__btn movie-btn--size-xl btn--color-blue" type="button">Трейлер</Button>
                            {showAboutBtn && <Button className="featured-movie__btn btn--color-gray" type="button" onClick={handleMovieCard}>О фильме</Button>}
                            <Button className={`featured-movie__btn  btn--size-small`} type="button" onClick={toggleLikeMovie}>
                                {isFavorite ?
                                    <Svg className='featured-movie__icon' iconId="icon-favorite" />
                                    :
                                    <Svg className='featured-movie__icon' iconId="icon-like" />
                                }
                            </Button>
                            {showRefreshBtn && <Button className="featured-movie__btn btn--size-small" type="button" onClick={onRefresh}>
                                <Svg iconId="icon-reset" />
                            </Button>}
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