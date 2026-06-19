import { useEffect, useState, type FC } from "react";
import { CustomInput } from "../../ui/CustomIput";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getMovies, type MovieArrayType, type MovieType } from "../../api/Movie";
import { useDebounce } from "../../hooks/useDebounce";
import { SearchMoiveCard } from "../SearchMoiveCard/SearchMoiveCard";

interface ICustomSearch {
    limitMovies?: number;
}
export const CustomSearch: FC<ICustomSearch> = ({
    limitMovies = 5,
}) => {
    const [titleValue, setTitleValue] = useState<string>('');
    const debouncedValue = useDebounce(titleValue, 300);
    const [fetchMovies, setFetchMovies] = useState<MovieArrayType>([]);
    const [showModal, setShowModal] = useState<boolean>(false);

    useEffect(() => {
        if (debouncedValue.trim().length >= 2) {
            console.log("movieMutation",)
            movieMutation.mutate(debouncedValue);
        } else if (debouncedValue.trim().length === 0) {
            if (fetchMovies) {
                setFetchMovies([]);
                setShowModal(false);
            }
        }
    }, [debouncedValue]);

    const movieMutation = useMutation({
        mutationFn: (title: string) => getMovies(title),
        onSuccess: (data) => {
            console.log("movieMutation2")
            setFetchMovies(data)
            setShowModal(true)
        }
    })

    const closeSearchModal = () => {
        setShowModal(false);
        setTitleValue('');
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitleValue(e.target.value);
    };
    return (
        <>
            <CustomInput
                className="custom-search"
                type="search"
                name="search"
                id="search"
                placeHolder="Поиск"
                ariaLabel="Поиск фильмов"
                svgId="icon-search"
                value={titleValue}
                onChange={handleChange}
            />
            {showModal && (
                <div className="search-modal">
                    <div className="search-modal__wrapper">
                        <ul className="search-modal__list">
                            {fetchMovies.slice(0, limitMovies).map(movie => (
                                <li className="search-modal__item" key={movie.id}>
                                    <SearchMoiveCard movie={movie} closeModal={closeSearchModal} />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </>
    )
}