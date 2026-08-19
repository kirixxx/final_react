import type { FC } from "react";
import { FeaturedMovieView } from "../../components/FeaturedMovie/FeaturedMovieView";
import { useSelector } from "react-redux";
import { selectMovie } from "../../features/selectMovie/selectMovieSlice";
import { AboutMovie } from "../../components/AboutMovie/AboutMovie";

export const MoviePage: FC = () => {
    const movie = useSelector(selectMovie);

    if (!movie) {
        return;
    }

    return (
        <>
            <FeaturedMovieView movie={movie} showAboutBtn={false} showRefreshBtn={false} />
            <AboutMovie movie={movie} />
        </>
    )
}