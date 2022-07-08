import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TeacherService from "../services/TeacherService";

const Teacherall = () => {
  const navigate = useNavigate();

  const [teachers, setTeachers] = useState([]);

  React.useEffect(() => {
    TeacherService.getAllteachers().then((res) => {
      setTeachers(res.data);
    });
  }, []);

  const editTeacher = (e, id) => {
    e.preventDefault();
    console.log(id);
    navigate(`./../updateteacher/${id}`);
  };

  const deleteTeacher = (e, id) => {
    TeacherService.deleteTeacher(id).then((res) => {
      if (teachers) {
        setTeachers((prevElement) => {
          return prevElement.filter((teacher) => teacher.id !== id);
        });
      }
    });
  };

  return (
    <div className="allstudent">
      <div className="allstu">
        <h2>All Teacher Data</h2>
      </div>
      <div className="studentrow">
        <table class="table table-striped">
          <thead>
            {" "}
            <h4>Subject-Math</h4>
            <tr>
              <th scope="col">Teacher ID</th>
              <th scope="col">Name</th>
              <th scope="col">Subject </th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {teachers
              .filter((teacher) => teacher.subject === "Math")
              .map((t) => (
                <tr key={t.id}>
                  <td>{t.id}</td>
                  <td>{t.name}</td>
                  <td>{t.subject}</td>
                  <td>
                    {" "}
                    <button
                      class="btn btn-warning"
                      onClick={(e, id) => editTeacher(e, t.id)}
                    >
                      Edit
                    </button>
                    <button
                      class="btn btn-danger"
                      onClick={(e, id) => deleteTeacher(e, id)}
                    >
                      Delete
                    </button>{" "}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div className="studentrow">
        <table class="table table-striped">
          <thead>
            {" "}
            <h4>Subject-English</h4>
            <tr>
              <th scope="col">Teacher ID</th>
              <th scope="col">Name</th>
              <th scope="col">Subject </th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {teachers
              .filter((teacher) => teacher.subject === "English")
              .map((t) => (
                <tr key={t.id}>
                  <td>{t.id}</td>
                  <td>{t.name}</td>
                  <td>{t.subject}</td>
                  <td>
                    {" "}
                    <button
                      class="btn btn-warning"
                      onClick={(e, id) => editTeacher(e, t.id)}
                    >
                      Edit
                    </button>
                    <button
                      class="btn btn-danger"
                      onClick={(e, id) => deleteTeacher(e, t.id)}
                    >
                      Delete
                    </button>{" "}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div className="studentrow">
        <table class="table table-striped">
          <thead>
            {" "}
            <h4>Subject-Language</h4>
            <tr>
              <th scope="col">Teacher ID</th>
              <th scope="col">Name</th>
              <th scope="col">Subject </th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {teachers
              .filter((teacher) => teacher.subject === "Language")
              .map((t) => (
                <tr key={t.id}>
                  <td>{t.id}</td>
                  <td>{t.name}</td>
                  <td>{t.subject}</td>
                  <td>
                    {" "}
                    <button
                      class="btn btn-warning"
                      onClick={(e, id) => editTeacher(e, t.id)}
                    >
                      Edit
                    </button>
                    <button
                      class="btn btn-danger"
                      onClick={(e, id) => deleteTeacher(e, id)}
                    >
                      Delete
                    </button>{" "}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div className="studentrow">
        <table class="table table-striped">
          <thead>
            {" "}
            <h4>Subject-Physical</h4>
            <tr>
              <th scope="col">Teacher ID</th>
              <th scope="col">Name</th>
              <th scope="col">Subject </th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {teachers
              .filter((teacher) => teacher.subject === "Physical")
              .map((t) => (
                <tr key={t.id}>
                  <td>{t.id}</td>
                  <td>{t.name}</td>
                  <td>{t.subject}</td>
                  <td>
                    {" "}
                    <button
                      class="btn btn-warning"
                      onClick={(e, id) => editTeacher(e, t.id)}
                    >
                      Edit
                    </button>
                    <button
                      class="btn btn-danger"
                      onClick={(e, id) => deleteTeacher(e, id)}
                    >
                      Delete
                    </button>{" "}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>{" "}
        <div className="teabtn">
          <button onClick={() => navigate("/addteacher")}>Add Teacher</button>
        </div>
      </div>
    </div>
  );
};

export default Teacherall;
