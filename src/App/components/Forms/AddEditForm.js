import React, { useState, useEffect } from 'react';
import { Row, Col, Button, Form, Label, Input, FormGroup, Modal } from 'reactstrap';

export default function AddEditForm(props) {
    const [name, updateName] = useState(props.data.name);
    const [age, updateAge] = useState(props.data.age);

    useEffect(() => {
        updateName(props.data.name);
        updateAge(props.data.age);
    }, [props.data]);

    const onSaveClick = () => {
        const data = {
            name, age
        }
        if (props.data.id) {
            data.id = props.data.id;
            props.putFormData(data);
        } else {
            props.postFormData(data);
        }
        updateName('');
        updateAge('');
        props.toggleModal();
    }

    return (
        <Modal isOpen={props.showModal} toggle={props.toggleModal}>
            <Form>
                <Row>
                    <Col xs="6">
                        <FormGroup>
                            <Label for="name">name</Label>
                            <Input
                                id="name"
                                margin="normal"
                                value={name}
                                onChange={(e) => updateName(e.target.value)}
                            />
                        </FormGroup>
                    </Col>
                    <Col xs="6">
                        <FormGroup>
                            <Label for="age">age</Label>
                            <Input
                                id="age"
                                margin="normal"
                                value={age}
                                onChange={(e) => updateAge(e.target.value)}
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