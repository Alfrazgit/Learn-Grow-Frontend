import React from "react";
import { Link,useLocation } from 'react-router-dom'


const Header = () => {

    let location = useLocation();

    return (
        <>

            <nav className="navbar navbar-expand-md bg-color navbar-dark sticky-top">
                <Link className="navbar-brand" to="/">Learn&Grow Institute</Link>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navb" aria-expanded="true">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div id="navb" className="navbar-collapse collapse hide">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/viewallstudent" ? "active" : ""}`} to="/viewallstudent">Students</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/admission" ? "active" : ""}`} to="/admission">Admission</Link>
                        </li>
                        
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/contact" ? "active" : ""}`} to="/contact">Contact</Link>
                        </li>
                    </ul>
                    </div>
                    <div>
                        <ul className="nav navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/signadmin"><span className="fas fa-user"></span> Admin</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/signin"><span className="fas fa-sign-in-alt"></span> Login</Link>
                            </li>
                            
                        </ul>
                    </div>
                
            </nav>        
            </>

    )
}

export default Header;