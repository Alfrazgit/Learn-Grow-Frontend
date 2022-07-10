import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ParentService from "../services/ParentService";

const Parentall = () => {
  const navigate = useNavigate();
  const [parents, setParents] = useState([]);

  React.useEffect(() => {
    ParentService.getAllParents().then((res) => {
      setParents(res.data);
    });
  }, []);

  const editParent = (e, id) => {
    e.preventDefault();
    console.log(id);
    navigate(`./../updateparent/${id}`);
  };

  const deleteParent = (e, parent) => {
    const id = parent.id;
    ParentService.deleteParent(id).then((res) => {
      if (parents) {
        setParents((prevElement) => {
          return prevElement.filter((parent) => parent.id !== id);
        });
      }
    });
  };

  return (
    <div className="allstudent">
      <div className="allstu">
        <h2>All Parent Data</h2>
      </div>
      <div className="studentrow">
        <div className="stubtn">
          <button>
            <Link to="/Addparent"> Add Parent</Link>
          </button>
        </div>
        <div className="stucls">
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Name </th>
                <th scope="col">Phone</th>
                <th scope="col">Student Id</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {parents.map((parent) => (
                <tr key={parent.id}>
                  <td>{parent.id}</td>
                  <td>{parent.name}</td>
                  <td>{parent.phno}</td>
                  <td>{parent.stu_id}</td>
                  <td>
                    <>
                      <button
                        class="btn btn-warning mx-1"
                        onClick={(e, id) => editParent(e, parent.id)}
                      >
                        Edit
                      </button>
                      <button
                        class="btn btn-danger"
                        onClick={(e, id) => deleteParent(e, parent)}
                      >
                        Delete
                      </button>
                    </>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* <div className="studentrow">
        <table class="table table-striped">
          <thead>
            {" "}
            <h4>Class-10</h4>
            <tr>
              <th scope="col">Roll No.</th>
              <th scope="col">Parents</th>
              <th scope="col">Student Name</th>
              <th scope="col">Gender</th>
              <th scope="col">Class</th>
              <th scope="col">DOB</th>
              <th scope="col">Phone</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>A.B.</td>

              <td>Ansh</td>
              <td>Male</td>
              <td>12</td>
              <td>10.01.2001</td>
              <td>9876543210</td>
              <td className="actions">
                <Link to="/#">Edit</Link>/<Link to="/#">Delete</Link>
              </td>
            </tr>
            <tr>
              <th>1</th>
              <td>A.B.</td>

              <td>Ansh</td>
              <td>Male</td>
              <td>12</td>
              <td>10.01.2001</td>
              <td>9876543210</td>
              <td className="actions">
                <Link to="/#">Edit</Link>/<Link to="/#">Delete</Link>
              </td>
            </tr>
            <tr>
              <th>1</th>
              <td>A.B.</td>

              <td>Ansh</td>
              <td>Male</td>
              <td>12</td>
              <td>10.01.2001</td>
              <td>9876543210</td>
              <td className="actions">
                <Link to="/#">Edit</Link>/<Link to="/#">Delete</Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="studentrow">
        <table class="table table-striped">
          <thead>
            {" "}
            <h4>Class-11</h4>
            <tr>
              <th scope="col">Roll No.</th>
              <th scope="col">Parents</th>
              <th scope="col">Student Name</th>
              <th scope="col">Gender</th>
              <th scope="col">Class</th>
              <th scope="col">DOB</th>
              <th scope="col">Phone</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>A.B.</td>

              <td>Ansh</td>
              <td>Male</td>
              <td>12</td>
              <td>10.01.2001</td>
              <td>9876543210</td>
              <td className="actions">
                <Link to="/#">Edit</Link>/<Link to="/#">Delete</Link>
              </td>
            </tr>
            <tr>
              <th>1</th>
              <td>A.B.</td>

              <td>Ansh</td>
              <td>Male</td>
              <td>12</td>
              <td>10.01.2001</td>
              <td>9876543210</td>
              <td className="actions">
                <Link to="/#">Edit</Link>/<Link to="/#">Delete</Link>
              </td>
            </tr>
            <tr>
              <th>1</th>
              <td>A.B.</td>

              <td>Ansh</td>
              <td>Male</td>
              <td>12</td>
              <td>10.01.2001</td>
              <td>9876543210</td>
              <td className="actions">
                <Link to="/#">Edit</Link>/<Link to="/#">Delete</Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="studentrow">
        <table class="table table-striped">
          <thead>
            {" "}
            <h4>Class-12</h4>
            <tr>
              <th scope="col">Roll No.</th>
              <th scope="col">Parents</th>
              <th scope="col">Student Name</th>
              <th scope="col">Gender</th>
              <th scope="col">Class</th>
              <th scope="col">DOB</th>
              <th scope="col">Phone</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>A.B.</td>
              <td>Ansh</td>
              <td>Male</td>
              <td>12</td>
              <td>10.01.2001</td>
              <td>9876543210</td>
              <td className="actions">
                <Link to="/#">Edit</Link>/<Link to="/#">Delete</Link>
              </td>
            </tr>
            <tr>
              <th>1</th>
              <td>A.B.</td>
              <td>Ansh</td>
              <td>Male</td>
              <td>12</td>
              <td>10.01.2001</td>
              <td>9876543210</td>
              <td className="actions">
                <Link to="/#">Edit</Link>/<Link to="/#">Delete</Link>
              </td>
            </tr>
            <tr>
              <th>1</th>
              <td>A.B.</td>
              <td>Ansh</td>
              <td>Male</td>
              <td>12</td>
              <td>10.01.2001</td>
              <td>9876543210</td>
              <td className="actions">
                <Link to="/#">Edit</Link>/<Link to="/#">Delete</Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div> */}
    </div>
  );
};

export default Parentall;
