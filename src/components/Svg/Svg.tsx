import type { FC } from "react";

interface ISvgProps {
    width?: number;
    height?: number;
    className?: string;
    iconId?: string;
}
export const Svg: FC<ISvgProps> = ({
    width=24,
    height=24,
    className,
    iconId
}) => {
    return (
        <svg className={className} width={width} height={height} aria-hidden="true">
            <use xlinkHref={`assets/sprive.svg#${iconId}`}></use>
        </svg>
    )
}