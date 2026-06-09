import type { FC } from "react";

interface InputProps {
    name?: string;
    ariaLabel?: string;
    id?: string;
    className: string;
    type?: 'radio' | 'text' | 'number' | 'email';
    placeHolder?: string;
}

export const Input: FC<InputProps> = ({
    name,
    id,
    className,
    type,
    ariaLabel,
    placeHolder
}) => {
    return (
        <input 
            type={type}
            id={id}
            className={className}
            name={name}
            placeholder={placeHolder}
            aria-label={ariaLabel}
        />        
)
}