import type { FC } from "react";
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

type registrFormType = z.infer<typeof registrFormSchema>;

export const RegisterForm: FC = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors } } = useForm<registrFormType>({
        resolver: zodResolver(registrFormSchema)
    });

    const registrationMutation = useMutation({
        mutationFn: (data: registrFormType) =>
            registration(data.email, data.password, data.name, data.surname),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["profile", "me"] });
            dispatch(closeAuthModal());
        },
        onError: (error: Error) => {
            console.error("Registration error:", error);
        }
    });


    return (
        <form className="register__form" onSubmit={handleSubmit((data: registrFormType) => {
            registrationMutation.mutate(data);
        })}>
            <div className="register__form-inner">
                <CustomInput
                    type="email"
                    {...register("email")}
                    id="register-user"
                    ariaLabel="register-user"
                    placeHolder="Электронная почта"
                    svgId="icon-mail"
                />
                {errors.email && <span className="error">{errors.email.message}</span>}

                <CustomInput
                    type="text"
                    {...register("name")}
                    id="register-name"
                    ariaLabel="register-name"
                    placeHolder="Имя"
                    svgId="icon-people"
                />
                {errors.name && <span className="error">{errors.name.message}</span>}

                <CustomInput
                    type="text"
                    {...register("surname")}
                    id="register-surname"
                    ariaLabel="register-surname"
                    placeHolder="Фамилия"
                    svgId="icon-people"
                />
                {errors.surname && <span className="error">{errors.surname.message}</span>}

                <CustomInput
                    type="password"
                    {...register("password")}
                    id="register-pass"
                    ariaLabel="register-pass"
                    placeHolder="Пароль"
                    svgId="icon-pass"
                />
                {errors.password && <span className="error">{errors.password.message}</span>}

                <CustomInput
                    type="password"
                    {...register("confirmPassword")}
                    id="register-confirmPass"
                    ariaLabel="register-confirmPass"
                    placeHolder="Подтвердить пароль"
                    svgId="icon-pass"
                />
                {errors.confirmPassword && <span className="error">{errors.confirmPassword.message}</span>}
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