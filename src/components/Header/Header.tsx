import { useEffect, useState, type FC } from "react";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";
import { CustomSearch } from "../CustomSearch/CustomSearch";
import { useDispatch, useSelector } from "react-redux";
import { openAuthModal } from "../../features/authModal/authModalSlice";
import { useQuery } from "@tanstack/react-query";
import { profile } from "../../api/User";
import { queryClient } from "../../api/queryClient";
import { Loader } from "../Loader";
import { Svg } from "../Svg/Svg";

import { setUserData, clearUserData, selectUserdata } from "../../features/userData/userDataSlice";

export const Header: FC = () => {
    const dispatch = useDispatch();

    const userData = useSelector(selectUserdata);

    const meQuery = useQuery({
        queryFn: () => profile(),
        queryKey: ["profile", "me"],
        retry: false,
        refetchOnWindowFocus: false,
    }, queryClient);

    useEffect(() => {
        if (meQuery.status === "success" && meQuery.data) {
            dispatch(setUserData(meQuery.data));
        }

        if (meQuery.status === "error") {
            dispatch(clearUserData());
        }
    }, [meQuery.status, meQuery.data, dispatch]);

    const renderAuthButton = () => {
        console.log("meQuery.status:", meQuery.status);

        switch (meQuery.status) {
            case "pending":
                return <Button className="header__btn" type="button" >
                    <Loader />
                </Button>
            case "error":
                return (
                    <>
                        <Button className="header__btn" type="button" onClick={() => dispatch(openAuthModal())}>Войти</Button>
                        <Svg className="header__nav-icon" iconId="icon-user" />
                    </>
                )
            case "success":
                return (
                    <>
                        <Button className="header__btn" type="button">
                            <Link to={`/profile/${userData.name}`}>{userData.name}</Link>
                        </Button>
                        <Svg className="header__nav-icon" iconId="icon-user" />
                    </>
                )
        }
    }
    return (
        <header className="header">
            <div className="container">
                <div className="header__wrapper">
                    <a href="#" className="header__logo-link">
                        <picture className="header__logo-picture">
                            <source media="(max-width: 756px)" srcSet="/src/assets/images/logo-mobile.png" width={80} height={32}></source>
                            <img className="header__logo-img" src="/src/assets/images/logo.png" alt="Лого" width={143} height={32} />
                        </picture>
                    </a>
                    <div className="header__box">
                        <ul className="header__nav-list">
                            <li className="header__nav-item header__nav-item--hide-mobile">
                                <Link className="header__nav-link" to={"/"}>Главная</Link>
                            </li>
                            <li className="header__nav-item">
                                <Svg className="header__nav-icon" iconId="icon-genres" />
                                <Link className="header__nav-link" to={"/genres"}>Жанры</Link>
                            </li>
                        </ul>
                        <>
                            <CustomSearch />
                            <Svg className="header__nav-icon" iconId="icon-search" />
                        </>
                        {renderAuthButton()}
                    </div>
                </div>
            </div>
        </header>
    )
}