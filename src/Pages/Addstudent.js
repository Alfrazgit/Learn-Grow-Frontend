import React from 'react'

export default function Addstudent() {
    return (
        <div className='add'>
            <div className='addstudent'><h4>Add Student Data</h4></div>
            <div className='studentdetails'>
            <form action="" method="POST" enctype="multipart/form-data">

                <table class="tbl-30">
                    <tr>
                        <td>
                            Full Name:
                        </td>
                        <td><input type="text" name="full_name" placeholder="Enter your name" /></td>
                    </tr>
                    <tr>
                        <td>
                            Username:
                        </td>
                        <td><input type="text" name="username" placeholder="Enter username" /></td>
                    </tr>
                    <tr>
                        <td>
                            Password:
                        </td>
                        <td><input type="password" name="password" placeholder="Enter your password" /></td>
                    </tr>
                    <tr>
                        <td>
                            Roll No:
                        </td>
                        <td>
                            <input type="text" name="title" placeholder="Roll No." />
                        </td>
                    </tr>
                    <tr>
                        <td>Year:</td>
                        <td>
                            <input type="number" name="year" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Gender:
                        </td>
                        <td>
                            <input type="radio" name="gender" value="male" />Male
                            <input type="radio" name="gender" value="female" />Female
                        </td>

                    </tr>

                    <tr>
                        <td>
                            Parent name:
                        </td>
                        <td><input type="text" name="parent" placeholder="Enter Parent name" /></td>
                    </tr>
                    <tr>
                        <td>Select Image:</td>
                        <td>
                            <input type="file" name="image" />
                        </td>

                    </tr>
                    <tr>
                        <td>Class:</td>
                        <td>
                            <select name="class">

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
                        </td>

                    </tr>
                    <tr>
                        <td>Description:</td>
                        <td>
                            <textarea name="description" cols="23" rows="4" placeholder="Description"></textarea>
                        </td>
                    </tr>

                    

                    <div className='addadminbtn'>
                            <tr>
                                <td colspan="2">
                                <button type="button" class="btn btn-primary btn-block mb-4">&nbsp;Add&nbsp;</button>

                                    {/* <input className="addbtnadmin" type="submit" name="submit" value="Add Admin" class="btn-secondary" /> */}
                                </td>
                            </tr>
                        </div>
                </table>
            </form>
            </div>
        </div>
    )
}
