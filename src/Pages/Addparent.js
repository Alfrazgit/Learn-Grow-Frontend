import React from 'react'
import { Link } from 'react-router-dom'

export default function Addparent() {
    return (
        <div>
            
                <div className='addparent'><h4>Add Parent Data</h4></div>

                <form className="add">
                    <div class="form-outline mb-4">
                        <label class="form-label" for="form2Example1">Parent Name</label>
                        <input type="text" id="form2Example1" class="form-control" name="parent" placeholder="Enter Parent name" />

                    </div>

                    <div class="form-outline mb-4">
                        <label class="form-label" for="form2Example2">Parent Username</label>
                        <input type="text" id="form2Example2" class="form-control" name="username" placeholder="Enter Parent username" />

                    </div>
                    <div class="form-outline mb-4">
                        <label class="form-label" for="form2Example2">Student Name</label>
                        <input type="text" id="form2Example2" class="form-control" name="full_name" placeholder="Enter student name" />

                    </div>
                    <div class="form-outline mb-4">
                        <label class="form-label" for="form2Example2">Student Username</label>
                        <input type="text" id="form2Example2" class="form-control" name="username" placeholder="Enter Student username" />

                    </div>
                    <div class="form-outline mb-4">
                        <label class="form-label" for="form2Example2">Password</label>
                        <input type="password" id="form2Example2" class="form-control" />

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

                    </div>
                    <div class="form-outline mb-4">
                        <label class="form-label" for="form2Example2">Phone No.</label>
                        <input type="tel" id="form2Example2" class="form-control" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />


                    </div>




                    <button type="button" class="btn btn-primary btn-block mb-4"> Add </button>



                </form>
            </div >











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
        
    )
}
