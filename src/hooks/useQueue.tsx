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

interface QueueItemProviderProps {
    children: ReactNode
}

interface QueueContextData {
    queue: QueueItem[],
    addToQueue: (customerId: number) => Promise<void>;
    deleteFromQueue: (customerId: number) => Promise<void>;
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

    async function addToQueue(customerId: number){
        const response = await api.post('/appointmentQueue/', { 
            customerId
        })

        api.get('/appointmentQueue')
            .then(response => {
                console.log(response.data)
                setQueue(response.data)
        })
    }

    async function deleteFromQueue(queueId: number){
        await api.delete('/appointmentQueue/' + queueId)

        api.get('/appointmentQueue')
            .then(response => {
                console.log(response.data)
                setQueue(response.data)
        })
    }

    return (
        <QueueContext.Provider value={{queue, addToQueue, deleteFromQueue}}>
            {children}
        </QueueContext.Provider>
    )
}

export function useQueue(){
    const context = useContext(QueueContext)

    return context;
}