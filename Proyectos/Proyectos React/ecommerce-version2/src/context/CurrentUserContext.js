import React from 'react'
import UseAxios from '../hooks/UseAxios'
import Payload from '../utils/Payload';
import { useEffect, useState } from 'react';

const UserContext = React.createContext();

const CurrentUserProvider = (props) => {

    const [user, setUser] = useState({});

    const currentUser = Payload();

    const token = window.localStorage.getItem('token');

    const { response, loading, error } = UseAxios({
        method: 'GET',
        url: currentUser ? `user/${currentUser.id}` : null,
        headers: {Authorization: `JWT ${token}`}
    });

    useEffect(() => {
        if (response !== null) {
            setUser(response);
            console.log(response);
        }
    }, [response]);

    const value = {
        user,
        error,
        loading
    }

    return (
        <UserContext.Provider value={value} {...props} />
    )
}

const useUserContext = () => {
    const context = React.useContext(UserContext);
    return context;
}

export {
    CurrentUserProvider,
    useUserContext
}