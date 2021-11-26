import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

interface SecItem {
    id: number,
    sec: string,
    cpf: number,
    email: string,
    password: string,
}

type SecItemInput = Omit< SecItem, 'id' >

interface SecItemProviderProps {
    children: ReactNode
}

interface SecContextData {
    sec: SecItem[],
    createSec: (secInput: SecItemInput) => Promise<void>;
}

export const SecContext = createContext<SecContextData>(
    {} as SecContextData
);

export function SecProvider({ children } : SecItemProviderProps){
    const[sec, setSec] = useState<SecItem[]>([]);

    useEffect(() => {        
        api.get('/sec')
            .then(response => setSec(response.data.secs))
    }, [])

    async function createSec(secInput: SecItemInput){
        const response = await api.post('/sec/', { 
            ...secInput,
        })

        console.log(response.data.sec)

        setSec([
            ...sec,
            response.data.sec
        ])
    }

    return (
        <SecContext.Provider value={{sec, createSec}}>
            {children}
        </SecContext.Provider>
    )
}

export function useTableSec(){
    const context = useContext(SecContext)

    return context;
}