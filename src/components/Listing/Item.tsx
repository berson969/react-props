import "./listing.css";
import { format } from "money-formatter";
import React from "react";

interface ItemProps {
    item: {
    listing_id: number,
        url: string,
    title: string,
    price: number,
    currency_code: string,
    quantity: number,
    MainImage:  {
    url_570xN: string
    }
}}
export const Item: React.FC<ItemProps> = ({ item }) => {
    const { url, MainImage, title, currency_code,  price, quantity }= item;
    const title_short = (title && title.length > 50) ? title.slice(0, 50) + "..." : title;
    const formattedPrice: string = format(currency_code, price)
    let level: string;
    if (quantity > 20) {
        level = "level-high";
    } else if (quantity > 10) {
        level = "level-medium";
    } else {
        level = "level-low";
    }

    return (
        <div className="item">
            <div className="item-image">
                <a href={ url }>
                    <img src={ MainImage.url_570xN } alt={ title }/>
                </a>
            </div>
            <div className="item-details">
                <p className="item-title">{ title_short }</p>
                <p className="item-price">{ formattedPrice }</p>
                <p className={`item-quantity ${level}`}>{ quantity } left</p>
            </div>
        </div>
    )
}
