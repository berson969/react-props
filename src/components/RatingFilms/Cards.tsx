import React from "react";

import { Stars } from "./Stars.tsx";
import { Movie } from "./MovieType.ts";

interface CardsProps {
    movie: Movie;
}

export const Cards: React.FC<CardsProps> = ({ movie }) => {
    const {name, rating, poster, genres} = movie
    const ratio = (rating.kp + rating.imdb) / 4

    return (
        <div className="w-[500px] h-auto bg-white flex shadow-md">

            <div className="flex relative">
                <div className="w-[120px] ">
                    <div className="absolute top-[-50px] left-[20px] flex w-[110px] h-[180px]">
                        <img className="object-cover w-full h-full" src={poster.previewUrl} alt={ name }/>
                    </div>
                    <ul className="absolute top-[-50px] left-[100px] line-height-12px list-none">
                        {genres.map((genre: { name:  string }) => (
                            <li key={ genre.name }>
                                    <span className="bg-[#ff982c] font-dejavu text-10px uppercase  text-[#ffe011] p-1">
                                        { genre.name }
                                    </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="ml-12 flex flex-col p-4 flex-1">
                <div className="flex justify-end text-[#9c948a] ">
                    <i className="material-icons ml-1 ">favorite</i>
                    <i className="material-icons">share</i>
                </div>
                <div className="font-bold font-dejavu text-[#6f6f6f] text-2xl">{ name }</div>
                <Stars ratio={ ratio }/>
                <div className="font-dejavu flex">
                    <button className="bg-[#9c948a] text-white px-4 py-2 rounded">
                        Купить за $1
                    </button>
                    <a href="#" className="flex items-center ml-1 text-[#9c948a]">
                        Подробней
                        <i className="material-icons">arrow_forward</i>
                    </a>
                </div>
            </div>
        </div>
    )
}
