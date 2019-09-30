import React from 'react';
import { Button } from 'reactstrap';

export default function FormList(props) {
    return (
        <div className="form-list">
            {props.lists.map(list => (
                <div key={list.id} className="clearfix">
                    <span>Name: {list.name} - Age: {list.age}</span>
                    <Button color="info" onClick={() => props.editFormData(list.id)}>
                        Edit
                    </Button>
                    <Button color="danger" onClick={() => props.deleteFormData(list.id)}>
                        Delete
                    </Button>
                </div>
            ))}
        </div>
    )
}