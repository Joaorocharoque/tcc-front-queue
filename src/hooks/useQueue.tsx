import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

interface QueueItem {
    id: number,
    position: number,
    pet: QueuePetItem,
    estimatedRemainingTime: number,
    customer: {
        firstName: string,
        lastName: string,
        email: string,
        category: string,
        cpf: string
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
    customerPets: QueuePetItem[],
    clearCustomerPets: () => Promise<void>;
    addToQueue: (cpf: string, petId: string) => Promise<void>;
    deleteFromQueue: (customerId: number) => Promise<void>;
    findCustomerByCpf: (cpf: string) => Promise<void>;
}

export const QueueContext = createContext<QueueContextData>(
    {} as QueueContextData
);

export function QueueProvider({ children } : QueueItemProviderProps){
    const[queue, setQueue] = useState<QueueItem[]>([]);
    const[customerPets, setCustomerPets] = useState<QueuePetItem[]>([]);
    
    useEffect(() => {
        const interval=setInterval(()=>{
            api.get('/appointmentQueue')
                .then(response => {
                    setQueue(response.data)
                })
        },5000)

        return()=>clearInterval(interval)

    }, [])


    async function addToQueue(cpf: string, petId: string){
        await api.post('/appointmentQueue/', {
            cpf, petId
        }).catch(function (error) {
        })

        api.get('/appointmentQueue')
            .then(response => {
                setQueue(response.data)
        })
    }

    async function deleteFromQueue(queueId: number){
        await api.delete('/appointmentQueue/' + queueId)

        api.get('/appointmentQueue')
            .then(response => {
                setQueue(response.data)
        })
    }

    async function findCustomerByCpf(cpf: string){
        api.get('/user/customer/' + cpf)
        .then(response => {
            setCustomerPets(response.data.pets)
        }, () => {
            clearCustomerPets()
        })
    }

    async function clearCustomerPets(){
        setCustomerPets([])
    }


    return (
        <QueueContext.Provider value={{queue, customerPets, addToQueue, deleteFromQueue, findCustomerByCpf, clearCustomerPets}}>
            {children}
        </QueueContext.Provider>
    )
}

export function useQueue(){
    const context = useContext(QueueContext)

    return context;
}