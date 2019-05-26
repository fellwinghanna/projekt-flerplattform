import {Form, Button} from 'react-bootstrap';
import React, {Component} from 'react';

class F extends Component{
  render() {
    return(
      <Form>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Choose amount of facts</Form.Label>
          <Form.Control as="select">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
          <Button variant="info" size="lg">Get Cat-smart</Button>
      </Form>
    )
  }
}

export default F;
