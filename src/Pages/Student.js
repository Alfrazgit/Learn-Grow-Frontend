import React from "react";
import { Link } from "react-router-dom";

const Student = () => {

    return (
        <div>
            <div class="content">
                <div className="nav">
                    <h4>About Me&nbsp;</h4>

                    <ul>
                        <li>
                            <img src="https://cdn3.iconfinder.com/data/icons/business-round-flat-vol-1-1/36/user_account_profile_avatar_person_student_male-512.png" class="img-thumbnail" alt="Student Image" />
                        </li>
                        <li>
                            Name: Abhash
                        </li>
                        <li>
                            Gender: Male
                        </li>
                        <li>
                            Father's Name: A.B.
                        </li>
                        <li>
                            Mother's Name: S.B.
                        </li>
                        <li>
                            Class: 12
                        </li>
                        <li>
                            Email: abhash@gmail.com
                        </li>
                        <li>
                            Admission No.: 18/1202
                        </li>
                        <li>
                            Phone No.: 9876543210
                        </li>
                    </ul>
                </div>

                <div class="mainattendance">
                    <div className="attendance">Attendance</div>
                    <h3>-:All Exam Results:-</h3>
                    <br></br>


                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Roll No.</th>
                                <th scope="col">Exam Date</th>
                                <th scope="col">Subject</th>
                                <th scope="col">Grade</th>
                                <th scope="col">%</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th >1</th>
                                <td>22.12.21</td>
                                <td>CS</td>
                                <td>E</td>
                                <td>95</td>

                            </tr>
                            <tr>
                                <th >1</th>
                                <td>22.12.21</td>
                                <td>Math</td>
                                <td>E</td>
                                <td>100</td>
                            </tr>
                            <tr>
                                <th >1</th>
                                <td>22.12.21</td>
                                <td>Chem</td>
                                <td>E</td>
                                <td>93</td>
                            </tr>
                        </tbody>
                    </table>



                </div>

            </div>
        </div>
    )
}

export default Student;