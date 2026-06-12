import type { FC } from "react";
import { CustomInput } from "../../ui/CustomIput";
import { Button } from "../Button/Button";

export const LoginForm: FC = () => {
    return (
        <form action="POST" className="login__form">
            <div className="login__form-inner">
                <CustomInput type="text" name="login-user" id="login-user" ariaLabel="login-user" placeHolder="Электронная почта" svgId="icon-mail" />
                <CustomInput type="text" name="login-pass" id="login-pass" ariaLabel="login-pass" placeHolder="Пароль" svgId="icon-pass" />
            </div>
            <Button className="login__btn" type="submit">Войти</Button>
        </form>
    )
}