import type { FC, ReactNode } from "react"
import { Loader } from "../Loader/Loader"

interface ButtonProps {
    className: string,
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
    ...props
}) => {
    return (
        <button
            disabled={isDisabled}
            className={className}
            data-kind={kind}
            type={type}>
            {isLoading ? <Loader /> : children}
        </button>
    )
}