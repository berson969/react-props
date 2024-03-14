import { Star } from "./Star.tsx";
import React from "react";

interface StarProps {
    ratio: number
}

export const Stars: React.FC<StarProps> = ({ ratio }) => {

    const stars = [];
    for(let i: number = 0; i < ratio; i++) {
        stars.push(<Star key={i} type="star" />);
    }
    if (ratio % 1 >= 0.5) {
        stars.push(<Star key={stars.length} type="star_half" />);
    }

    return (
        <div className="flex justify-items-start gap-0 text-amber-400">
            {(stars.length) ? stars : <br/>}
        </div>
    )
}
