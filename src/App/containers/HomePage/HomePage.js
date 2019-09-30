import React from 'react';
import { Container } from 'reactstrap';

import Hooks from '../../components/Home/Hook';

export default class HomePage extends React.Component {

    render() {
        return (
            <Container>
                <h1>Home Page</h1>
                <Hooks />
            </Container>
        )
    }
}