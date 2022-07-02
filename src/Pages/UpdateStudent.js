import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import StudentService from "../services/StudentService";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const UpdateStudent = (props) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [student, setStudent] = useState({
    student_id: id,
    name: "",
    parent_id: "",
    dob: "",
    student_class: "",
    section: "",
    roll: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setStudent({ ...student, [e.target.name]: value });
  };

  const editStudent = (e) => {
    e.preventDefault();
    console.log(student);
    StudentService.editStudent(student, student.student_id).then((res) => {
      navigate("/studentall");
    });
    // StudentService.editStudent(student, id)
    //   .then((res) => {
    //     console.log(res);
    //     navigate("/studentall");
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  useEffect(() => {
    StudentService.getStudentById(student.student_id).then((res) => {
      let stu = res.data;
      console.log(stu);
      console.log(props);
      setStudent({
        student_id: stu.student_id,
        name: stu.name,
        parent_id: stu.parent_id,
        dob: stu.dob,
        student_class: stu.student_class,
        section: stu.section,
        roll: stu.roll,
      });
    });
  }, []);

  return (
    <div className=" d-flex justify-content-center py-5">
      <div className="card col-md-6 px-5 bg-light text-dark">
        <h3 className="text-center mt-5">Edit Student Data</h3>
        <div className="card-body">
          <form>
            <div className="form-group my-3">
              <label>Id: </label>
              <input
                placeholder="Id"
                name="student_id"
                className="form-control"
                value={student.student_id}
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
                value={student.student_class}
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
                value={student.parent_id}
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
            <button className="btn btn-success my-3" onClick={editStudent}>
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

export default UpdateStudent;
