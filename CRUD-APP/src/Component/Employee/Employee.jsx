import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row, Table } from "react-bootstrap";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const getLocalData = () => {
    return JSON.parse(localStorage.getItem("Employees")) || []
}

const Emplyoee = () => {
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

    const [storage, setStorage] = useState(getLocalData());

    const handelChanged = (e) => {
        const { name, value } = e.target;
        setInputForm({
            ...inputForm,
            [name]: value
        })
    }


    const handelSubmit = (e) => {
        e.preventDefault();
        console.log('Submit', inputForm);
        let id = Math.floor(Math.random() * 10000)
        setStorage([...storage, { ...inputForm, id }])
        setInputForm(intialState)
    }
    // console.log("Storage ==> ", storage);
    useEffect(() => {
        localStorage.setItem("Employees", JSON.stringify(storage));
    }, [storage]);
    return (
        <>
           
                <Row>
                    <Col>
                        <h2 className="text-center fw-bold mt-4">Add New Emplyoee</h2>
                        <Form onSubmit={handelSubmit}>
                            <Form.Group as={Row} className="mb-3" >
                                <Form.Label column sm="2">
                                    Firstname:
                                </Form.Label>
                                <Col sm="4">
                                    <Form.Control type="text" name="fname" value={inputForm.fname} onChange={handelChanged} />
                                </Col>
                                <Form.Label column sm="2">
                                    Lastname:
                                </Form.Label>
                                <Col sm="4">
                                    <Form.Control type="text" name="lname" value={inputForm.lname} onChange={handelChanged} />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3" >
                                <Form.Label column sm="2">
                                    Email:
                                </Form.Label>
                                <Col sm="4">
                                    <Form.Control type="text" name="email" value={inputForm.email} onChange={handelChanged} />
                                </Col>
                                <Form.Label column sm="2">
                                    ContactNo:
                                </Form.Label>
                                <Col sm="4">
                                    <Form.Control type="number" name="contactno" value={inputForm.contactno} onChange={handelChanged} />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3" >
                                <Form.Label column sm="2">
                                    DOB:
                                </Form.Label>
                                <Col sm="4">
                                    <Form.Control type="date" name="DOB" value={inputForm.DOB} onChange={handelChanged} />
                                </Col>
                                <Form.Label column sm="2">
                                    Gender:
                                </Form.Label>
                                <Col sm="2">
                                    <Form.Check type="radio" label={"Male"} name="gender" value={"Male"} onChange={handelChanged} />
                                </Col>
                                <Col sm="2">
                                    <Form.Check type="radio" label={"Female"} name="gender" value={"Female"} onChange={handelChanged} />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3" >
                                <Form.Label column sm="2">
                                    Department:
                                </Form.Label>
                                <Col sm="4">
                                    <Form.Select aria-label="Default select example" name="department" onChange={handelChanged}>
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
                                    <Form.Control type="number" name="salary" value={inputForm.salary} onChange={handelChanged} />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3" >
                                <Form.Label column sm="2">
                                    Address:
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control type="text" name="address" value={inputForm.address} onChange={handelChanged} />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3" >
                                <Form.Label column sm="5">
                                </Form.Label>
                                <Col sm="5">
                                    <Button type="submit">Add Employee</Button>
                                </Col>
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col>
                        <h2 className="text-center fw-bold mt-4">View Emplyoees</h2>
                        <Table striped bordered hover variant="light">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Full Name</th>
                                    <th>Gender</th>
                                    <th>Email</th>
                                    <th>ContactNo</th>
                                    <th>Department</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    storage.map((emp) => (
                                        <tr>
                                            <td>{emp.id}</td>
                                            <td>{emp.fname} {emp.lname}</td>
                                            <td>{emp.gender}</td>
                                            <td>{emp.email}</td>
                                            <td>{emp.contactno}</td>
                                            <td>{emp.department}</td>
                                            <td>
                                                <Button>
                                                    <FaEdit />
                                                </Button> ||
                                                <Button variant="danger">
                                                    <FaTrashAlt />
                                                </Button>
                                            </td>
                                        </tr>
                                    ))
                                }

                            </tbody>
                        </Table>
                    </Col>
                </Row>

        </>
    )
};
export default Emplyoee;