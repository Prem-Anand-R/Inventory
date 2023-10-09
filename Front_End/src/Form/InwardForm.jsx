import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function InwardForm() {
    const [validated, setValidated] = useState(false);
    const [inwardData, setinwardData] = useState({
        productId: '',
        date: '',
        productName: '',
        numProduct: ''

    })

        // Inward datas input 
    const inwardSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        event.preventDefault();
        axios.post('http://localhost:3001/inward_details', inwardData)
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log(err))
        setValidated(true);
    };




    return (
        <Form noValidate validated={validated} onSubmit={inwardSubmit}>
            <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="validationCustom01">
                    <Form.Label>Date</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="DD/MM/YYYY" onChange={e => setinwardData({ ...inwardData, date: e.target.value })}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="validationCustom02">
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Name" onChange={e => setinwardData({ ...inwardData, productName: e.target.value })}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>

            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="validationCustom03">
                    <Form.Label>No of Product</Form.Label>
                    <Form.Control type="text" placeholder="No of Product" required onChange={e => setinwardData({ ...inwardData, numProduct: e.target.value })} />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid Number.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="validationCustom04">
                    <Form.Label>Product ID</Form.Label>
                    <Form.Control type="text" placeholder="Product Id" required onChange={e => setinwardData({ ...inwardData, productId: e.target.value })} />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid Id.
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

export default InwardForm