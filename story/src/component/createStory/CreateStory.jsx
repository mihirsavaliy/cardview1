import React from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import '../createStory/createstory.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function CreateStory() {
        return (
        <div className='form-wrapper d-flex justify-content-center align-items-center story'>
            <Container className='wrapper'>

                <h1 className='text-center'>
                    Create Story
                </h1>

                <Form>
                    <Form.Group className="mb-3" >
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="Enter subject title" name='title' />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Story</Form.Label>
                        <Form.Control as="textarea" rows={11} placeholder="Write a story" name='designation'/>
                    </Form.Group>
                    <div className='d-flex justify-content-center'>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </div>
                </Form>
            </Container>
        </div>
    )
}

export default CreateStory