import React from 'react';
import { HashRouter, Route, Switch} from 'react-router-dom';

import Landing from './components/landing';
import Home from './components/home'
import NotFound from './components/notfound';

//not sure if props on landing is needed.


export default () => (
    <HashRouter>
        <Switch>
        <Route path="/" exact render={props =><Landing {...props}/>}/>
        <Route path="/store/:storeId" exact component={Home} />
        <Route path="*" component={NotFound} />
        </Switch>
    </HashRouter>
);
