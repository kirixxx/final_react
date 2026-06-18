import type { FC } from "react";
import { Button } from "../Button/Button";

export const SkeletonLoaderGenres: FC = () => {
    return (
        <section className="loader-genre">
            <div className="container">
                <div className="loader-genre__wrapper">
                    <Button className="loader-genre__btn loader"></Button>
                    <ul className="loader-genre__list">
                        <li className="loader-genre__item loader"></li>
                        <li className="loader-genre__item loader"></li>
                        <li className="loader-genre__item loader"></li>
                        <li className="loader-genre__item loader"></li>
                        <li className="loader-genre__item loader"></li>
                        <li className="loader-genre__item loader"></li>
                        <li className="loader-genre__item loader"></li>
                        <li className="loader-genre__item loader"></li>
                        <li className="loader-genre__item loader"></li>
                        <li className="loader-genre__item loader"></li>
                    </ul>
                    <Button className="loader-genre__btn-load" >Показать еще</Button>
                </div>
            </div>
        </section>
    )
}