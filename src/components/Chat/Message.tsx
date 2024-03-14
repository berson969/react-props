import React from "react";
import "./messageHistory.css";
import { MessageProps } from "./messages";

export const Message: React.FC<MessageProps> = ({ message }) => {
    const { from, time, text } = message;
    return (
        <li>
            <div className="message-data">
                <span className="message-data-name">{ from.name }</span>
                <span className="message-data-time">{ time }</span>
            </div>
            <div className="message my-message">
                { text }
            </div>
        </li>
    )
}
