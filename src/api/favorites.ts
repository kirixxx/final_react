import { validateResponse } from "../validate/validateResponse";
import { MovieArraySchema, type MovieArrayType } from "./Movie";
import { ProfileScheme, type Profile } from "./User";
const SERVER = 'https://cinemaguide.skillbox.cc';

export function getFavoritesMovie(): Promise<MovieArrayType> {
    return fetch(`${SERVER}/favorites`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "include",
    })
        .then(validateResponse)
        .then(response => response.json())
        .then(data => MovieArraySchema.parse(data))
}

export function deleteFavoriteMovie(movieId: number): Promise<Profile> {
    return fetch(`${SERVER}/favorites`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify(movieId)
    })
        .then(validateResponse)
        .then(response => response.json())
        .then(data => ProfileScheme.parse(data))
}

export function addFavoriteMovie(movieId: number): Promise<Profile> {
    return fetch(`${SERVER}/favorites`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify(movieId)
    })
        .then(validateResponse)
        .then(response => response.json())
        .then(data => ProfileScheme.parse(data))
}