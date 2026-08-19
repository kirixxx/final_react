import type { FC } from "react";
import sprite from '../../assets/images/sprite.svg'

interface ISvgProps {
    width?: number;
    height?: number;
    className?: string;
    iconId?: string;
    onClick?: () => void;
}
export const Svg: FC<ISvgProps> = ({
    width=24,
    height=24,
    className,
    iconId,
    onClick
}) => {
    return (
        <svg className={className} width={width} height={height} aria-hidden="true" onClick={onClick}>
            <use xlinkHref={`${sprite}#${iconId}`}></use>
        </svg>
    )
}