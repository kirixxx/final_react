import type { FC } from "react";

interface InputProps {
    name?: string;
    ariaLabel?: string;
    id?: string;
    className: string;
    type?: 'radio' | 'text' | 'number' | 'email';
}

export const Input: FC<InputProps> = ({
    name,
    id,
    className,
    type,
    ariaLabel,
}) => {
    return (
        <input 
            type={type}
            id={id}
            className={className}
            name={name}
            aria-label={ariaLabel}
        />        
)
}