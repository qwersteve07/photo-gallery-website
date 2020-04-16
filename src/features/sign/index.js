import React from 'react';
import Login from 'features/sign/login';
import Forget from 'features/sign/forget';
import { Switch, Route } from 'react-router-dom';
import { PATH } from 'config';

const Sign = () => {
    return (
        <Switch>
            <Route exact path={PATH.LOGIN} component={Login} />
            <Route path={PATH.FORGET} component={Forget} />
        </Switch>
    );
};

export default Sign;
