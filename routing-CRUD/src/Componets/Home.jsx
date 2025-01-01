import React, { useState } from "react";
import { getLocalData, setLocalData } from "../services/localData";
import { Button, Container, Table } from "react-bootstrap";
import {
  FaArrowDown,
  FaArrowUp,
  FaEdit,
  FaEye,
  FaSearch,
  FaTrash,
} from "react-icons/fa";
import { useNavigate } from "react-router";

function Home() {
  let navigate = useNavigate();
  let [employees, setEmployees] = useState(getLocalData());
  const [searchVal, setSearchVal] = useState("");

  const handelEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  const handelDelete = (id) => {
    let oldRecords = getLocalData();
    let updateData = oldRecords.filter((emp) => emp.id != id);
    setEmployees(updateData);
    setLocalData(updateData);
  };

  const handelSearch = () => {
    let allEmps = getLocalData();
    let updateData = allEmps.filter((emp) => {
      return (
        emp.fname.toLowerCase() == searchVal ||
        emp.lname.toLowerCase() == searchVal ||
        emp.department.toLowerCase() == searchVal
      );
    });

    setEmployees(updateData);
    setSearchVal("");
    // console.log(updateData);
  };

  // const handelAsc = () => {
  //   let allEmps = getLocalData();
  //   let updateData = allEmps.sort((a,b)=> {
  //     return a.fname.localeCompare(b.fname)
  //   });

  //   setEmployees(updateData);
  // }
  const handelSort = (type, field) => {
    let allEmps = getLocalData();
    let updateData = [];
    if (type == "asc") {
      updateData = allEmps.sort((a, b) => {
        return a[field].localeCompare(b[field]);
      });
    }else if(type == 'desc'){
      updateData = allEmps.sort((a, b) => {
        return b[field].localeCompare(a[field]);
      });
    }

    setEmployees(updateData);
  };

  return (
    <>
      <Container>
        <h2>Home Page</h2>
        <div>
          <input
            type="text"
            value={searchVal}
            onChange={(e) => setSearchVal(e.target.value)}
          />{" "}
          &nbsp;
          <Button onClick={handelSearch}>
            <FaSearch />
          </Button>{" "}
          ||
          {/* <Button onClick={handelAsc}><FaArrowUp /></Button> || 
          <Button><FaArrowDown /></Button> */}
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>
                First Name{" "}
                <Button onClick={() => handelSort("asc", "fname")}>
                  <FaArrowUp />
                </Button>{" "}
                ||
                <Button onClick={() => handelSort("desc", "fname")}>
                  <FaArrowDown />
                </Button>
              </th>
              <th>
                Last Name{" "}
                <Button onClick={() => handelSort("asc", "lname")}>
                  <FaArrowUp />
                </Button>{" "}
                ||
                <Button onClick={() => handelSort("desc", "lname")}>
                  <FaArrowDown />
                </Button>
              </th>
              <th>
                Email{" "}
                <Button onClick={() => handelSort("asc", "email")}>
                  <FaArrowUp />
                </Button>{" "}
                ||
                <Button onClick={() => handelSort("desc", "email")}>
                  <FaArrowDown />
                </Button>
              </th>
              <th>
                Gender{" "}
                <Button onClick={() => handelSort("asc", "gender")}>
                  <FaArrowUp />
                </Button>{" "}
                ||
                <Button onClick={() => handelSort("desc", "gender")}>
                  <FaArrowDown />
                </Button>
              </th>
              <th>
                Department{" "}
                <Button onClick={() => handelSort("asc", "department")}>
                  <FaArrowUp />
                </Button>{" "}
                ||
                <Button onClick={() => handelSort("desc", "department")}>
                  <FaArrowDown />
                </Button>
              </th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp) => (
              <tr key={emp.id}>
                <td>{emp.id}</td>
                <td>{emp.fname}</td>
                <td>{emp.lname}</td>
                <td>{emp.email}</td>
                <td>{emp.gender}</td>
                <td>{emp.department}</td>
                <td>
                  <Button variant="info">
                    <FaEye />
                  </Button>{" "}
                  ||
                  <Button onClick={() => handelEdit(emp.id)} variant="warning">
                    <FaEdit />
                  </Button>{" "}
                  ||
                  <Button onClick={() => handelDelete(emp.id)} variant="danger">
                    <FaTrash />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
}

export default Home;
