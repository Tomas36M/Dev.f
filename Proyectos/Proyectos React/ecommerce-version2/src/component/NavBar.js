import React from 'react'

const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">My Store</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <form className="d-flex me-auto w-50">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        </form>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ms-auto">
                            <li className="nav-item me-auto">
                                <a className="nav-link active" aria-current="page" href="#">Log In</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Sign Up</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
