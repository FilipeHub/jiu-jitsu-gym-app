import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import New from '../pages/New';
import Login from '../pages/Login';

export default function Routes(){
    return (
        <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/register"  component={New} />
            <Route path="/dashboard"  component={Dashboard} />
        </Switch>

    );
}
