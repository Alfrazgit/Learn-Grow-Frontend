import React from 'react'

export default function Addadmin() {
    return (

        <div>

            <div className='addadmin'><h4>Add Admin Data</h4></div>

            <form className="adda">

                <div className="form-outline mb-4">
                    <label className="form-label" for="form2Example2">Full Name</label>
                    <input type="text" id="form2Example2" className="form-control" name="full_name" placeholder="Enter admin name" />

                </div>
                <div className="form-outline mb-4">
                    <label className="form-label" for="form2Example2">Username</label>
                    <input type="text" id="form2Example2" className="form-control" name="username" placeholder="Enter admin username" />

                </div>



                <div className="form-outline mb-4">
                    <label className="form-label" for="form2Example2">Admin ID</label>
                    <input type="text" id="form2Example2" className="form-control" name="roll" placeholder="Enter admin ID" />

                </div>
                <div className="form-outline mb-4">
                    <label className="form-label" for="form2Example2">Password</label>
                    <input type="password" id="form2Example2" className="form-control" />

                </div>

                <div className="form-outline mb-4">
                    <label className="form-label" for="form2Example2">Year</label>
                    <input type="number" id="form2Example2" className="form-control" name="year" />

                </div>
                <div className="form-outline mb-4">
                    <label className="form-label" for="form2Example2">Gender &nbsp;</label>
                    <input type="radio" name="gender" value="male" /> &nbsp;Male &nbsp;
                    <input type="radio" name="gender" value="female" /> &nbsp;Female &nbsp;

                </div>

                <div className="form-outline mb-4">
                    <label className="form-label" for="form2Example2">Select Image</label>
                    <input type="file" id="form2Example2" className="form-control" name="studentimage" />

                </div>

                <div className="form-outline mb-4">
                    <label className="form-label" for="form2Example2">Address</label>
                    <textarea name="description" id="form2Example2" className="form-control" cols="23" rows="2" placeholder="Address"></textarea>

                </div>
                <div className="form-outline mb-4">
                    <label className="form-label" for="form2Example2">Phone No.</label>
                    <input type="tel" id="form2Example2" className="form-control" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />


                </div>




                <button type="button" className="btn btn-primary btn-block mb-4"> Add </button>



            </form>











        </div >
    )
}
