import type { FC } from "react";
import { Input } from "../Input/Input";
import { Svg } from "../Svg/Svg";
import { CustomInput } from "../../ui/CustomIput";

export const CustomSearch: FC = () => {
    return (
        <CustomInput type="search" name="search" id="search" placeHolder="Поиск" ariaLabel="Поиск фильмов" svgId="icon-search" />
    )
}