import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import Layout from '../Layout/Layout';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        localStorage.getItem('isLogin')
            ? <Layout><Component {...props} /></Layout>
            : <Redirect to={{ pathname: '/login' }} />
    )} />
);

export default PrivateRoute;