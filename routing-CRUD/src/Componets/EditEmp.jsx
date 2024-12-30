import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { getLocalData, setLocalData } from "../services/localData";
import generateUniqueId from "generate-unique-id";
import { useNavigate, useParams } from "react-router";

function EditEmp() {
  const { id } = useParams();
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
  };
  const [inputForm, setInputForm] = useState(intialState);

  const handelChanged = (e) => {
    const { name, value } = e.target;
    setInputForm({
      ...inputForm,
      [name]: value,
    });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    let getData = getLocalData();
    let updateData = getData.map((emp) => {
        if(emp.id == inputForm.id){
            return inputForm;
        }else{
            return emp;
        }
    })
    setLocalData(updateData);
    navigate("/");
    console.log("Form Submit...");
  };

  useEffect(()=> {
    let data = getLocalData();
    let singleRecord = data.find((emp) => emp.id == id);
    setInputForm(singleRecord);
  }, [])
  return (
    <>
      <Container>
        <h2 className="text-center fw-bold mt-4">Edit Emplyoee</h2>
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
                checked= {inputForm.gender == "Male"}
              />
            </Col>
            <Col sm="2">
              <Form.Check
                type="radio"
                label={"Female"}
                name="gender"
                value={"Female"}
                onChange={handelChanged}
                checked= {inputForm.gender == "Female"}
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
                <option value="Admin" selected={inputForm.department == "Admin"}>Admin</option>
                <option value="HR" selected={inputForm.department == "HR"}>HR</option>
                <option value="Tester" selected={inputForm.department == "Tester"}>Tester</option>
                <option value="Developer" selected={inputForm.department == "Developer"}>Developer</option>
                <option value="Designer" selected={inputForm.department == "Designer"}>Designer</option>
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
              <Button type="submit">Update Employee</Button>
            </Col>
          </Form.Group>
        </Form>
      </Container>
    </>
  );
}

export default EditEmp;
