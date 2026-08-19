import type { FC } from "react";
import { FeaturedMovie } from "../../components/FeaturedMovie/FeaturedMovie";
import { TopMovie } from "../../components/TopMovie/TopMovie";

export const MainPage: FC = () => {
    return (
        <>
            <FeaturedMovie />
            <TopMovie />
        </>
    )
}