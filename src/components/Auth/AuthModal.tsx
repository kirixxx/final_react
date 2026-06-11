import { CustomInput } from "../../ui/CustomIput"
import { Button } from "../Button/Button"
import { useDispatch, useSelector } from "react-redux";
import { selectAuthModal } from "../../features/authModal/authModalSlice";

export const AuthModal = () => {
    const isOpen = useSelector(selectAuthModal);
    const dispatch = useDispatch();
    
    if (!isOpen) {
        return;
    }

    return (
        <div className="login">
            <div className="login__wrapper">
                <img className="login__logo-img" src="/src/assets/images/logo.png" alt="Лого" width={156} height={35} />
                <form action="POST" className="login__form">
                    <div className="login__form-inner">
                        <CustomInput type="text" name="login-user" id="login-user" ariaLabel="login-user" placeHolder="Электронная почта" svgId="icon-email" />
                        <CustomInput type="text" name="login-pass" id="login-pass" ariaLabel="login-pass" placeHolder="Пароль" svgId="icon-pass" />
                    </div>
                    <Button className="login__btn" type="submit">Войти</Button>
                </form>
                <Button className="login__btn btn__clear" type="button">Регистрация</Button>
            </div>
        </div>
    )
}