import React, { Component } from 'react';
import { Container, Button } from 'reactstrap';

import './FormPage.css';
import axios from 'axios';
import { dev_environment } from '../../config/environment';
import FormList from '../../components/Forms/FormList';
import AddEditForm from '../../components/Forms/AddEditForm';

class FormPage extends Component {
    state = {
        lists: [],
        showModal: false,
        editListData: { 'id': 0, 'name': '', 'age': 0 }
    }

    componentDidMount() {
        this.getFormData();
    }

    getFormData = () => {
        axios
            .get(dev_environment.base_url)
            .then(res => this.setState({ lists: res.data }))
            .catch(err => console.log(err));
    }

    postFormData = (data) => {
        axios
            .post(dev_environment.base_url, data)
            .then(res => this.getFormData());
    }

    putFormData = (data) => {
        const formId = data.id;
        delete data.id;
        axios
            .put(dev_environment.base_url + formId + '/', data)
            .then(res => this.getFormData());
    }

    addFormData = () => {
        const editListData = {
            name: '',
            age: 0
        }
        this.setState({
            editListData,
            showModal: true
        })
    }

    editFormData = (listId) => {
        const editList = this.state.lists.find((list) => list.id === listId);
        const editListData = {
            id: editList.id,
            name: editList.name,
            age: editList.age
        }
        this.setState({
            editListData,
            showModal: true
        })
    }

    deleteFormData = (id) => {
        axios
            .delete(dev_environment.base_url + id)
            .then(res => this.getFormData());
    }

    toggleModal = () => {
        this.setState(prevState => ({
            showModal: !prevState.showModal
        }))
    }

    render() {
        return (
            <Container>
                <h1>Form Page
                <Button color="success" className="float-right" onClick={this.addFormData}>Add</Button>
                </h1>
                <FormList
                    lists={this.state.lists}
                    editFormData={this.editFormData}
                    deleteFormData={this.deleteFormData} />
                <AddEditForm
                    data={this.state.editListData}
                    showModal={this.state.showModal}
                    toggleModal={this.toggleModal}
                    postFormData={this.postFormData}
                    putFormData={this.putFormData} />
            </Container>
        )
    }
}

export default FormPage;