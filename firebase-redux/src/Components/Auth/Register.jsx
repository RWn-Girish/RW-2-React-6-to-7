import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addNewUserAsync } from "../../services/actions/auth.action";
import { Link, useNavigate } from "react-router";

const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {isCreated, error} = useSelector(state => state.authReducer);
    const [inputForm, setInputForm] = useState({
        email: "",
        password: "",
        cpassword: ""
    });

    const handelChanged = (e) => {
        const {name, value} = e.target;
        setInputForm({
            ...inputForm,
            [name] : value
        })
    };

    const handelSubmit = (e) => {
        e.preventDefault();
        if(inputForm.password === inputForm.cpassword){
            // console.log("Submit ==> ", inputForm);
            dispatch(addNewUserAsync(inputForm));
        }else{
            alert('Password & Confirm Password does not matched!')
        }
    }

    useEffect(() => {
        if(isCreated){
            navigate("/login")
        }
    }, [isCreated])
    return (
        <>
        <Container>
            {error ? <p>{error}</p> : ""}
        <h3>Regsiter User</h3>
        <Form onSubmit={handelSubmit}>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              Email
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="email"
                placeholder="Enter Email"
                name="email"
                value={inputForm.email}
                onChange={handelChanged}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              Password
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="password"
                placeholder="Enter password"
                name="password"
                value={inputForm.password}
                onChange={handelChanged}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              Confirm Password
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="password"
                placeholder="Enter Confirm password"
                name="cpassword"
                value={inputForm.cpassword}
                onChange={handelChanged}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2"></Form.Label>
            <Col sm="10">
              <Button type="submit">Register User</Button>
            </Col>
          </Form.Group>
        </Form>
        <p>Already Account ? <Link to={"/login"}>Login</Link></p>
      </Container>
        
        </>
    )
};

export default Register;