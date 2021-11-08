import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from '../views/Home'
import Navbar from '../component/Navbar/Navbar'
import SignUp from '../views/SignUp'
import LogIn from '../views/LogIn'
import SellProduct from '../views/SellProduct'
import Cart from '../views/Cart'
import Premium from '../views/Premium'
import { Redirect } from 'react-router'
import { ProductProvider } from '../context/ProductContext'
import { CarProvider } from '../context/CarContext'

const Logout = () => {
    window.localStorage.removeItem('token')
    return <Redirect to="/" />
}

const Routes = () => {
    return (
        <div>
            <ProductProvider>
                <Router>
                    <Navbar />
                    <CarProvider>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/signup" component={SignUp} />
                        <Route exact path="/login" component={LogIn} />
                        <Route exact path="/logout" component={Logout} />
                        <Route exact path="/sell" component={SellProduct} />
                        <Route exact path="/cart" component={Cart} />
                        <Route exact path="/premium" component={Premium} />                                             
                    </Switch>
                    </CarProvider>
                </Router>
            </ProductProvider>
        </div>
    )
}

export default Routes