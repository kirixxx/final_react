import type { FC } from "react";

import { useQuery } from "@tanstack/react-query";
import { getRandomMovie } from "../../api/Movie";
import { queryClient } from "../../api/queryClient";
import { FeaturedMovieView } from "./FeaturedMovieView";
import { SkeletonLoaderFeaturesMovie } from "../Loader/SkeletonLoaderFeaturesMovie";

export const FeaturedMovie: FC = () => {
    const randomMovieQuery = useQuery({
        queryFn: () => getRandomMovie(),
        queryKey: ["movie", "random"],
        retry: false,
        refetchOnWindowFocus: false,
    }, queryClient);

    const handleRefreshRandomMovie = () => {
        randomMovieQuery.refetch();
    }
    console.log("randomMovieQuery.status", randomMovieQuery.status);

    switch (randomMovieQuery.status) {
        case "error":
            return <span>Не удалось загрузить фильмы, проверьте соединени с интернетом</span>
        case "pending":
            return <SkeletonLoaderFeaturesMovie />
        case "success":
            return <FeaturedMovieView movie={randomMovieQuery.data} onRefresh={handleRefreshRandomMovie}/>
    }
    
}