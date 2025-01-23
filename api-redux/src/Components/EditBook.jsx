import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { singleBook, singleBookAsync, updateBook, updateBookAsync } from "../services/actions/book.action";
import { useNavigate, useParams } from "react-router";

function EditBook() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {book, isUpdated} = useSelector(state => state.bookReducer)
  const [bookInput, setBookInput] = useState({
    id: "",
    title: "",
    author: "",
    category: "",
    pages: "",
  });

  const handelChanged = (e) => {
    const { name, value } = e.target;
    setBookInput({
      ...bookInput,
      [name]: value,
    });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    console.log("Submit now", bookInput);

    dispatch(updateBookAsync(bookInput));
  };

  useEffect(()=> {
    dispatch(singleBookAsync(id));
  }, [])
  useEffect(()=> {
    if(book)
        setBookInput(book);
  }, [book])

  useEffect(()=> {
    if(isUpdated){
      navigate("/");
    }
  }, [isUpdated])
  return (
    <>
      <Container>
        <Form onSubmit={handelSubmit}>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              Book Title
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="text"
                placeholder="Enter Book Title"
                name="title"
                value={bookInput.title}
                onChange={handelChanged}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              Book Author
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="text"
                placeholder="Enter Book Author"
                name="author"
                value={bookInput.author}
                onChange={handelChanged}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              Book Category
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="text"
                placeholder="Enter Book Category"
                name="category"
                value={bookInput.category}
                onChange={handelChanged}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              Pages
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="number"
                placeholder="Enter Book Total pages"
                name="pages"
                value={bookInput.pages}
                onChange={handelChanged}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2"></Form.Label>
            <Col sm="10">
              <Button type="submit">Update Book</Button>
            </Col>
          </Form.Group>
        </Form>
      </Container>
    </>
  );
}

export default EditBook;
