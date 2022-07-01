import React from "react";
import { Link } from "react-router-dom";
import StudentService from "../services/StudentService";
import "./../index.css";

export default class Studentall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
    };

    this.addStudent = this.addStudent.bind(this);
  }

  componentDidMount() {
    StudentService.getStudents().then((res) => {
      this.setState({ students: res.data });
    });
  }

  addStudent() {
    this.props.history.push("/addstudent");
  }

  render() {
    return (
      <div className="py-5 px-5">
        <h1>All Students</h1>
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
            {this.state.students.map((student) => (
              <tr key={student.student_id}>
                <td>{student.student_id}</td>
                <td>{student.name}</td>
                <td>{student.student_class}</td>
                <td>{student.section}</td>
                <td>{student.roll}</td>
                <td>{student.parent_id}</td>
                <td>{student.dob}</td>
                <td className="actions">
                  <Link to="/#" className="px-1">
                    <button className="btn btn-info">Edit</button>
                  </Link>
                  <Link to="/#">
                    <button className="btn btn-danger">Delete</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <table className="table table-striped">
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
            {this.state.students.map((student) => (
              <tr key={student.student_id}>
                <td>{student.student_id}</td>
                <td>{student.name}</td>
                <td>{student.student_class}</td>
                <td>{student.section}</td>
                <td>{student.roll}</td>
                <td>{student.parent_id}</td>
                <td>{student.dob}</td>
                <td className="actions">
                  <Link to="/#" className="px-1">
                    <button className="btn btn-info">Edit</button>
                  </Link>
                  <Link to="/#">
                    <button className="btn btn-danger">Delete</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <table className="table table-striped">
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
            {this.state.students.map((student) => (
              <tr key={student.student_id}>
                <td>{student.student_id}</td>
                <td>{student.name}</td>
                <td>{student.student_class}</td>
                <td>{student.section}</td>
                <td>{student.roll}</td>
                <td>{student.parent_id}</td>
                <td>{student.dob}</td>
                <td className="actions">
                  <Link to="/#" className="px-1">
                    <button className="btn btn-info">Edit</button>
                  </Link>
                  <Link to="/#">
                    <button className="btn btn-danger">Delete</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="">
          <Link to="/addstudent">
            <button
              className="btn btn-primary addstudent-btn"
              onClick={this.addStudent}
            >
              Add Student
            </button>
          </Link>
        </div>
      </div>
    );
  }
}
