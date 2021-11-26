import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

interface VetItem {
    id: number,
    vet: string,
    crmv: number,
    email: string,
    password: string,
}

type VetItemInput = Omit<VetItem, 'id' >

interface VetItemProviderProps {
    children: ReactNode
}

interface VetContextData {
    vet: VetItem[],
    createVet: (vetInput: VetItemInput) => Promise<void>;
}

export const VetContext = createContext<VetContextData>(
    {} as VetContextData
);

export function VetProvider({ children } : VetItemProviderProps){
    const[vet, setVet] = useState<VetItem[]>([]);

    useEffect(() => {        
        api.get('/vet')
            .then(response => setVet(response.data.vets))
    }, [])

    async function createVet(vetInput: VetItemInput){
        const response = await api.post('/vet/', { 
            ...vetInput,
        })

        console.log(response.data.vet)

        setVet([
            ...vet,
            response.data.vet
        ])
    }

    return (
        <VetContext.Provider value={{vet, createVet}}>
            {children}
        </VetContext.Provider>
    )
}

export function useVet(){
    const context = useContext(VetContext)

    return context;
}