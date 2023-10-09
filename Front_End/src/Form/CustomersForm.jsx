import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function CustomersForm() {

    const [validated, setValidated] = useState(false);
    const [customers, setCustomers] = useState({
        customerId: '',
        customerName: '',
        email: '',
        activeStatus: ''
    })

       // customers datas input 

       const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        event.preventDefault();
        axios.post('http://localhost:3001/customers_details', customers)
            .then(res => {
                console.log(res)
                // navigate('/')
            })
            .catch(err => console.log(err))
        setValidated(true);
    };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
    <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom01">
            <Form.Label>Customer Id</Form.Label>
            <Form.Control
                required
                type="text"
                placeholder="customer id" onChange={e => setCustomers({ ...customers, customerId: e.target.value })}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom02">
            <Form.Label>Customer Name</Form.Label>
            <Form.Control
                required
                type="text"
                placeholder="Name" onChange={e => setCustomers({ ...customers, customerName: e.target.value })}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

    </Row>
    <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>Email</Form.Label>
            <Form.Control type="text" placeholder="email" required onChange={e => setCustomers({ ...customers, email: e.target.value })} />
            <Form.Control.Feedback type="invalid">
                Please provide a valid email.
            </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom04">
            <Form.Label>Active Status</Form.Label>
            <Form.Control type="text" placeholder="status" required onChange={e => setCustomers({ ...customers, activeStatus: e.target.value })} />
            <Form.Control.Feedback type="invalid">
                Please provide a valid status.
            </Form.Control.Feedback>
        </Form.Group>

    </Row>
    <Form.Group className="mb-3">
        <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
            feedbackType="invalid"
        />
    </Form.Group>

    <Button type="submit" onClick={() => {
        window.location.reload(false);
    }}>Add</Button>
</Form>
  )
}

export default CustomersForm