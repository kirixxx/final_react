import type { FC } from "react";
import { CustomInput } from "../../ui/CustomIput";
import { Button } from "../Button/Button";

export const RegisterForm: FC = () => {
    return (
        <form action="POST" className="register__form">
            <div className="register__form-inner">
                <CustomInput type="text" name="register-user" id="register-user" ariaLabel="register-user" placeHolder="Электронная почта" svgId="icon-mail" />
                <CustomInput type="text" name="register-name" id="register-name" ariaLabel="register-name" placeHolder="Имя" svgId="icon-people" />
                <CustomInput type="text" name="register-surname" id="register-surname" ariaLabel="register-surname" placeHolder="Фамилия" svgId="icon-people" />
                
                <CustomInput type="text" name="register-pass" id="register-pass" ariaLabel="register-pass" placeHolder="Пароль" svgId="icon-pass" />
                <CustomInput type="text" name="register-confirmPass" id="register-confirmPass" ariaLabel="register-confirmPass" placeHolder="Подтвердить пароль" svgId="icon-pass" />
            </div>
            <Button className="register__btn" type="submit">Создать аккаунт</Button>
        </form>
    )
}