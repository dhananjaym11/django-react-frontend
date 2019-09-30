import React, { useState, useEffect } from 'react';
import { Row, Col, Button, Form, Label, Input, FormGroup, Modal } from 'reactstrap';

export default function AddEditForm(props) {
    const [title, updateName] = useState(props.data.title);
    const [description, updateDescription] = useState(props.data.description);

    useEffect(() => {
        updateName(props.data.title);
        updateDescription(props.data.description);
    }, [props.data]);

    const onSaveClick = () => {
        const data = {
            title, description
        }
        if (props.data.id) {
            data.id = props.data.id;
            props.putFormData(data);
        } else {
            props.postFormData(data);
        }
        updateName('');
        updateDescription('');
        props.toggleModal();
    }

    return (
        <Modal isOpen={props.showModal} toggle={props.toggleModal}>
            <Form>
                <Row>
                    <Col xs="6">
                        <FormGroup>
                            <Label for="title">title</Label>
                            <Input
                                id="title"
                                margin="normal"
                                value={title}
                                onChange={(e) => updateName(e.target.value)}
                            />
                        </FormGroup>
                    </Col>
                    <Col xs="6">
                        <FormGroup>
                            <Label for="description">description</Label>
                            <Input
                                id="description"
                                margin="normal"
                                value={description}
                                onChange={(e) => updateDescription(e.target.value)}
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col xs="6">
                        {/* <Button>Reset</Button> */}
                        <Button onClick={onSaveClick}>Submit</Button>
                    </Col>
                </Row>
            </Form>

        </Modal>
    )
}