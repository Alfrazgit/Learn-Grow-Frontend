import React from 'react'

export default function Addadmin() {
    return (
        <div className='add'>
            <div className='addstudent'><h4>Add Admin Data</h4></div>
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
                                Admin ID:
                            </td>
                            <td>
                                <input type="text" name="title" placeholder="Admin ID" />
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
                            <td>Select Image:</td>
                            <td>
                                <input type="file" name="image" />
                            </td>

                        </tr>

                        <tr>
                            <td>Description:</td>
                            <td>
                                <textarea name="description" cols="23" rows="4" placeholder="Description"></textarea>
                            </td>
                        </tr>
                        <tr>
                            <td>Address:</td>
                            <td>
                                <textarea name="description" cols="23" rows="2" placeholder="Address"></textarea>
                            </td>
                        </tr>
                        <tr>
                            <td>Phone No.:</td>
                            <td>
                                <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />                            </td>
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
