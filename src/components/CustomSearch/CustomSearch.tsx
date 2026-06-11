import type { FC } from "react";
import { CustomInput } from "../../ui/CustomIput";

export const CustomSearch: FC = () => {
    return (
        <CustomInput className="custom-search" type="search" name="search" id="search" placeHolder="Поиск" ariaLabel="Поиск фильмов" svgId="icon-search" />
    )
}