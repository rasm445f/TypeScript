import {User} from '../types';
import React from "react";

export const UserContext = React.createContext<User>(
    {
        roles: {role: "user"},
        email: "", isLoggedin: false, password: ""
    }
);

export default function UserContextProvider(props:{children:React.ReactNode}) {
    const [user, setUser] = React.useState<User>({
        roles: {role: "user"},
        email: "", isLoggedin: false, password: ""
    });

    return (
        <UserContext.Provider value={user}>
            <button onClick={() => setUser({...user, isLoggedin:!user.isLoggedin})}>Log in</button>
            <button onClick={() => setUser({
                ...user,
                roles: {
                    role: user.roles.role === "admin" ? "user" : "admin"
                }
            })}>
                Change role
            </button>

            {props.children}
        </UserContext.Provider>
    )
}

