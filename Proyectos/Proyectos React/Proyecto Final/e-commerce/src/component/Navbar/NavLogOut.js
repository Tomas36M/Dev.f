import React from 'react'
import { UseProductContext } from '../../context/ProductContext'
import { Link } from 'react-router-dom'

const NavLogOut = () => {

    const context = UseProductContext();

    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">My Store</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <form className="d-flex me-auto w-50 search-bar">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={context.handleChange} />
                        </form>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ms-auto">
                            <li className="nav-item me-auto">
                                <Link to="/login"><button type="button" className="btn btn-primary">Sing In</button></Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/signup"><button type="button" className="btn btn-primary">Sing up</button></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavLogOut
