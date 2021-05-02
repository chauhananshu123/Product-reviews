import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Settings from '../pages/Settings';
import ProtectedRoute from './ProtectedRoute';
const notFound = ()=>{
    return (
        <h1> Page Not Found ! </h1>
    )
}
const AppRouter = ()=>{
    return (
        <Router>
            <Switch>
                <ProtectedRoute exact path="/" component={Dashboard} />
                <ProtectedRoute exact path="/settings" component={Settings} />
                <ProtectedRoute path="*" component={notFound} />
            </Switch>
        </Router>
    )
}

export default AppRouter;