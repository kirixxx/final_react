import type { FC } from "react";
import { useSelector } from "react-redux";
import { selectUserdata } from "../../features/userData/userDataSlice";
import { Svg } from "../Svg/Svg";
import { getInitialsFromName } from "../../utils/formatShortName";
import { Button } from "../Button/Button";

export const ProfileSettings: FC = () => {

    const userData = useSelector(selectUserdata);

    return (
        <div className="profile-settings">
            <div className="profile-settings__data">
                <div className="profile-settings__info">
                    <div className="profile-settings__ava profile-settings--size-xl">{getInitialsFromName(userData.name, userData.surname)}</div>
                    <h3 className="profile-settings__title">Имя Фамилия</h3>
                    <span className="profile-settings__text">{`${userData.name} ${userData.surname}`}</span>
                </div>
                <div className="profile-settings__info">
                    <div className="profile-settings__ava profile-settings--size-xl">
                        <Svg className="profile-settings__icon" iconId="icon-mail" />
                    </div>
                    <h3 className="profile-settings__title">Элекронная почта</h3>
                    <span className="profile-settings__text">{userData.email}</span>
                </div>
            </div>
            <Button className="profile-settings__btn" type="button">Выйти из аккаунта</Button>
        </div>
    )
}