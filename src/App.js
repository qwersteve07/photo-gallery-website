import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { PATH } from 'config';
import Home from 'features/home';
import Login from 'features/login';
import Info from 'features/info';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path={PATH.LOGIN} component={Login} />
                <Route exact path={'/'} component={Home} />
                <Route exact path={PATH.ALBUM} component={Home} />
                <Route exact path={PATH.PHOTO} component={Home} />
                <Route exact path={PATH.INFO} component={Info} />
            </Switch>
        </Router>
    );
};

export default App;
