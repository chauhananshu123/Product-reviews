import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Settings from '../pages/Settings';
import UrlPage from '../pages/UrlPage';
import ProtectedRoute from './ProtectedRoute';
const notFound = ()=>{
    return (
        <h1> Page Not Found ! </h1>
    )
}
const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <ProtectedRoute exact path="/index/:shop?" component={Dashboard}  />
                <ProtectedRoute exact path="/settings" component={Settings} />


                <Route exact path="/" component={UrlPage} />
                <Route path="*" component={notFound} />
            </Switch>
        </Router>
    )
}

export default AppRouter;