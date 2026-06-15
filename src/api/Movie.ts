import {z} from 'zod';
import { validateResponse } from '../validate/validateResponse';
const SERVER = 'https://cinemaguide.skillbox.cc';

export const MovieSchema = z.object({
    id: z.number(),
    title: z.string(),
    originalTitle: z.string(),
    language: z.string(),
    releaseYear: z.number(),
    releaseDate: z.string(),
    genres: z.array(z.string()),
    plot: z.string(),
    runtime: z.number(),
    budget: z.string().nullable().optional().default(''),
    revenue: z.string().nullable().optional().default(''),
    homepage: z.string().nullable().optional().default(''),
    status: z.string(),
    posterUrl: z.string().url(),
    backdropUrl: z.string().url().optional(),
    trailerUrl: z.string().url(),
    trailerYouTubeId: z.string(),
    tmdbRating: z.number(),
    searchL: z.string(),
    keywords: z.array(z.string()),
    countriesOfOrigin: z.array(z.string()),
    languages: z.array(z.string()),
    cast: z.array(z.string()),
    director: z.string().nullable().optional(),
    production: z.string().nullable().optional(),
    awardsSummary: z.string().nullable().optional(),
});

export type MovieType = z.infer<typeof MovieSchema>;

export const MovieArraySchema = z.array(MovieSchema);

export type MovieArrayType = z.infer<typeof MovieArraySchema>;

export function getTop10Movie(): Promise<MovieArrayType> {
    return fetch(`${SERVER}/movie/top10`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
    })
    .then(validateResponse)
    .then(response => response.json())
    .then(data => MovieArraySchema.parse(data))
}