import { useState, type FC } from "react";
import { Button } from "../../components/Button/Button";
import { Svg } from "../../components/Svg/Svg";
import { FavoritesMovie } from "../../components/FavoritesMovie/FavoritesMovie";
import { ProfileSettings } from "../../components/ProfileSettings/ProfileSettings";
import { useMediaQuery } from 'react-responsive';

type profileType = 'favorites' | 'settings';

export const ProfilePage: FC = () => {
    const isMobile = useMediaQuery({ maxWidth: 376 });
    const [contentType, setContentType] = useState<profileType>('favorites');

    const isActiveBtn = (btnSet: string) => {
        return btnSet === contentType ? 'active' : '';
    }

    const changeContentType = (contentType: profileType) => {
        setContentType(contentType);
    }
    return (
        <section className="profile">
            <div className="container">
                <div className="profile__wrapper">
                    <h2 className="profile__title">Мой аккаунт</h2>
                    <div className="profile__menu">
                        <Button className={`btn profile__menu-btn ${isActiveBtn('favorites')}`} type="button" onClick={() => changeContentType('favorites')}>
                            <Svg className="profile__menu-icon" iconId="icon-like" />
                            <span className="profile__menu-text">{isMobile ? 'Избранное' : 'Избранные фильмы'}</span>
                        </Button>
                        <Button className={`btn profile__menu-btn ${isActiveBtn('settings')}`} type="button" onClick={() => changeContentType('settings')}>
                            <Svg className="profile__menu-icon" iconId="icon-user" />
                            <span className="profile__menu-text">{isMobile ? 'Настройки' : 'Настройки аккаунта'}</span>
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