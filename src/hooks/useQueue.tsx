import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

interface QueueItem {
    id: number,
    name: string,
    petName: string,
    position: number,
    createdAt: string,
}

type QueueItemInput = Omit<QueueItem, 'id' | 'createdAt'>

interface QueueItemProviderProps {
    children: ReactNode
}

interface QueueContextData {
    queue: QueueItem[],
    createQueue: (queueInput: QueueItemInput) => Promise<void>;
}

export const QueueContext = createContext<QueueContextData>(
    {} as QueueContextData
);

export function QueueProvider({ children } : QueueItemProviderProps){
    const[queue, setQueue] = useState<QueueItem[]>([]);

    useEffect(() => {        
        api.get('/queue')
            .then(response => setQueue(response.data.queues))
    }, [])

    async function createQueue(queueInput: QueueItemInput){
        const response = await api.post('/queue/', { 
            ...queueInput,
            createdAt: new Date(),
        })

        console.log(response.data.queue)

        setQueue([
            ...queue,
            response.data.queue
        ])
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