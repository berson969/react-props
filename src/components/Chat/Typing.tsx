import React from 'react';
import { MessageProps } from "./messages";
import TypingAnimation from "./TypingAnimation.tsx";

export const Typing: React.FC<MessageProps> = ({ message }) => {
    const { from, time } = message;
    return (
        <li className="clearfix">
            <div className="message-data">
                <span className="message-data-time">{ time }</span>
                <span className="message-data-name">{ from.name }</span>
                <i className="fa fa-circle me"></i>
            </div>
            <TypingAnimation />
        </li>
    )
}
