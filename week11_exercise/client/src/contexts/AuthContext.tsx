import React from 'react';

type User = {
    id: string;
    name: string;
    email: string;
    roles: string[];
};

interface UserContextType {
    user: User | null;
    setUser: (user: User | null) => void;
}



//export default AuthContext;
