import type { FC } from "react";
import { Input } from "../components/Input/Input";

interface CustomInputProps {
    type?: 'radio' | 'text' | 'number' | 'email';
    name?: string;
    ariaLabel?: string;
    id?: string;
    svgId?: string;
    svgWidth?: number,
    svgHeight?: number,
    placeHolder?: string, 
}

export const CustomInput: FC<CustomInputProps> = ({
    type,
    name,
    ariaLabel,
    id,
    svgId,
    placeHolder,
    svgWidth=24,
    svgHeight=24
}) => {
    return (
        <div className="custom-input">
            <svg className="custom-input__icon" width={svgWidth} height={svgHeight} aria-hidden="true">
                <use xlinkHref={`assets/sprive.svg#${svgId}`}></use>
            </svg>
            <Input className="custom-input__field" type={type} name={name} id={id} placeHolder={placeHolder} ariaLabel={ariaLabel} />
        </div>
    )
}