import { CustomInput } from "../../ui/CustomIput"
import { Button } from "../Button/Button"
import { useDispatch, useSelector } from "react-redux";
import { closeAuthModal, selectAuthModal } from "../../features/authModal/authModalSlice";
import { Svg } from "../Svg/Svg";
import { useState } from "react";
import { LoginForm } from "./LoginForm";
import { RegisterForm } from "./RegisterForm";

export const AuthModal = () => {
    const isOpen = useSelector(selectAuthModal);
    const dispatch = useDispatch();
    const [ authType, setAuthType ] = useState<string>('login');

    const changeAuthType = () => {
        setAuthType(authType === 'login' ? 'register': 'login');
    }

    if (!isOpen) {
        return;
    }

    return (
        <div className="login">
            <div className="login__wrapper">
                <div className="login__icon" onClick={() => dispatch(closeAuthModal())}>
                    <Svg className="login__icon-close" iconId="icon-close" />
                </div>
                <img className="login__logo-img" src="/src/assets/images/logoBlack.png" alt="Лого" width={132} height={29} />
                {authType === "login" ? <LoginForm /> : <RegisterForm /> }
                <Button className="login__btn btn__clear" type="button" onClick={changeAuthType}>{authType === 'login' ? "Регистрация": "У меня есть аккаунт"}</Button>
            </div>
        </div>
    )
}