import React from 'react';

class LoginPage extends React.Component {

    handelLoginClick = () => {
        localStorage.setItem('isLogin', true);
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <h1>Login Page</h1>
                <button className="theme-btn" onClick={this.handelLoginClick}>Login</button>
            </div>
        )
    }
}

export default LoginPage;