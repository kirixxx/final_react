import { useQuery } from "@tanstack/react-query";
import type { FC } from "react";
import { getTop10Movie } from "../../api/Movie";
import { queryClient } from "../../api/queryClient";
import { Loader } from "../Loader";
import { TopMovieList } from "../TopMovieList/TopMovieList";

export const TopMovie: FC = () => {

    const topMovieQuery = useQuery({
        queryFn: () => getTop10Movie(),
        queryKey: ["movie", "top10"],
        retry: false
    }, queryClient);

    switch (topMovieQuery.status) {
        case "error":
            return <span>Не удалось загрузить фильмы, проверьте соединени с интернетом</span>
        case "pending":
            return <Loader />
        case "success":
            return <TopMovieList movieList={topMovieQuery.data} />
    }

}