import React from "react";
import { Link } from "react-router-dom";


const Signadmin = () => {

    return (

        <div>

        <form className="signinform">
            <br></br>
            <h1>Admin Sign In</h1>
            <br></br>
            <br></br>
            <div class="form-outline mb-4">
                <input type="email" id="form2Example1" class="form-control" />
                <label class="form-label" for="form2Example1">Email address</label>
            </div>


            <div class="form-outline mb-4">
                <input type="password" id="form2Example2" class="form-control" />
                <label class="form-label" for="form2Example2">Password</label>
            </div>
            
               
           

            <div class="row mb-4">
                <div class="col d-flex justify-content-center">

                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                        <label class="form-check-label" for="form2Example31"> Remember me </label>
                    </div>
                </div>

                <div class="col">

                    <Link to="/forget">Forgot password?</Link>
                </div>
            </div>

            <button type="button" class="btn btn-primary btn-block mb-4">Sign in</button>


            <div class="text-center">
                <p>Not a student? <Link to="/Admission">New Admission</Link></p>
                <p>Or sign up with:</p>
                <button type="button" class="btn btn-link btn-floating mx-1">
                    <i class="fab fa-facebook-f"></i>
                </button>

                <button type="button" class="btn btn-link btn-floating mx-1">
                    <i class="fab fa-google"></i>
                </button>

                <button type="button" class="btn btn-link btn-floating mx-1">
                    <i class="fab fa-twitter"></i>
                </button>

                <button type="button" class="btn btn-link btn-floating mx-1">
                    <i class="fab fa-github"></i>
                </button>
            </div>
        </form>
    </div>
    );
}




export default Signadmin;