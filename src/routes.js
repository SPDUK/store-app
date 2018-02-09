import React from 'react';
import { Router, Route, BrowserRouter, Switch } from 'react-router-dom';

import App from './App';
import Landing from './components/landing';
import Order from './components/order';
import Home from './components/home'


export default () => (
    <BrowserRouter>
        <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/store/storeId" exact component={Home} />"
        </Switch>
    </BrowserRouter>
);