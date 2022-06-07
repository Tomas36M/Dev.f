import React, { useState } from 'react'
import axios from 'axios'
import useForm from '../../hooks/UseForm'
import { Form, Button, Modal } from 'react-bootstrap'

const MovieForm = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const sendData = (data) => {
        axios.post("https://movie-api-postrgess-1.herokuapp.com/api/movies/newmovie", data)
            .then((response) => {
                console.log(response.data);
                alert('La pelicula se a agregado a la lista!')
                window.location.reload(false);
            })
            .catch((error) => {
                alert(error.response.data.message)
            })
    }

    const { input, handleInputChange, handleSubmit } = useForm(sendData, {})

    return (
        <div className="login-page">
            <Button className='create-button' variant="primary" onClick={handleShow}>
                POST
            </Button>

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Movie Title</Form.Label>
                        <Form.Control type="text" placeholder="Enter movie" name="title" value={input.title} onChange={handleInputChange} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Descrption</Form.Label>
                        <Form.Control type="text" placeholder="description" name="description" value={input.description} onChange={handleInputChange} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Image URL</Form.Label>
                        <Form.Control type="text" placeholder="img-url" name="image" value={input.image} onChange={handleInputChange} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Published</Form.Label>
                        <Form.Select name="published" onChange={handleInputChange}>
                            <option value={input.published}>1</option>
                            <option value={input.published}>0</option>
                        </Form.Select>
                    </Form.Group>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" type="submit">
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </div>
    )
}

export default MovieForm