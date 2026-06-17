import { useMutation } from "@tanstack/react-query";
import { addFavoriteMovie, deleteFavoriteMovie } from "../api/favorites";
import { queryClient } from "../api/queryClient";


type likeMovie = {
    id: number;
}

export const useFavorites = () => {

    const invalidateQueris = () => {
        queryClient.invalidateQueries({ queryKey: ["profile", "me"] })
        queryClient.invalidateQueries({ queryKey: ["movie", "favorites"] })
    }
    
    const likeMutation = useMutation({
        mutationFn: (data: likeMovie) => addFavoriteMovie(data.id),
        onSuccess: (data) => {
            if (data) {
                console.log('like')
                invalidateQueris();
            }
        },
        onError: (error) => {
            console.error("likeMutation: ", error)
        }
    })

    const unlikeMutation = useMutation({
        mutationFn: (data: likeMovie) => deleteFavoriteMovie(data.id),
        onSuccess: (data) => {
            if (data) {
                invalidateQueris();
            }
        },
        onError: (error) => {
            console.error("unlikeMutation: ", error)
        }
    });

    return {
        like: likeMutation.mutate,
        unlike: unlikeMutation.mutate
    }
}