import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { getLocalData, setLocalData } from "../services/localData";
import generateUniqueId from "generate-unique-id";
import { useNavigate } from "react-router";

function AddEmp() {

  const navigate = useNavigate();
  const intialState = {
    id: "",
    fname: "",
    lname: "",
    email: "",
    contactno: "",
    DOB: "",
    gender: "",
    department: "",
    salary: "",
    address: "",
}
  const [inputForm, setInputForm] = useState(intialState);

  const handelChanged = (e) => {
    const {name, value} = e.target;
    setInputForm({
      ...inputForm,
      [name] : value
    })
  }

  const handelSubmit = (e) => {
      e.preventDefault();
      let getData = getLocalData();
      let id = generateUniqueId({
        length: 6,
        useLetters: false
      })
      getData.push({...inputForm, id})
      setLocalData(getData);
      navigate("/");
      console.log('Form Submit...');
  }
  return (
    <>
      <Container>
        <h2 className="text-center fw-bold mt-4">
          Add Emplyoee
        </h2>
        <Form onSubmit={handelSubmit}>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              Firstname:
            </Form.Label>
            <Col sm="4">
              <Form.Control
                type="text"
                name="fname"
                value={inputForm.fname}
                onChange={handelChanged}
              />
            </Col>
            <Form.Label column sm="2">
              Lastname:
            </Form.Label>
            <Col sm="4">
              <Form.Control
                type="text"
                name="lname"
                value={inputForm.lname}
                onChange={handelChanged}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              Email:
            </Form.Label>
            <Col sm="4">
              <Form.Control
                type="text"
                name="email"
                value={inputForm.email}
                onChange={handelChanged}
              />
            </Col>
            <Form.Label column sm="2">
              ContactNo:
            </Form.Label>
            <Col sm="4">
              <Form.Control
                type="number"
                name="contactno"
                value={inputForm.contactno}
                onChange={handelChanged}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              DOB:
            </Form.Label>
            <Col sm="4">
              <Form.Control
                type="date"
                name="DOB"
                value={inputForm.DOB}
                onChange={handelChanged}
              />
            </Col>
            <Form.Label column sm="2">
              Gender:
            </Form.Label>
            <Col sm="2">
              <Form.Check
                type="radio"
                label={"Male"}
                name="gender"
                value={"Male"}
                onChange={handelChanged}
              />
            </Col>
            <Col sm="2">
              <Form.Check
                type="radio"
                label={"Female"}
                name="gender"
                value={"Female"}
                onChange={handelChanged}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              Department:
            </Form.Label>
            <Col sm="4">
              <Form.Select
                aria-label="Default select example"
                name="department"
                onChange={handelChanged}
              >
                <option>Select Department</option>
                <option value="Admin">Admin</option>
                <option value="HR">HR</option>
                <option value="Tester">Tester</option>
                <option value="Developer">Developer</option>
                <option value="Designer">Designer</option>
              </Form.Select>
            </Col>
            <Form.Label column sm="2">
              Salary:
            </Form.Label>
            <Col sm="4">
              <Form.Control
                type="number"
                name="salary"
                value={inputForm.salary}
                onChange={handelChanged}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              Address:
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="text"
                name="address"
                value={inputForm.address}
                onChange={handelChanged}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="5"></Form.Label>
            <Col sm="5">
              <Button type="submit">
                Add Employee
              </Button>
            </Col>
          </Form.Group>
        </Form>
      </Container>
    </>
  );
}

export default AddEmp;
