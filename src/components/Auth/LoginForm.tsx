import type { FC } from "react";
import { CustomInput } from "../../ui/CustomIput";
import { Button } from "../Button/Button";

import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { queryClient } from "../../api/queryClient";
import { login } from "../../api/User";
import { useDispatch } from "react-redux";
import { authModalSlice, closeAuthModal } from "../../features/authModal/authModalSlice";

const loginFormSchema = z.object({
    email: z.string().email("no correct format"),
    password: z.string().min(8)
})

type loginFormType = z.infer<typeof loginFormSchema>;

export const LoginForm: FC = () => {
    const dispathcAuthModal = useDispatch();

    const { register, handleSubmit } = useForm<loginFormType>({
        resolver: zodResolver(loginFormSchema)
    });

    const loginMutation = useMutation({
        mutationFn: (data: loginFormType) => login(data.email, data.password),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["profile", "me"] });
            dispathcAuthModal(closeAuthModal());
        }
    })

    return (
        <form action="POST" className="login__form" onSubmit={handleSubmit((data) => {
            loginMutation.mutate(data)
        })}>
            <div className="login__form-inner">
                <CustomInput type="text" {...register("email")} id="login-user" ariaLabel="login-user" placeHolder="Электронная почта" svgId="icon-mail" />
                <CustomInput type="password" {...register("password")} id="login-pass" ariaLabel="login-pass" placeHolder="Пароль" svgId="icon-pass" />
            </div>
            <Button className="login__btn" type="submit" isLoading={loginMutation.isPending}>Войти</Button>
        </form>
    )
}