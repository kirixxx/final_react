import type { FC } from "react";
import { Button } from "../Button/Button";

export const SkeletonLoaderFeaturesMovie: FC = () => {
    return (
            <section className="loader-movie">
                <div className="container">
                    <div className="loader-movie__wrapper">
                        <div className="loader-movie__info">
                            <div className="loader-movie__description">
                                <div className="loader-movie__details">
                                    <div className="loader-movie__rating loader"></div>
                                    <span className="loader-movie__details-text loader"></span>
                                    <span className="loader-movie__details-text loader"></span>
                                    <span className="loader-movie__details-text loader"></span>
                                </div>
                                <p className="loader-movie__title loader"></p>
                                <p className="loader-movie__text loader"></p>
                            </div>
                            <div className={`loader-movie__actions`}>
                                <Button className="loader-movie__btn loader" type="button"></Button>
                                <Button className="loader-movie__btn loader" type="button"></Button>
                                <Button className={`loader-movie__btn loader`} type="button"></Button>
                                <Button className="loader-movie__btn loader" type="button"></Button>
                            </div>
                        </div>
                        <div className="loader-movie__trailer loader">
                        </div>
                    </div>
                </div>
            </section>
        )
}