import React from 'react'
import { Redirect } from 'react-router-dom';

const HOC = (Component) => {
    const token = window.sessionStorage.getItem('token');

    const WrappedComponent = (props) => {
        return token ? <Component {...props}/> : <Redirect to="/"/>
    }
    return WrappedComponent
}

export default HOC