import React from "react";
import { Link } from "react-router-dom";

const Teacher = () => {

    return (
        <div>
            <div class="contentteacher">
                
                <div class="mainstudent">

                    <div className="float-element">
                        <div class="float-child-element">
                            <div class="red">Total Students</div>
                        </div>
                        <div class="float-child-element">
                            <div class="red">Total Exams</div>
                        </div>
                    </div>




                    <table class="table table-striped">
                        <thead> <div className="mystu"><h4>My Students</h4></div>
                            <tr>
                                <th scope="col">Roll No.</th>
                                <th scope="col">Name</th>
                                <th scope="col">Gender</th>
                                <th scope="col">Class</th>
                                <th scope="col">parents</th>
                                <th scope="col">DOB</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th >1</th>
                                <td>Ansh</td>
                                <td>Male</td>
                                <td>12</td>
                                <td>A.B.</td>
                                <td>10.01.2001</td>
                                <td>9876543210</td>
                                <td className="actions"><Link to="/#">Edit</Link>/<Link to="/#">Delete</Link></td>
                            </tr>
                            <tr>
                                <th >1</th>
                                <td>Ansh</td>
                                <td>Male</td>
                                <td>12</td>
                                <td>A.B.</td>
                                <td>10.01.2001</td>
                                <td>9876543210</td>
                                <td className="actions"><Link to="/#">Edit</Link>/<Link to="/#">Delete</Link></td>
                            </tr>
                            <tr>
                                <th >1</th>
                                <td>Ansh</td>
                                <td>Male</td>
                                <td>12</td>
                                <td>A.B.</td>
                                <td>10.01.2001</td>
                                <td>9876543210</td>
                                <td className="actions"><Link to="/#">Edit</Link>/<Link to="/#">Delete</Link></td>
                            </tr>
                        </tbody>
                    </table>



                </div>

            </div>
        </div>











    )
}
export default Teacher;