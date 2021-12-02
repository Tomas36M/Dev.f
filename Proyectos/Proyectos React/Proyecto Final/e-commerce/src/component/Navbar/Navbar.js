import React, { useEffect, useState } from 'react'
import NavLogIn from './NavLogIn'
import NavLogOut from './NavLogOut'
import Payload from '../../utils/payload'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
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

