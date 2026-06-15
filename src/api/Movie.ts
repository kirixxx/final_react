import { z, ZodAny, ZodError } from 'zod';
import { validateResponse } from '../validate/validateResponse';
const SERVER = 'https://cinemaguide.skillbox.cc';

export const MovieSchema = z.object({
    // ✅ Обязательные поля (всегда есть в ответе)
    id: z.number(),
    title: z.string(),
    originalTitle: z.string(),
    language: z.string(),
    releaseYear: z.number().optional().nullable(),
    releaseDate: z.string().optional().nullable(),
    genres: z.array(z.string()),
    plot: z.string(),
    runtime: z.number(),
    status: z.string(),
    posterUrl: z.string().url().optional().nullable(),
    trailerUrl: z.string().url().optional(),
    trailerYouTubeId: z.string().optional(),
    tmdbRating: z.number().optional(),
    searchL: z.string().optional(),
    
    budget: z.string().nullable().optional().default(''),
    revenue: z.string().nullable().optional().default(''),
    homepage: z.string().nullable().optional().default(''),
    director: z.string().nullable().optional().default(''),
    production: z.string().nullable().optional().default(''),
    awardsSummary: z.string().nullable().optional().default(''),
    
    backdropUrl: z.string().url().nullable().optional(),
    keywords: z.array(z.string()).nullable().optional().default([]),
    countriesOfOrigin: z.array(z.string()).nullable().optional().default([]),
    languages: z.array(z.string()).nullable().optional().default([]),
    cast: z.array(z.string()).nullable().optional().default([]),
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
        .then(data => {
            console.log('Raw data:', data);
            console.log('Data type:', typeof data);
            console.log('Is array:', Array.isArray(data));
            console.log('First item:', data[0]);
            
            try {
                const parsed = MovieArraySchema.parse(data);
                console.log('Parsed successfully:', parsed);
                return parsed;
            } catch (error: any) {
                console.error('Zod validation error:', error);
                throw error;
            }
        });
}

export function getRandomMovie(): Promise<MovieType> {
    return fetch(`${SERVER}/movie/random`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(validateResponse)
    .then(response => response.json())
    .then(data => MovieSchema.parse(data))
}