import React from 'react'
import NavLogIn from './NavLogIn'
import NavLogOut from './NavLogOut'
import Payload from '../../utils/payload'
import './NavBar.css'

const Navbar = () => {

    const user = Payload();

    return (
        <div>
            {user ? ((
                <NavLogIn />
            )) : ((
                <NavLogOut />
            ))}
        </div>
    )
}

export default Navbar

