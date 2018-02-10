import React from 'react';
import { Router, Route, BrowserRouter, Switch} from 'react-router-dom';

import Landing from './components/landing';
import Home from './components/home'
import NotFound from './components/notfound';



export default () => (
    <BrowserRouter>
        <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/store/:storeId" exact component={Home} />
        <Route path="*" component={NotFound} />
        </Switch>
    </BrowserRouter>
);