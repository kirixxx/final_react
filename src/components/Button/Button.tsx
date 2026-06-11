import type { ButtonHTMLAttributes, FC, ReactNode } from "react"
import { Loader } from "../Loader/Loader"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode,
    isLoading?: boolean,
    isDisabled?: boolean,
    kind?: 'primary' | 'secondary',
    type?: 'button' | 'reset' | 'submit',
}

export const Button: FC<ButtonProps> = ({
    isDisabled,
    isLoading,
    kind,
    className,
    children,
    type,
    onClick,
    ...props
}) => {
    return (
        <button
            disabled={isDisabled}
            className={className}
            data-kind={kind}
            type={type}
            onClick={onClick}>
            {isLoading ? <Loader /> : children}
        </button>
    )
}