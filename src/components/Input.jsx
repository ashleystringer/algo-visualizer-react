import React from 'react'
import { InputGroup, Form } from 'react-bootstrap';


export default function Input({ type }) {
    /*
    ISSUE - How do I update type (?) state?
    Input fields tend to use refs
    */
    return (
        <InputGroup>
            <InputGroup.Text></InputGroup.Text>
            <Form.Control 
                placeholder="Name"
            />
        </InputGroup>
    )
}
