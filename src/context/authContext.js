import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('user') || null));
    const login = async (inputs) => {
        const res = await axios.post('https://memory-app-blog.herokuapp.com/api/auth/login', inputs);
        setCurrentUser(res.data);
    };

    const logout = async () => {
        await axios.post('https://memory-app-blog.herokuapp.com/api/auth/logout');
        setCurrentUser(null);
    };

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(currentUser));
    }, [currentUser]);

    return <AuthContext.Provider value={{ currentUser, login, logout }}>{children}</AuthContext.Provider>;
};
