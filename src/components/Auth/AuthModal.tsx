import { CustomInput } from "../../ui/CustomIput"
import { Button } from "../Button/Button"
import { useDispatch, useSelector } from "react-redux";
import { closeAuthModal, selectAuthModal } from "../../features/authModal/authModalSlice";
import { Svg } from "../Svg/Svg";

export const AuthModal = () => {
    const isOpen = useSelector(selectAuthModal);
    const dispatch = useDispatch();
    
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
                <form action="POST" className="login__form">
                    <div className="login__form-inner">
                        <CustomInput type="text" name="login-user" id="login-user" ariaLabel="login-user" placeHolder="Электронная почта" svgId="icon-mail" />
                        <CustomInput type="text" name="login-pass" id="login-pass" ariaLabel="login-pass" placeHolder="Пароль" svgId="icon-pass" />
                    </div>
                    <Button className="login__btn" type="submit">Войти</Button>
                </form>
                <Button className="login__btn btn__clear" type="button">Регистрация</Button>
            </div>
        </div>
    )
}