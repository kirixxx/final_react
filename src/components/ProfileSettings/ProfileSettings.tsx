import type { FC } from "react";
import { useSelector } from "react-redux";
import { selectUserdata } from "../../features/userData/userDataSlice";
import { Svg } from "../Svg/Svg";
import { getInitialsFromName } from "../../utils/formatShortName";
import { Button } from "../Button/Button";
import { useMutation, useQuery } from "@tanstack/react-query";
import { logout } from "../../api/User";
import { queryClient } from "../../api/queryClient";
import { useNavigate } from "react-router";

export const ProfileSettings: FC = () => {

    const userData = useSelector(selectUserdata);
    const navigate = useNavigate();

    const logoutMutation = useMutation({
        mutationFn: () => logout(),
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ["profile", "me"]})
            navigate('/')
        }
    }, queryClient);

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
            <Button className="profile-settings__btn" type="button" onClick={() => logoutMutation.mutate()}>Выйти из аккаунта</Button>
        </div>
    )
}