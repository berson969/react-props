import React from "react";
import "./messageHistory.css";
import { MessageProps } from "./messages";

export const Response: React.FC<MessageProps> = ({ message }) => {
    const { from, time, text } = message;
    return (
        <li className="clearfix">
            <div className="message-data align-right">
                <span className="message-data-time">{ time }</span>
                <span className="message-data-name">{ from.name }</span>
                <i className="fa fa-circle me"></i>
            </div>
            <div className="message other-message float-right">
                { text }
            </div>
        </li>
    )
}
