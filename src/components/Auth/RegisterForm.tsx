import { useState, type FC } from "react";
import { CustomInput } from "../../ui/CustomIput";
import { Button } from "../Button/Button";
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { registration } from "../../api/User";
import { queryClient } from "../../api/queryClient";
import { useDispatch } from "react-redux";
import { closeAuthModal } from "../../features/authModal/authModalSlice";
import { useNavigate } from "react-router";

const registrFormSchema = z.object({
    email: z.string().email("Неверный формат email"),
    name: z.string().min(1, "Введите имя"),
    surname: z.string().min(1, "Введите фамилию"),
    password: z.string().min(8, "Пароль должен быть минимум 8 символов"),
    confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Пароли не совпадают",
    path: ["confirmPassword"],
});

type IRegisterType = 'register' | 'successRegister';

type registrFormType = z.infer<typeof registrFormSchema>;

export const RegisterForm: FC = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors } } = useForm<registrFormType>({
        resolver: zodResolver(registrFormSchema)
    });
    const [registerType, setRegisterType] = useState<IRegisterType>('register');
    
    const registrationMutation = useMutation({
        mutationFn: (data: registrFormType) =>
            registration(data.email, data.password, data.name, data.surname),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["profile", "me"] });
            setRegisterType('successRegister');
            // dispatch(closeAuthModal());
        },
        onError: (error: Error) => {
            console.error("Registration error:", error);
        }
    });


    return (
        registerType === 'register' ?
            <div className="register-success">
                <h2 className="register-success__title">Регистрация завершена</h2>
                <p className="register-success__text">Используйте вашу электронную почту для входа</p>
                <Button
                    className="register__btn"
                    type="button"
                >
                    Войти
                </Button>
            </div>
        :

            <form className="register__form" onSubmit={handleSubmit((data: registrFormType) => {
                registrationMutation.mutate(data);
            })}>
                <legend className="register__form-legend">Регистрация</legend>
                <div className="register__form-inner">
                    <CustomInput
                        type="email"
                        {...register("email")}
                        id="register-user"
                        ariaLabel="register-user"
                        placeHolder="Электронная почта"
                        svgId="icon-mail"
                        error={errors.email}
                    />
                    <CustomInput
                        type="text"
                        {...register("name")}
                        id="register-name"
                        ariaLabel="register-name"
                        placeHolder="Имя"
                        svgId="icon-people"
                        error={errors.name}
                    />
                    <CustomInput
                        type="text"
                        {...register("surname")}
                        id="register-surname"
                        ariaLabel="register-surname"
                        placeHolder="Фамилия"
                        svgId="icon-people"
                        error={errors.surname}

                    />
                    <CustomInput
                        type="password"
                        {...register("password")}
                        id="register-pass"
                        ariaLabel="register-pass"
                        placeHolder="Пароль"
                        svgId="icon-pass"
                        error={errors.password}

                    />
                    <CustomInput
                        type="password"
                        {...register("confirmPassword")}
                        id="register-confirmPass"
                        ariaLabel="register-confirmPass"
                        placeHolder="Подтвердить пароль"
                        svgId="icon-pass"
                        error={errors.confirmPassword}

                    />
                </div>

                <Button
                    className="register__btn"
                    type="submit"
                    isLoading={registrationMutation.isPending}
                    disabled={registrationMutation.isPending}
                >
                    {registrationMutation.isPending ? "Регистрация..." : "Создать аккаунт"}
                </Button>

                {registrationMutation.isError && (
                    <div className="error-message">
                        {registrationMutation.error?.message || "Ошибка регистрации"}
                    </div>
                )}
            </form>
            
    );
};