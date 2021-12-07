import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

interface CustomerItem {
    id: number,
    firstName: String,
    lastName: String,
    email: string,
    password: string,
    cpf: number,
    address: {
        street: string,
        number: number,
        city: string,
        state: string,
        zipcode: number,
        description: string,
 },
 pets:[
     {
         name: string,
         breed: string,
     }
    ],

 }

type CustomerItemInput = Omit<CustomerItem, 'id'>

interface CustomerItemProviderProps {
    children: ReactNode
}

interface CustomerContextData {
    customer: CustomerItem[],
    createCustomer: (customerInput: CustomerItemInput) => Promise<void>;
}

export const CustomerContext = createContext<CustomerContextData>(
    {} as CustomerContextData
);

export function CustomerProvider({ children } : CustomerItemProviderProps){
    const[customer, setCustomer] = useState<CustomerItem[]>([]);

    useEffect(() => {        
        api.get('/customer')
            .then(response => setCustomer(response.data.customers))
    }, [])

    async function createCustomer(customerInput: CustomerItemInput){
        const response = await api.post('/customer/', { 
            ...customerInput,
        })

        console.log(response.data.customer)

        setCustomer([
            ...customer,
            response.data.customer
        ])
    }

    return (
        <CustomerContext.Provider value={{customer, createCustomer}}>
            {children}
        </CustomerContext.Provider>
    )
}

export function useCustomer(){
    const context = useContext(CustomerContext)

    return context;
}