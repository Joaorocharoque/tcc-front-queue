import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

interface QueueItem {
    id: number,
    position: number,
    customer: {
        firstName: string,
        lastName: string,
        email: string,
        category: string,
        pets: QueuePetItem[]
    }
}

interface QueuePetItem {
    id: number,
    name: number,
    breed: string
}

type QueueItemInput = Omit<QueueItem, 'id'>

interface QueueItemProviderProps {
    children: ReactNode
}

interface QueueContextData {
    queue: QueueItem[],
    createQueue: (customerId: number) => Promise<void>;
}

export const QueueContext = createContext<QueueContextData>(
    {} as QueueContextData
);

export function QueueProvider({ children } : QueueItemProviderProps){
    const[queue, setQueue] = useState<QueueItem[]>([]);

    useEffect(() => {        
        api.get('/appointmentQueue')
            .then(response => {
                console.log(response.data)
                setQueue(response.data)
            })
    }, [])

    async function createQueue(customerId: number){
        const response = await api.post('/appointmentQueue/', { 
            customerId
        })

        api.get('/appointmentQueue')
            .then(response => {
                console.log(response.data)
                setQueue(response.data)
        })
    }

    return (
        <QueueContext.Provider value={{queue, createQueue}}>
            {children}
        </QueueContext.Provider>
    )
}

export function useQueue(){
    const context = useContext(QueueContext)

    return context;
}