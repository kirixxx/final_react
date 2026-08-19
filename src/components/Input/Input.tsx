import { forwardRef, type ChangeEventHandler } from "react";

interface InputProps {
    name?: string;
    ariaLabel?: string;
    id?: string;
    className?: string;
    type?: 'radio' | 'text' | 'number' | 'email' | 'search' | 'password';
    placeholder?: string;
    defaultValue?: string;
    value?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({
    name,
    id,
    className = '',
    type = 'text',
    ariaLabel,
    placeholder,
    defaultValue,
    value,
    onChange,
    ...props
}, ref) => {
    return (
        <input
            ref={ref}
            type={type}
            id={id}
            className={className}
            name={name}
            placeholder={placeholder}
            aria-label={ariaLabel}
            defaultValue={defaultValue}
            value={value}
            onChange={onChange}
            {...props}
        />
    );
});