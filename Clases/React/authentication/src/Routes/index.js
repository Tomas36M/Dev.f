import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Home from "../Views/Home";
import SingUp from "../Views/SingUp";
import LogIn from "../Views/LogIn";
import Item from "../Views/Item";

const Logout = () => {
    window.localStorage.removeItem('token')
    return <Redirect to="/" />
}

const Index = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component ={Home} />
                <Route exact path="/signup" component ={SingUp} />
                <Route exact path="/login" component ={LogIn} />
                <Route exact path="/item" component ={Item} />
                <Route exact path="/logout" component ={Logout} />
            </Switch>
        </Router>
    )
}

export default Index
