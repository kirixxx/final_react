import type { FC } from "react";
import { Input } from "../components/Input/Input";
import { Svg } from "../components/Svg/Svg";

interface CustomInputProps  {
    className?: string;
    type?: 'radio' | 'text' | 'number' | 'email' | 'search' | 'password';
    name?: string;
    ariaLabel?: string;
    id?: string;
    svgId?: string;
    svgWidth?: number,
    svgHeight?: number,
    placeHolder?: string, 
}

export const CustomInput: FC<CustomInputProps> = ({
    className='custom-input',
    type,
    name,
    ariaLabel,
    id,
    svgId,
    placeHolder,
    svgWidth=24,
    svgHeight=24,
    ...props
}) => {
    return (
        <div className={className}>
            <Svg className={`${className}__icon`} width={svgWidth} height={svgHeight} iconId={svgId} />
            <Input className={`${className}__field`} type={type} name={name} id={id} placeholder={placeHolder} ariaLabel={ariaLabel} {...props} />
        </div>
    )
}