import type { FC } from "react";

export const TopMovie: FC = () => {
    return (
        <section className="top-movie">
            <div className="container">
                <div className="top-movie__wrapper">
                    <h2 className="top-movie__title">Топ 10 фильмов</h2>
                    <ul className="top-movie__list">
                        <li className="top-movie__item">
                            {/* <img src="#" alt="Карточка фильма" className="top-movie__img" /> */}
                        </li>
                        <li className="top-movie__item">
                        </li>
                        <li className="top-movie__item">
                        </li>
                        <li className="top-movie__item">
                        </li>
                        <li className="top-movie__item">
                        </li>
                        <li className="top-movie__item">
                        </li>
                        <li className="top-movie__item">
                        </li>
                        <li className="top-movie__item">
                        </li>
                        <li className="top-movie__item">
                        </li>
                        <li className="top-movie__item">
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}