import type { FC } from "react";
import { Rating } from "../Rating/Rating";
import { Button } from "../Button/Button";
import { Svg } from "../Svg/Svg";

import { z } from 'zod';
import { useQuery } from "@tanstack/react-query";
import { getRandomMovie } from "../../api/Movie";
import { queryClient } from "../../api/queryClient";
import { Loader } from "../Loader";
import { FeaturedMovieView } from "./FeaturedMovieView";

export const FeaturedMovie: FC = () => {
    const randomMovieQuery = useQuery({
        queryFn: () => getRandomMovie(),
        queryKey: ["movie", "random"],
        retry: false,
        refetchOnWindowFocus: false,
    }, queryClient);

    console.log("randomMovieQuery.status", randomMovieQuery.status);

    switch (randomMovieQuery.status) {
        case "error":
            return <span>Не удалось загрузить фильмы, проверьте соединени с интернетом</span>
        case "pending":
            return <Loader />
        case "success":
            return <FeaturedMovieView movie={randomMovieQuery.data} />
    }
    
}