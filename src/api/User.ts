import { includes, z } from 'zod';
import { validateResponse } from '../validate/validateResponse';
const SERVER = 'https://cinemaguide.skillbox.cc';

export const ProfileScheme = z.object({
    name: z.string(),
    surname: z.string(),
    email: z.string(),
    favorites: z.array(z.string()),
})

export type Profile = z.infer<typeof ProfileScheme>;

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
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "include",
    })
        .then(validateResponse)
        .then(() => undefined)
}

export function registration(email: string, password: string, name: string, surname: string):Promise<void> {
    if (!email || !password || !name || !surname) {
        return Promise.reject(new Error("All fields are required"));
    }
    
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

export function profile():Promise<Profile> {
    return fetch(`${SERVER}/profile`, {
        method: "GET",
        credentials: "include",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(validateResponse)
    .then(response => response.json())
    .then(data => ProfileScheme.parse(data))
} 