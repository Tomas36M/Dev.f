import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from '../views/Home'
import Navbar from '../component/Navbar/Navbar'
import SignUp from '../views/SignUp'
import LogIn from '../views/LogIn'
import SellProduct from '../views/SellProduct'
import Cart from '../views/Cart'
import Premium from '../views/Premium'
import Profile from '../views/Profile'
import { Redirect } from 'react-router'
import { ProductProvider } from '../context/ProductContext'
import { CurrentUserProvider } from '../context/CurrentUserContext'

const Logout = () => {
    window.localStorage.removeItem('token')
    return <Redirect to="/" />
}



const Routes = () => {
    return (
        <div>
            <ProductProvider>
                <Router>
                    <Navbar/>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/signup" component={SignUp} />
                        <Route exact path="/login" component={LogIn} />
                        <Route exact path="/logout" component={Logout} />
                        <Route exact path="/sell" component={SellProduct} />
                        <Route exact path="/cart" component={Cart} />
                    </Switch>
                    <CurrentUserProvider>
                        <Switch>
                            <Route exact path="/profile" component={Profile} />
                            <Route exact path="/premium" component={Premium} />
                        </Switch>
                    </CurrentUserProvider>
                </Router>
            </ProductProvider>
        </div>
    )
}

export default Routes