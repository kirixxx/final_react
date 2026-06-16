import { useState, type FC } from "react";
import { Button } from "../../components/Button/Button";
import { Svg } from "../../components/Svg/Svg";
import { FavoritesMovie } from "../../components/FavoritesMovie/FavoritesMovie";
import { ProfileSettings } from "../../components/ProfileSettings/ProfileSettings";

type profileType = 'favorites' | 'settings';

export const ProfilePage: FC = () => {

    const [contentType, setContentType] = useState<profileType>('favorites');

    const changeContentType = (contentType: profileType) => {
        setContentType(contentType);
    }
    return (
        <section className="profile">
            <div className="container">
                <div className="profile__wrapper">
                    <h2 className="profile__title">Мой аккаунт</h2>
                    <div className="profile__menu">
                        <Button className="profile__menu-btn" type="button" onClick={() => changeContentType('favorites')}>
                            <Svg className="profile__menu-icon" iconId="icon-like" />
                            <span>Избранные фильмы</span>
                        </Button>
                        <Button className="profile__menu-btn" type="button" onClick={() => changeContentType('settings')}>
                            <Svg className="profile__menu-icon" iconId="icon-user" />
                            <span>Настройка аккаунта</span>
                        </Button>
                    </div>
                    <div className="profile__content">
                        {contentType === 'favorites' ? <FavoritesMovie /> : <ProfileSettings />}
                    </div>
                </div>
            </div>
        </section>
    )
}