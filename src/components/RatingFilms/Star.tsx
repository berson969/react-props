import React from "react";

interface StarProps {
    type: string;
}

export const Star: React.FC<StarProps> = ({ type }) => {
    return (
        <i className="material-icons">{ type }</i>
    )
}
