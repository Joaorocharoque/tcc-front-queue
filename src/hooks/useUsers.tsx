import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/userApi";

interface UserItem {
    id: number,
    firstName: string,
    lastName: string,
    cpf: string,
    email: string,
    category: string,
    profile: string,
    pets: UserPetItem[]
}

interface UserPetItem {
    id: number,
    name: number,
    breed: string
}

interface UserItemProviderProps {
    children: ReactNode
}

interface UserContextData {
    users: UserItem[],
    addToUser: (userId: number) => Promise<void>;
    deleteFromUser: (userId: number) => Promise<void>;
}

export const UserContext = createContext<UserContextData>(
    {} as UserContextData
);

export function UserProvider({ children } : UserItemProviderProps){
    const[users, setUsers] = useState<UserItem[]>([]);

    useEffect(() => {        
        api.get('/user')
            .then(response => {
                console.log("Buscando usuarios")
                console.log(response.data)
                setUsers(response.data)
            })
    }, [])

    async function addToUser(userId: number){
        const response = await api.post('/user/', { 
            userId
        })

        api.get('/user')
            .then(response => {
                console.log(response.data)
                setUsers(response.data)
        })
    }

    async function deleteFromUser(userId: number){
        await api.delete('/user/' + userId)

        api.get('/user')
            .then(response => {
                console.log(response.data)
                setUsers(response.data)
        })
    }

    return (
        <UserContext.Provider value={{users, addToUser, deleteFromUser}}>
            {children}
        </UserContext.Provider>
    )
}

export function useUsers(){
    const context = useContext(UserContext)

    return context;
}