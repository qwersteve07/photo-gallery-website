import React from 'react';
import Nav from 'components/nav';
import { Switch, Route } from 'react-router-dom';
import { PATH } from 'config';
import Album from 'features/album';
import Photo from 'features/photo';
import Info from 'features/info';

const Home = () => {
    return (
        <>
            <Nav />
            <Switch>
                <Route path={PATH.ALBUM} component={Album} />
                <Route path={PATH.PHOTO} component={Photo} />
                <Route path={PATH.INFO} component={Info} />
            </Switch>
        </>
    );
};

export default Home;
