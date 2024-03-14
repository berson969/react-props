import React, { useRef, useEffect } from "react";
import "./messageHistory.css";

import { Response } from "./Response.tsx";
import { Message } from "./Message.tsx";
import { Typing } from "./Typing.tsx";
import { HistoryProps } from "./messages"

export const MessageHistory: React.FC<HistoryProps> = ({list}) => {
	const messageListRef = useRef<HTMLUListElement>(null);
	useEffect(() => {
		if (messageListRef.current && list.length > 0) {

			messageListRef.current.scrollTo(0, messageListRef.current.scrollHeight)

			// messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
			console.log(messageListRef.current.scrollTop, messageListRef.current.scrollHeight)
		}
	}, [list]);

    return (
        <ul ref={messageListRef}>
			{list.map(message => {
				return (
					<React.Fragment key={message.id}>
						{message.type === "response" && <Response message={message} />}
						{message.type === "message" && <Message message={message} />}
						{message.type === "typing" && <Typing message={message} />}
					</React.Fragment>
				);
			})}
        </ul>
    )
}
