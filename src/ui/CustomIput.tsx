import type { FC } from "react";
import { Input } from "../components/Input/Input";
import { Svg } from "../components/Svg/Svg";
import type { FieldError } from "react-hook-form";

interface CustomInputProps {
    className?: string;
    type?: 'radio' | 'text' | 'number' | 'email' | 'search' | 'password';
    name?: string;
    ariaLabel?: string;
    id?: string;
    svgId?: string;
    svgWidth?: number,
    svgHeight?: number,
    placeHolder?: string,
    error?: FieldError;
}

export const CustomInput: FC<CustomInputProps> = ({
    className = 'custom-input',
    type,
    name,
    ariaLabel,
    id,
    svgId,
    placeHolder,
    svgWidth = 24,
    svgHeight = 24,
    error,
    ...props
}) => {
    return (
        <div className={`${className} ${error ? 'error' : ''}`}>
            <Svg className={`${className}__icon`} width={svgWidth} height={svgHeight} iconId={svgId} />
            <Input className={`${className}__field`} type={type} name={name} id={id} placeholder={placeHolder} ariaLabel={ariaLabel} {...props} />
            {/* {error && <span className={`${className}__error-text`}>{error.message}</span>} */}
        </div>
    )
}