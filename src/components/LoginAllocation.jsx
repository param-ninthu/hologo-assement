import React from "react";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import "./../assets/css/login-allocation.css";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

const LoginAllocation = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container className="container" fluid>
      <Row className="row-form">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Allocate Student
          </Button>
        </Form>
      </Row>
      <Row className="row">
        <Col></Col>
      </Row>
      <Row className="row">
        <Card>
          <Card.Body>Student Email : ninthu1999@gmail.com</Card.Body>
          <Card.Body>
            {" "}
            <Button onClick={handleShow}>Update</Button> <Button>Delete</Button>{" "}
          </Card.Body>
        </Card>
      </Row>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update email</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default LoginAllocation;
