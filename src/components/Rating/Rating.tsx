import type { FC } from "react";
import { Svg } from "../Svg/Svg";

interface RatingProps {
    size?: 'small' | 'large';
    ratingValue: number;
}

const sizeConfig = {
    small: {
        iconWidth: 16,
        iconHeight: 16,
    },
    large: {
        iconWidth: 10,
        iconHeight: 10,
    }
}

export const Rating: FC<RatingProps> = ({
    size = 'large',
    ratingValue,
}) => {

    const { iconWidth, iconHeight } = sizeConfig[size];
    
    return (
        <div className={`custom-rating ${size === 'small' ? 'custom-rating--size-small' : ''}`}>
            <Svg className="custom-rating__icon" width={iconWidth} height={iconHeight} iconId="icon-star" />
            <span className="custom-rating__value">{ratingValue}</span>
        </div>
    )
}