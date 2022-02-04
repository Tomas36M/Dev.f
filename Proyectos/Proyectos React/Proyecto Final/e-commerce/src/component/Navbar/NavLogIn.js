import React from 'react'
import { UseProductContext } from '../../context/ProductContext'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const NavLogIn = () => {


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
                            <input className="form-control me-2" type="search" placeholder="Search..." aria-label="Search" onChange={context.handleChange} />
                        </form>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-auto">
                            <li className="nav-item me-auto">
                                <Link to="/profile"><button type="button" className="btn btn-primary">Profile</button></Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/cart"><button type="button" className="btn btn-primary">Cart</button></Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/premium"><button type="button" className="btn btn-primary">Premium</button></Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact"><button type="button" className="btn btn-primary">Contact</button></Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/sell"><button type="button" className="btn btn-primary">Sell</button></Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/logout"><button type="button" className="btn btn-primary">Logout</button></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavLogIn