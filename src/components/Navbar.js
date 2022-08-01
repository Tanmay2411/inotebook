import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import {
    Link,
    useLocation
} from "react-router-dom";
const Navbar = () => {
    const navigate = useNavigate();
    let location = useLocation();
    useEffect(() => {
    }, [location])

    let onClick = () => {
        localStorage.setItem("token", "")
        navigate('/home')
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg  navbarfixed">
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
                            {!localStorage.getItem('token') && <>
                                <li className="nav-item">
                                    <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
                                </li></>}
                        </ul>

                        <form className="d-flex" role="search">
                            {!localStorage.getItem("token") && <>
                                <Link to="/signup" className="btn btn-primary btn-sm mx-3" role="button" aria-disabled="true">Sign Up</Link>
                                <Link to="/login" className="btn btn-primary btn-sm" role="button" aria-disabled="true">Login</Link>
                            </>
                            }
                            {localStorage.getItem("token") && <>

                                <Link to="/home" className="btn btn-primary btn-sm" onClick={onClick} role="button" aria-disabled="true">Logout</Link>
                            </>
                            }
                        </form>

                    </div>
                </div>
            </nav>
            {/* <hr /> */}
        </div>
    )
}

export default Navbar