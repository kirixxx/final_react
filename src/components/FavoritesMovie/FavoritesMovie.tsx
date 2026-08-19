import type { FC } from "react";
import { useQuery } from "@tanstack/react-query";
import { getFavoritesMovie } from "../../api/favorites";
import { queryClient } from "../../api/queryClient";
import { Loader } from "../Loader";
import { FavoritesMovieView } from "./FavoritesMovieView";



export const FavoritesMovie: FC = () => {
    const favoritesMovieQuery = useQuery({
        queryFn: () => getFavoritesMovie(),
        queryKey: ["movie", "favorites"],
        retry: false,
        refetchOnWindowFocus: false,
    }, queryClient);

    switch (favoritesMovieQuery.status) {
        case "pending":
            return <Loader />
        case "error":
            return <span>ошибка загрузки данных</span>
        case "success":
            return <FavoritesMovieView movieList={favoritesMovieQuery.data} />
        }
}