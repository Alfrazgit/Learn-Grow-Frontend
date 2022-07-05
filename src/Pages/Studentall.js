import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import StudentService from "../services/StudentService";
import "./../index.css";

const Studentall = () => {
  const navigate = useNavigate();

  const [students, setStudents] = useState([]);

  const editStudent = (e, id) => {
    e.preventDefault();
    navigate(`./../editstudent/${id}`);
  };

  const deleteStudent = (e, id) => {
    e.preventDefault();
    StudentService.deleteStudent(id).then((res) => {
      if (students) {
        setStudents((prevElement) => {
          return prevElement.filter((student) => student.student_id !== id);
        });
      }
    });
  };

  React.useEffect(() => {
    StudentService.getStudents().then((res) => {
      setStudents(res.data);
    });
  }, []);

  return (
    <div className="py-5 px-5">
      <h1>All Students</h1>
      <table className="table table-striped table-centered students-table">
        <thead>
          <h4>Class-9</h4>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Class</th>
            <th scope="col">Section</th>
            <th scope="col">Roll</th>
            <th scope="col">parents</th>
            <th scope="col">DOB</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.student_id}>
              <td>{student.student_id}</td>
              <td>{student.name}</td>
              <td>{student.student_class}</td>
              <td>{student.section}</td>
              <td>{student.roll}</td>
              <td>{student.parent_id}</td>
              <td>{student.dob}</td>
              <td className="actions">
                <button
                  className="btn btn-info"
                  onClick={(e, id) => editStudent(e, student.student_id)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger ml-2"
                  onClick={(e, id) => deleteStudent(e, student.student_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <table className="table table-striped table-centered students-table">
        <thead>
          <h4>Class-10</h4>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Class</th>
            <th scope="col">Section</th>
            <th scope="col">Roll</th>
            <th scope="col">parents</th>
            <th scope="col">DOB</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.student_id}>
            <td>{student.student_id}</td>
            <td>{student.name}</td>
            <td>{student.student_class}</td>
            <td>{student.section}</td>
            <td>{student.roll}</td>
            <td>{student.parent_id}</td>
            <td>{student.dob}</td>
            <td className="actions">
                <button
                  className="btn btn-info"
                  onClick={() => editStudent(student, student.student_id)}
                >
                  Edit
                </button>
                <Link to="/#">
                  <button className="btn btn-danger">Delete</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <table className="table table-striped table-centered students-table">
        <thead>
          <h4>Class-11</h4>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Class</th>
            <th scope="col">Section</th>
            <th scope="col">Roll</th>
            <th scope="col">parents</th>
            <th scope="col">DOB</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.student_id}>
              <td>{student.student_id}</td>
              <td>{student.name}</td>
              <td>{student.student_class}</td>
              <td>{student.section}</td>
              <td>{student.roll}</td>
              <td>{student.parent_id}</td>
              <td>{student.dob}</td>
              <td className="actions">
                <button
                  className="btn btn-info"
                  onClick={() => editStudent(student, student.student_id)}
                >
                  Edit
                </button>
                <Link to="/#">
                  <button className="btn btn-danger">Delete</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <table className="table table-striped table-centered students-table">
        <thead>
          <h4>Class-12</h4>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Class</th>
            <th scope="col">Section</th>
            <th scope="col">Roll</th>
            <th scope="col">parents</th>
            <th scope="col">DOB</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.student_id}>
              <td>{student.student_id}</td>
              <td>{student.name}</td>
              <td>{student.student_class}</td>
              <td>{student.section}</td>
              <td>{student.roll}</td>
              <td>{student.parent_id}</td>
              <td>{student.dob}</td>
              <td className="actions">
                <button
                  className="btn btn-info"
                  onClick={() => editStudent(student, student.student_id)}
                >
                  Edit
                </button>
                <Link to="/#">
                  <button className="btn btn-danger">Delete</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="">
        <button
          className="btn btn-primary addstudent-btn"
          onClick={() => navigate("/addStudent")}
        >
          Add Student
        </button>
      </div>
    </div>
  );
};

export default Studentall;
