import type { FC } from "react";
import type { MovieType } from "../../api/Movie"

interface IAboutMovie {
    movie: MovieType;
}

export const AboutMovie: FC<IAboutMovie> = ({
    movie,
}) => {
    return (
        <section className="about-movie">
            <div className="container">
                <div className="about-movie__wrapper">
                    <h2 className="about-movie__title">О фильме</h2>
                    <ul className="about-movie__list">
                        <li className="about-movie__item">
                            <div className="about-movie__label">
                                <span className="about-movie__text">Язык оригинала</span>
                                <div className="about-movie__dots"></div>
                            </div>
                            <span className="about-movie__text">{movie.language ? movie.language : 'Нет данных'}</span>
                        </li>
                        <li className="about-movie__item">
                            <div className="about-movie__label">
                                <span className="about-movie__text">Бюджет</span>
                                <div className="about-movie__dots"></div>
                            </div>
                            <span className="about-movie__text">{movie.budget ? movie.budget : 'Нет данных'}</span>
                        </li>
                        <li className="about-movie__item">
                            <div className="about-movie__label">
                                <span className="about-movie__text">Выручка</span>
                                <div className="about-movie__dots"></div>
                            </div>
                            <span className="about-movie__text">{movie.revenue ? movie.revenue : 'Нет данных'}</span>
                        </li>
                        <li className="about-movie__item">
                            <div className="about-movie__label">
                                <span className="about-movie__text">Режиссер</span>
                                <div className="about-movie__dots"></div>
                            </div>
                            <span className="about-movie__text">{movie.director ? movie.director : 'Нет данных'}</span>
                        </li>
                        <li className="about-movie__item">
                            <div className="about-movie__label">
                                <span className="about-movie__text">Продакшен</span>
                                <div className="about-movie__dots"></div>
                            </div>
                            <span className="about-movie__text">{movie.production ? movie.production : 'Нет данных'}</span>
                        </li>
                        <li className="about-movie__item">
                            <div className="about-movie__label">
                                <span className="about-movie__text">Награды</span>
                                <div className="about-movie__dots"></div>
                            </div>
                            <span className="about-movie__text">{movie.awardsSummary ? movie.awardsSummary : 'Нет данных'}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}