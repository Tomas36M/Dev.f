import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from '../views/Home'
import Error404 from '../views/Error404'
import Contact from '../views/Contact'
import News from '../views/News'
import Navbar from '../component/Navbar/Navbar'

const Routes = () => {
    return (
        <div>
            <Router>
            <Navbar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/news" component={News} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="*" component={Error404} />
                </Switch>
            </Router>
        </div>
    )
}

export default Routes
