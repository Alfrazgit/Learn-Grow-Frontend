import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ParentService from "../services/ParentService";

export default function Addparent() {
  const navigate = useNavigate();
  const [parent, setParent] = useState({
    name: "",
    phno: "",
    password: "",
    stu_id: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setParent({ ...parent, [e.target.name]: value });
  };

  const saveParent = (e) => {
    e.preventDefault();

    ParentService.addParent(parent)
      .then((res) => {
        console.log(res);
        navigate("/parentall");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="addparent">
        <h4>Add Parent Data</h4>
      </div>

      <form className="add">
        <div class="form-outline mb-4">
          <label class="form-label">Parent Name</label>
          <input
            type="text"
            class="form-control"
            name="name"
            placeholder="Enter Parent name"
            onChange={(e) => handleChange(e)}
          />
        </div>

        {/* <div class="form-outline mb-4">
                        <label class="form-label" for="form2Example2">Parent Username</label>
                        <input type="text" id="form2Example2" class="form-control" name="username" placeholder="Enter Parent username" />

                    </div> */}
        <div class="form-outline mb-4">
          <label class="form-label">Student Id</label>
          <input
            type="text"
            class="form-control"
            name="stu_id"
            placeholder="Enter student id"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div class="form-outline mb-4">
          <label class="form-label">Password</label>
          <input
            type="text"
            class="form-control"
            name="password"
            placeholder="Password"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div class="form-outline mb-4">
          <label class="form-label">Phone No.</label>
          <input
            type="tel"
            class="form-control"
            name="phno"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            placeholder="Enter Phone Number"
            onChange={(e) => handleChange(e)}
          />
        </div>
        {/* <div class="form-outline mb-4">
                        <label class="form-label" for="form2Example2">Student Username</label>
                        <input type="text" id="form2Example2" class="form-control" name="username" placeholder="Enter Student username" />

                    </div>
                    <div class="form-outline mb-4">
                        <label class="form-label" for="form2Example2">Student Roll No.</label>
                        <input type="text" id="form2Example2" class="form-control" name="roll" placeholder="Student Roll No." />

                    </div>
                    <div class="form-outline mb-4">
                        <label class="form-label" for="form2Example2">Year</label>
                        <input type="number" id="form2Example2" class="form-control" name="year" />

                    </div>
                    <div class="form-outline mb-4">
                        <label class="form-label" for="form2Example2">Gender &nbsp;</label>
                        <input type="radio" name="gender" value="male" /> &nbsp;Male &nbsp;
                        <input type="radio" name="gender" value="female" /> &nbsp;Female &nbsp;

                    </div>
                    <div class="form-outline mb-4">
                        <label class="form-label" for="form2Example2">Select parent Image</label>
                        <input type="file" id="form2Example2" class="form-control" name="parentimage" />

                    </div>
                    <div class="form-outline mb-4">
                        <label class="form-label" for="form2Example2">Select Student Image</label>
                        <input type="file" id="form2Example2" class="form-control" name="studentimage" />

                    </div>
                    <div class="form-outline mb-4">
                        <label class="form-label" for="form2Example2">Select Class</label>
                        <div >
                            <select name="class" id="form2Example2" class="form-control">

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
                    </div>
                    <div class="form-outline mb-4">
                        <label class="form-label" for="form2Example2">Address</label>
                        <textarea name="description" id="form2Example2" class="form-control" cols="23" rows="2" placeholder="Address"></textarea>

                    </div> */}

        <button
          type="button"
          class="btn btn-primary btn-block mb-4 mx-1"
          onClick={saveParent}
        >
          {" "}
          Add{" "}
        </button>
        <Link to="/parentall">
          <button className="btn btn-danger btn-block mb-4 mx-1">Cancel</button>
        </Link>
      </form>
    </div>

    // {/*
    // <div> <div className='add'>
    //     <div className='addstudent'><h4>Add Parent Data</h4></div>
    //     <div className='studentdetails'>
    //         <form action="" method="POST" enctype="multipart/form-data">

    //             <table class="tbl-30">
    //                 <div class="form-outline mb-4">

    //                     <tr>
    //                         <td>
    //                             Parent name:
    //                         </td>
    //                         <td><input type="text" name="parent" placeholder="Enter Parent name" /></td>
    //                     </tr>
    //                 </div>

    //                 <tr>
    //                     <td>
    //                         Parent Username:
    //                     </td>
    //                     <td><input type="text" name="username" placeholder="Enter Parent username" /></td>
    //                 </tr>
    //                 <tr>
    //                     <td>
    //                         Student Full Name:
    //                     </td>
    //                     <td><input type="text" name="full_name" placeholder="Enter student name" /></td>
    //                 </tr>
    //                 <tr>
    //                     <td>
    //                         Student Username:
    //                     </td>
    //                     <td><input type="text" name="username" placeholder="Enter Student username" /></td>
    //                 </tr>
    //                 <tr>
    //                     <td>
    //                         Password:
    //                     </td>
    //                     <td><input type="password" name="password" placeholder="Enter your password" /></td>
    //                 </tr>
    //                 <tr>
    //                     <td>
    //                         Student Roll No:
    //                     </td>
    //                     <td>
    //                         <input type="text" name="roll" placeholder="Student Roll No." />
    //                     </td>
    //                 </tr>
    //                 <tr>
    //                     <td>Year:</td>
    //                     <td>
    //                         <input type="number" name="year" />
    //                     </td>
    //                 </tr>
    //                 <tr>
    //                     <td>
    //                         Student Gender:
    //                     </td>
    //                     <td>
    //                         <input type="radio" name="gender" value="male" />Male
    //                         <input type="radio" name="gender" value="female" />Female
    //                     </td>

    //                 </tr>
    //                 <tr>
    //                     <td>Select Parent Image:</td>
    //                     <td>
    //                         <input type="file" name="parentimage" />
    //                     </td>

    //                 </tr>

    //                 <tr>
    //                     <td>Select Student Image:</td>
    //                     <td>
    //                         <input type="file" name="studentimage" />
    //                     </td>

    //                 </tr>
    //                 <tr>
    //                     <td>Student Class:</td>
    //                     <td>
    //                         <select name="class">

    //                             <option value="kg-1">K.G.-1</option>
    //                             <option value="kg-2">K.G.-2</option>

    //                             <option value="1">1</option>
    //                             <option value="2">2</option>
    //                             <option value="3">3</option>
    //                             <option value="4">4</option>
    //                             <option value="5">5</option>
    //                             <option value="6">6</option>
    //                             <option value="7">7</option>
    //                             <option value="8">8</option>
    //                             <option value="9">9</option>
    //                             <option value="10">10</option>
    //                             <option value="11-sci">11-Science</option>
    //                             <option value="11-arts">11-Arts</option>
    //                             <option value="11-commerce">11-Commerce</option>
    //                             <option value="12-sci">12-Science</option>
    //                             <option value="12-arts">12-Arts</option>
    //                             <option value="12-commerce">12-Commerce</option>

    //                             <option value="0">No Class Found</option>

    //                         </select>
    //                     </td>

    //                 </tr>
    //                 <tr>
    //                     <td>Address:</td>
    //                     <td>
    //                         <textarea name="description" cols="23" rows="2" placeholder="Address"></textarea>
    //                     </td>
    //                 </tr>
    //                 <tr>
    //                     <td>Phone No.:</td>
    //                     <td>
    //                         <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />                            </td>
    //                 </tr>

    //                 <div className='addadminbtn'>
    //                     <tr>
    //                         <td colspan="2">
    //                             <button type="button" class="btn btn-primary btn-block mb-4">&nbsp;Add&nbsp;</button>

    //                             <input className="addbtnadmin" type="submit" name="submit" value="Add Admin" class="btn-secondary" />
    //
    //
    //                 </div>
    //             </table>
    //         </form>
    //     </div>
    // </div></div> */}
  );
}
