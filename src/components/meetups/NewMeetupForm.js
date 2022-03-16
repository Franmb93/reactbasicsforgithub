import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function NewMeetupForm(props) {
  return (
      <Card style={{ width: '50rem' }} className="form-card">
         <Form className="form">
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
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label htmlFor='description'>Description</Form.Label>
            <Form.Control as="textarea" rows={5} type="text" placeholder="Enter description" required id="description"/>           
        </Form.Group>
       
       <div className="actions">
           <Button variant="primary" type="submit">
                Add
            </Button>
       </div>        
    </Form> 
      </Card>
    
  )
}


export default NewMeetupForm;
