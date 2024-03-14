export type Message = {
    id: string,
    from: { name: string },
    type: 'response' | "message" | "typing",
    time: string,
    text: string
}

export interface MessageProps {
    message: Message
}

export interface HistoryProps {
    list: Message[]
}

declare const messages: Message[]
	export default messages;
