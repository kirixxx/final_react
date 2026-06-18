import type { FC } from "react";

export const SkeletonLoaderGenresPage: FC = () => {
    return (
        <section className="loader-gen">
            <div className="container">
                <div className="loader-gen__wrapper">
                    <h2 className="loader-gen__title">Жанры фильмов</h2>
                    <ul className="loader-gen__list">
                        <li className="loader-gen__item loader"></li>
                        <li className="loader-gen__item loader"></li>
                        <li className="loader-gen__item loader"></li>
                        <li className="loader-gen__item loader"></li>
                        <li className="loader-gen__item loader"></li>
                        <li className="loader-gen__item loader"></li>
                        <li className="loader-gen__item loader"></li>
                        <li className="loader-gen__item loader"></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}