import z from "zod";
import { validateResponse } from "../validate/validateResponse";
import { MovieArraySchema, type MovieArrayType } from "./Movie";
import { ProfileScheme, type Profile } from "./User";
const SERVER = 'https://cinemaguide.skillbox.cc';

export const ResponseSchema = z.object({
    result: z.boolean(),
});

export type Response = z.infer<typeof ResponseSchema>;

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

export function deleteFavoriteMovie(movieId: number): Promise<Response> {
    return fetch(`${SERVER}/favorites/${movieId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "include",
    })
        .then(validateResponse)
        .then(response => response.json())
        .then(data => ResponseSchema.parse(data))
}

export function addFavoriteMovie(movieId: number): Promise<Response> {
    return fetch(`${SERVER}/favorites`, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        credentials: "include",
        body: new URLSearchParams({ id: movieId.toString() })
    })
        .then(validateResponse)
        .then(response => response.json())
        .then((data) => {
            console.log(data);
            return    ResponseSchema.parse(data)}
        )
}