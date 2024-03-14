import React from "react";
import "./listing.css";

import JSONData from "./etsy.json";
import { Item } from "./Item.tsx";


export const Listing: React.FC = () => {

    return (
        <div className="items-container">
            <div className="item-list">
                {JSONData.map((item) => item.state === "active" && (
                    <Item key={item.listing_id} item={item} />
                ))}
            </div>
        </div>
    )
}
