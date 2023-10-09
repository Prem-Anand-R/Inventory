import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function ProductlistForm() {
    const [validated, setValidated] = useState(false);
    const [productList, setProductList] = useState({
        productId: '',
        productName: '',
        price: '',
        stockStatus: ''
    })

     // productList datas input 
     const productListSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        event.preventDefault();
        axios.post('http://localhost:3001/product_list', productList)
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log(err))
        setValidated(true);
    };
  return (
    <Form noValidate validated={validated} onSubmit={productListSubmit}>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="6" controlId="validationCustom01">
                            <Form.Label>Product Id </Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="product id" onChange={e => setProductList({ ...productList, productId: e.target.value })}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="validationCustom02">
                            <Form.Label>Product Name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Name" onChange={e => setProductList({ ...productList, productName: e.target.value })}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>

                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="6" controlId="validationCustom03">
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="text" placeholder="price" required onChange={e => setProductList({ ...productList, price: e.target.value })} />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid email.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="validationCustom04">
                            <Form.Label>Stocks Status</Form.Label>
                            <Form.Control type="text" placeholder="Availabile/Unavailable" required onChange={e => setProductList({ ...productList, stockStatus: e.target.value })} />
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

export default ProductlistForm