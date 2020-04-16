import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { PATH } from 'config';
import Home from 'features/home';
import Sign from 'features/sign';
import Info from 'features/info';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path={PATH.LOGIN} component={Sign} />
                <Route exact path={'/'} component={Home} />
                <Route exact path={PATH.ALBUM} component={Home} />
                <Route exact path={PATH.PHOTO} component={Home} />
                <Route exact path={PATH.INFO} component={Info} />
            </Switch>
        </Router>
    );
};

export default App;
