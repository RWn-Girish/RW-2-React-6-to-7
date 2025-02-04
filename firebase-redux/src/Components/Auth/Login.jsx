import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addNewUserAsync, googleLoginAsync, loginUserAsync } from "../../services/actions/auth.action";
import { Link, useNavigate } from "react-router";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user, error} = useSelector(state => state.authReducer);
    const [inputForm, setInputForm] = useState({
        email: "",
        password: ""
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
            dispatch(loginUserAsync(inputForm));
    }

    const handleGoogleLogin = () => {
        dispatch(googleLoginAsync())
    }

    useEffect(() => {
        if(user){
            navigate("/")
        }
    }, [user]);

    return (
        <>
        <Container>
            {error ? <p>{error}</p> : ""}
        <h3>Login User</h3>
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
            <Form.Label column sm="2"></Form.Label>
            <Col sm="10">
              <Button type="submit">Login User</Button>
            </Col>
          </Form.Group>
        </Form>
        <Button onClick={handleGoogleLogin}>Google Login</Button>
        <p>Create an Account ? <Link to={"/signup"}>SignUp</Link></p>
      </Container>
        
        </>
    )
};

export default Login;