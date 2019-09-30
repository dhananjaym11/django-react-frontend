import React from 'react';
import { Redirect } from 'react-router-dom';

class LogoutPage extends React.Component {

    componentDidMount() {
        localStorage.removeItem('isLogin');
    }

    render() {
        return (
            <div>
                <Redirect to="/login" />
            </div>
        )
    }
}

export default LogoutPage;