import React, { useState } from "react";
import { getLocalData } from "../services/localData";
import { Button, Container, Table } from "react-bootstrap";
import { FaEdit, FaEye, FaTrash } from 'react-icons/fa';

function Home() {
  let [employees, setEmployees] = useState(getLocalData());
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
                  </Button> ||
                  <Button>
                    <FaEdit />
                  </Button> ||
                  <Button variant="danger">
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
