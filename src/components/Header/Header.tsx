import { useState, type FC } from "react";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";
import { CustomSearch } from "../CustomSearch/CustomSearch";
import { useDispatch } from "react-redux";
import { openAuthModal } from "../../features/authModal/authModalSlice";

export const Header: FC = () => {
    const dispatch = useDispatch();    

    return (
        <header className="header">
            <div className="container">
                <div className="header__wrapper">
                    <a href="#" className="header__logo-link">
                        <img className="header__logo-img" src="/src/assets/images/logo.png" alt="Лого" width={143} height={32}/>
                    </a>
                    <div className="header__box">
                        <ul className="header__nav-list">
                            <li className="header__nav-item">
                                <Link className="header__nav-link" to={"/"}>Главная</Link>
                            </li>
                            <li className="header__nav-item">
                                <Link className="header__nav-link" to={"/genres"}>Жанры</Link>
                            </li>
                        </ul>
                        <CustomSearch />
                    </div>
                    <Button className="header__btn" type="button" onClick={() => dispatch(openAuthModal())}>Войти</Button>

                </div>
            </div>
        </header>
    )
}