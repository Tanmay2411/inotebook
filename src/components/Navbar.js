import React, { useEffect } from 'react'
import {
    Link,
    useLocation
} from "react-router-dom";
const Navbar = () => {
    let location = useLocation();
    useEffect(() => {
    }, [location])
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand" >iNotebook</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <Link to="/signup" className="btn btn-primary btn-sm mx-3" role="button" aria-disabled="true">Sign Up</Link>
                            <Link to="/login" className="btn btn-primary btn-sm" role="button" aria-disabled="true">Login</Link>
                        </form>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar