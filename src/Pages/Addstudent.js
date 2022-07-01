import React, { useState } from "react";
import { Link } from "react-router-dom";
import StudentService from "../services/StudentService";
import { useNavigate } from "react-router-dom";

const AddStudent = () => {
  const [student, setStudent] = useState({
    student_id: "",
    name: "",
    parent_id: "",
    dob: "",
    student_class: "",
    section: "",
    roll: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setStudent({ ...student, [e.target.name]: value });
  };

  const saveStudent = (e) => {
    e.preventDefault();

    StudentService.addStudent(student)
      .then((res) => {
        console.log(res);
        navigate("/studentall");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className=" d-flex justify-content-center py-5">
      <div className="card col-md-6 px-5 bg-light text-dark">
        <h3 className="text-center mt-5">Add Student Data</h3>
        <div className="card-body">
          <form>
            <div className="form-group my-3">
              <label>Id: </label>
              <input
                placeholder="Id"
                name="student_id"
                className="form-control"
                value={student.student_ID}
                onChange={(e) => handleChange(e)}
                type="text"
              />
            </div>
            <div className="form-group my-3">
              <label>Name: </label>
              <input
                placeholder="Name"
                name="name"
                className="form-control"
                value={student.name}
                onChange={(e) => handleChange(e)}
                type="text"
              />
            </div>
            <div className="form-group my-3">
              <label>Class: </label>
              <input
                placeholder="Class"
                name="student_class"
                className="form-control"
                value={student.class}
                onChange={(e) => handleChange(e)}
                type="text"
              />
            </div>
            <div className="form-group my-3">
              <label>Section: </label>
              <input
                placeholder="Section"
                name="section"
                className="form-control"
                value={student.section}
                onChange={(e) => handleChange(e)}
                type="text"
              />
            </div>
            <div className="form-group my-3">
              <label>Roll: </label>
              <input
                placeholder="Roll"
                name="roll"
                className="form-control"
                value={student.roll}
                onChange={(e) => handleChange(e)}
                type="text"
              />
            </div>
            <div className="form-group my-3">
              <label>Parents: </label>
              <input
                placeholder="Parents Id"
                name="parent_id"
                className="form-control"
                value={student.parent_ID}
                onChange={(e) => handleChange(e)}
                type="text"
              />
            </div>
            <div className="form-group my-3">
              <label>DOB </label>
              <input
                placeholder="Date of Birth"
                name="dob"
                className="form-control"
                value={student.dob}
                onChange={(e) => handleChange(e)}
                type="date"
              />
            </div>
            <button className="btn btn-success my-3" onClick={saveStudent}>
              Save
            </button>
            <Link to="/studentall">
              <button className="btn btn-danger my-3 mx-2">Cancel</button>
            </Link>{" "}
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddStudent;
