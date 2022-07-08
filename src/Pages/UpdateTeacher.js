import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import TeacherService from "../services/TeacherService";

const UpdateTeacher = (props) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [teacher, setTeacher] = useState({
    id: id,
    name: "",
    subject: "",
    password: "",
  });

  useEffect(() => {
    TeacherService.getTeacherById(teacher.id).then((res) => {
      let tea = res.data;
      console.log(tea);
      setTeacher({
        id: tea.id,
        name: tea.name,
        subject: tea.subject,
        password: tea.password,
      });
    });
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    setTeacher({ ...teacher, [e.target.name]: value });
  };

  const editTeacher = (e) => {
    e.preventDefault();
    console.log(teacher);
    TeacherService.editTeacher(teacher, teacher.id).then((res) => {
      navigate("/teacherall");
    });
  };

  return (
    <div>
      <div className="addparent">
        <h4>Update Teacher Data</h4>
      </div>

      <form className="addt">
        <div className="form-outline mb-4">
          <label className="form-label" for="form2Example2">
            Full Name
          </label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={teacher.name}
            placeholder="Enter teacher name"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="form-outline mb-4">
          <label className="form-label" for="form2Example2">
            Subject
          </label>
          <input
            type="text"
            className="form-control"
            name="subject"
            value={teacher.subject}
            placeholder="Enter subject"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="form-outline mb-4">
          <label className="form-label" for="form2Example2">
            Teacher ID
          </label>
          <input
            type="text"
            className="form-control"
            name="id"
            value={teacher.id}
            placeholder="Teacher ID"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="form-outline mb-4">
          <label className="form-label" for="form2Example2">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={teacher.password}
            placeholder="Password"
            onChange={(e) => handleChange(e)}
          />
        </div>
        {/* <div className="form-outline mb-4">
                    <label className="form-label" for="form2Example2">Age</label>
                    <input type="number" id="form2Example2" className="form-control" name="year" />

                </div>
                <div className="form-outline mb-4">
                    <label className="form-label" for="form2Example2">Gender &nbsp;</label>
                    <input type="radio" name="gender" value="male" /> &nbsp;Male &nbsp;
                    <input type="radio" name="gender" value="female" /> &nbsp;Female &nbsp;

                </div> */}
        {/* <div className="form-outline mb-4">
                    <label className="form-label" for="form2Example2">Select Teacher Image</label>
                    <input type="file" id="form2Example2" className="form-control" name="studentimage" />

                </div>
                <div className="form-outline mb-4">
                    <label className="form-label" for="form2Example2">Subject Name</label>
                    <input type="text" id="form2Example2" className="form-control" name="full_name" placeholder="Enter subject name" />

                </div>                <div className="form-outline mb-4">
                    <label className="form-label" for="form2Example2">Address</label>
                    <textarea name="description" id="form2Example2" className="form-control" cols="23" rows="2" placeholder="Address"></textarea>

                </div>
                <div className="form-outline mb-4">
                    <label className="form-label" for="form2Example2">Phone No.</label>
                    <input type="tel" id="form2Example2" className="form-control" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />


                </div> */}
        <button className="btn btn-success my-3" onClick={editTeacher}>
          Save
        </button>
        <Link to="/teacherall">
          <button className="btn btn-danger my-3 mx-2">Cancel</button>
        </Link>{" "}
      </form>
    </div>
  );
};

export default UpdateTeacher;
