import React from "react";
import { Link } from 'react-router-dom'



const Header = () => {

    
    return (
        <>

            <nav class="navbar navbar-expand-md bg-color navbar-dark sticky-top">
                <Link class="navbar-brand" to="/about">Learn&Grow Institute</Link>
                <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navb" aria-expanded="true">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div id="navb" class="navbar-collapse collapse hide">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <Link class="nav-link" to="/">Home</Link>
                        </li>
                        <li class="nav-item active">
                            <Link class="nav-link" to="/admission">Admission</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/about">About</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/contact">Contact</Link>
                        </li>
                    </ul>
                    </div>
                    <div>
                        <ul class="nav navbar-nav ml-auto">
                            <li class="nav-item">
                                <Link class="nav-link" to="/signadmin"><span class="fas fa-user"></span> Admin</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/signin"><span class="fas fa-sign-in-alt"></span> Login</Link>
                            </li>
                            
                        </ul>
                    </div>
                
            </nav>        
            </>

    )
}

export default Header;