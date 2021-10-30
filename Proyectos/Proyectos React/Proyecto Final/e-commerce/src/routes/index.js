import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from '../views/Home'
import Navbar from '../component/Navbar/Navbar'
import SignUp from '../views/SignUp'
import LogIn from '../views/LogIn'
import { Redirect } from 'react-router'

const Logout = () => {
    window.localStorage.removeItem('token')
    return <Redirect to="/" />
}

const Routes = () => {
    return (
        <div>
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/signup" component={SignUp} />
                    <Route exact path="/login" component={LogIn} />
                    <Route exact path="/logout" component={Logout} />
                </Switch>
            </Router>
        </div>
    )
}

export default Routes