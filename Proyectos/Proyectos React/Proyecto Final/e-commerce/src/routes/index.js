import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from '../views/Home'
import Navbar from '../component/Product/Navbar/Navbar'

const Routes = () => {
    return (
        <div>
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home} />
                </Switch>
            </Router>
        </div>
    )
}

export default Routes