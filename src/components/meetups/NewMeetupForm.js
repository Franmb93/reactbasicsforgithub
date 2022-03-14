import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function NewMeetupForm(props) {
  return (
    <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label htmlFor='title'>Title</Form.Label>
            <Form.Control type="text" placeholder="Enter title" required id="title"/>           
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicImage">
            <Form.Label htmlFor='image'>Image</Form.Label>
            <Form.Control type="url" placeholder="Enter img url" required id="image"/>           
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label htmlFor='address'>Address</Form.Label>
            <Form.Control type="text" placeholder="Enter Address" required id="address"/>           
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label htmlFor='description'>Description</Form.Label>
            <Form.Control type="text" placeholder="Enter description" required id="description"/>           
        </Form.Group>
       
        <Button variant="primary" type="submit">
            Submit
        </Button>
    </Form>
  )
}


export default NewMeetupForm;
