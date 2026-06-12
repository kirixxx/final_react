import { includes, z } from 'zod';
import { validateResponse } from '../validate/validateResponse';
const SERVER = 'https://cinemaguide.skillbox.cc/';

export const UserScheme = z.object({
    name: z.string(),
    surname: z.string(),
    email: z.string(),
    favorites: z.array,
})

export type User = z.infer<typeof UserScheme>;

export function login(email: string, password: string): Promise<void> {
    return fetch(`${SERVER}/auth/login`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify({ email, password })
        }
    )
        .then(validateResponse)
        .then(() => undefined)
}

export function logout(): Promise<void> {
    return fetch(`${SERVER}/auth/logout`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "include",
    })
        .then(validateResponse)
        .then(() => undefined)
}

export function register(email: string, password: string, name: string, surname: string) {
    return fetch(`${SERVER}/user`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify({ email, password, name, surname })
    })
        .then(validateResponse)
        .then(() => undefined)
}