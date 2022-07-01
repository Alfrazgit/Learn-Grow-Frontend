import React from 'react'

export default function Admission() {
    return (
        <div className="form-container">
            <h1 className="title">Addmission</h1>




          




            <form className="signupform">
                <div class="row mb-2">
                    <div class="col">
                        <div class="form-outline">
                            <label class="form-label" for="form3Example1">
                                First name
                            </label>
                            <input type="text" id="form3Example1" class="form-control" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                            <label class="form-label" for="form3Example2">
                                Last name
                            </label>
                            <input type="text" id="form3Example2" class="form-control" />
                        </div>
                    </div>
                </div>

                <div class="form-outline mb-2">
                    <label class="form-label" for="form3Example3">
                        Email address
                    </label>
                    <input type="email" id="form3Example3" class="form-control" />
                </div>
                <div class="form-outline mb-2">
                    <label class="form-label" for="form3Example3">
                        Parent Name
                    </label>
                    <input type="text" id="form3Example3" class="form-control" />
                </div>
                <div class="form-outline mb-2">
                    <label class="form-label" for="form3Example3">
                        Date of Birth
                    </label>
                    <input type="number" id="form3Example3" class="form-control" />
                </div>
                <div class="form-outline mb-2">
                    <label class="form-label" for="form3Example3">
                        Year
                    </label>
                    <input type="number" id="form3Example3" class="form-control" />
                </div>
                <div class="form-outline mb-2">
                    <label class="form-label" for="form3Example3">
                        Gender :  &nbsp;
                    </label>
                    <input type="radio" name="gender" value="male" />  Male  &nbsp;
                    <input type="radio" name="gender" value="female"/>  Female  &nbsp;

                </div>
                
                
                <div class="form-outline mb-2">
                    <label class="form-label" for="form3Example4">
                        Class :
                    </label>
                    <select name="class"id="form3Example3" class="form-control">

                                    <option value="kg-1">K.G.-1</option>
                                    <option value="kg-2">K.G.-2</option>


                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11-sci">11-Science</option>
                                    <option value="11-arts">11-Arts</option>
                                    <option value="11-commerce">11-Commerce</option>
                                    <option value="12-sci">12-Science</option>
                                    <option value="12-arts">12-Arts</option>
                                    <option value="12-commerce">12-Commerce</option>




                                    <option value="0">No Class Found</option>


                                </select>
                </div>
                <div class="form-outline mb-2">
                    <label class="form-label" for="form3Example4">
                        Student Image
                    </label>
                    <input type="file" id="form3Example4" class="form-control" />
                </div>
                <div class="form-outline mb-2">
                    <label class="form-label" for="form3Example4">
                        Parent Image
                    </label>
                    <input type="file" id="form3Example4" class="form-control" />
                </div>
                <div class="form-outline mb-2">
                    <label class="form-label" for="form3Example4">
                        Birth Certificate / Previous Result / Previous School Certificate
                    </label>
                    <input type="file" id="form3Example4" class="form-control" />
                </div>
                <div class="form-outline mb-2">
                    <label class="form-label" for="form3Example3">
                        Address
                    </label>
                    <textarea name="address" cols="20" rows="3" type="text" id="form3Example3" class="form-control" />

                </div>
                <div class="form-outline mb-2">
                    <label class="form-label" for="form3Example3">
                        Phone No.:
                    </label>
                    <input type="tel" id="form3Example3" class="form-control" name ="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"/>

                </div>
                <div class="form-outline mb-2">
                    <label class="form-label" for="form3Example4">
                        Password
                    </label>
                    <input type="password" id="form3Example4" class="form-control" />
                </div>

                <div class="form-outline mb-2">
                    <label class="form-label" for="form3Example4">
                        Confirm Password
                    </label>
                    <input type="password" id="form3Example4" class="form-control" />
                </div>

                <button type="submit" class="btn btn-primary btn-block mb-4">
                    Submit Admission Form
                </button>

                <div class="text-center">
                    <p>Or sign up with:</p>
                    <button type="button" class="btn btn-primary btn-floating mx-1">
                        <i class="fab fa-facebook-f"></i>
                    </button>

                    <button type="button" class="btn btn-primary btn-floating mx-1">
                        <i class="fab fa-google"></i>
                    </button>

                    <button type="button" class="btn btn-primary btn-floating mx-1">
                        <i class="fab fa-twitter"></i>
                    </button>

                    <button type="button" class="btn btn-primary btn-floating mx-1">
                        <i class="fab fa-github"></i>
                    </button>
                </div>
            </form>
        </div>
    )
}
