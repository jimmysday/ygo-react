import { Timestamp } from "firebase/firestore"

export type User = {
    email:  string,
    fcmToken?: string, 
    firstName: string, 
    id: string, 
    lastName: string,
    profileImageOffset?: {
        height: number, 
        width: number
    }
    profileImageScale?: number, 
    profileImageUrl?: string, 
    token: string
}

export type Contact = {
    contactUserId: User["id"], 
    id: string, 
    ownerId: User["id"], 
    pillarId: Array<string>
}

export type Thread = {
    chatName?: string,
    encrtyptedKeys?: Map<string, string>, 
    firstMessageId: string, 
    id: string, 
    lastMessage: Message, 
    lastUpdated: Timestamp,
    uids: Array<User["id"]>,
    users: Array<User>
}

export type Message = {
    fromId: User['id'],
    id: string, 
    isEncrypted: boolean, 
    messageText: string, 
    status: Object,
    timestamp: Timestamp, 
    toId: User['id'];
}

export type Pillar = {
    color: string,   
    icon: string,       
    id: string, 
    subPillars: Pillar[],
    title: string,
    type: string,
    userId: User['id'];
}

