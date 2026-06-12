import type { FC } from "react";
import { Rating } from "../Rating/Rating";
import { Button } from "../Button/Button";
import { Svg } from "../Svg/Svg";

export const FeaturedMovie:FC = () => {
    return (
        <section className="featured-movie">
            <div className="container">
                <div className="featured-movie__wrapper">
                    <div className="featured-movie__info">
                        <div className="featured-movie__details">
                            <Rating size="small" ratingValue={7.5}/>
                            <span className="featured-movie__details-text">1979</span>
                            <span className="featured-movie__details-text">детектив</span>
                            <span className="featured-movie__details-text">1 ч 7 мин</span>
                        </div>
                        <p className="featured-movie__title">Шерлок Холмс и доктор Ватсон: Знакомство</p>
                        <p className="featured-movie__text">Увлекательные приключения самого известного сыщика всех времен</p>
                        <div className="featured-movie__actions">
                            <Button className="featured-movie__btn btn--color-blue" type="button">Трейлер</Button>
                            <Button className="featured-movie__btn btn--color-gray" type="button">О фильме</Button>
                            <Button className="featured-movie__btn btn--size-small" type="button">
                                <Svg iconId="icon-like" />
                            </Button>
                            <Button className="featured-movie__btn btn--size-small" type="button">
                                <Svg iconId="icon-reset" />
                            </Button>
                        </div>
                    </div>
                    <div className="featured-movie__trailer"></div>
                </div>
            </div>
        </section>
    )
}