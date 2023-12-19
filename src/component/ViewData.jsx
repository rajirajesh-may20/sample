import React, { useEffect, useRef, useState } from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import axios from 'axios'

export default function ViewData() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const UserName = useRef('');
    const UserPhone = useRef(0);
    const UserMail = useRef('');

    const [views, setViews] = useState([])



    function AddData() {
        axios.post('https://654c8c5f77200d6ba858fc38.mockapi.io/CRUD', {
            Name: UserName.current.value,
            Email: UserMail.current.value,
            Phone: UserPhone.current.value
        })
            .then(alert('Data Added'))
            .then(setShow(false))
            .catch(err => console.log(err));

        UserName.current.value = " ";
        UserMail.current.value = " ";
        UserPhone.current.value = " ";
    }

    useEffect(() => {
        axios.get('https://654c8c5f77200d6ba858fc38.mockapi.io/CRUD')
            .then(res => setViews(res.data))
            .catch(err => console.log(err));

    })
    return (
        <div>
            {/* Add Data Button */}
            <Button variant="primary" onClick={handleShow}>
                Add Data
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    {/* Form Started */}

                    <Form>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" ref={UserName} placeholder="Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupPassword">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={UserMail} placeholder="Email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupPassword">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control type="number" ref={UserPhone} placeholder="Phone" />
                        </Form.Group>
                    </Form>

                    {/* Form Ended */}

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={AddData}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
            {/* End of Add Data */}

            {/* ======================================== */}

            {/* View Data Table */}

            <Table>
                <thead>
                    <tr>
                        <th>S.no</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        views.map((items,index)=>{
                            return(
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{items.Name}</td>
                                    <td>{items.Email}</td>
                                    <td>{items.Phone}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>

            {/* End of View Data */}
        </div>
    )
}
