import React from 'react'
import { ProductProvider } from '../context/ProductContext'
import { CurrentUserProvider } from '../context/CurrentUserContext'
import SignIn from '../views/signin/SignIn'
import NavBar from '../component/NavBar'
import NavBarLog from '../component/NavBarLogIn'

const Routes = () => {
    return (
        <div>
            <NavBar />
            <SignIn />
            <ProductProvider>
            </ProductProvider>

            <CurrentUserProvider>
            </CurrentUserProvider>
        </div>
    )
}

export default Routes
