import { useMutation, useQuery } from "@tanstack/react-query";
import type { FC } from "react";
import { getGenres } from "../../api/Movie";
import { GenreCard } from "../../components/GenreCard.js/GenreCard";

export const GenresPage: FC = () => {

    const genreQuery = useQuery({
        queryFn: () => getGenres(),
        queryKey: ["movie", "genres"],
        retry: false,
        refetchOnWindowFocus: false
    })

    return (
        <section className="genres">
            <div className="container">
                <div className="genres__wrapper">
                    <h2 className="genres__title">Жанры фильмов</h2>
                    <ul className="genres__list">
                        {genreQuery.data?.map((genre, index) => (
                            <li className="genres__item" key={index}>
                                <GenreCard genre={genre} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}