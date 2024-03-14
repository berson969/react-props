import React from "react";
import { Movie } from "./MovieType.ts";

import data from "./films.json";
import { Cards } from "./Cards.tsx";



export const MovieCards: React.FC = () => {

    const movies: Movie[] = data.docs;

    return (
        <div className="flex bg-[#faf7f2]">
            <div className="flex flex-wrap gap-32 p-20 justify-center items-end">
                {movies.map(movie => (
                    <Cards key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    )
}
