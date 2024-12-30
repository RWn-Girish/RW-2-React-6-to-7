import React, { useState } from "react";
import { getLocalData, setLocalData } from "../services/localData";
import { Button, Container, Table } from "react-bootstrap";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router";

function Home() {
  let navigate = useNavigate();
  let [employees, setEmployees] = useState(getLocalData());

  const handelEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  const handelDelete = (id) => {
    let oldRecords = getLocalData();
    let updateData = oldRecords.filter((emp) => emp.id != id);
    setEmployees(updateData);
    setLocalData(updateData);
  };
  return (
    <>
      <Container>
        <h2>Home Page</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Salary</th>
              <th>Department</th>
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
                <td>{emp.salary}</td>
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
