import React from "react";
import "./messageHistory.css";
import messages from "./messages";

import { MessageHistory } from "./MessageHistory.tsx";


export const Chat: React.FC = () => {
    return (
        <div className="body-container">
            <div className="clearfix container">
                <div className="chat">
                    <div className="chat-history">
                        <MessageHistory list={messages} />
                    </div>
                </div>
            </div>
        </div>
    )
}
