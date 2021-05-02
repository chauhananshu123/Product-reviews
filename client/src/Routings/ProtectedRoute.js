import React,{ useState } from 'react';
import NotAuthenticated from '../pages/NotAuthenticated';

const ProtectedRoute = ({component})=>{
    const [isLogedIn, setIsLogedIn]  = useState(true);
    let Component = component;


    return isLogedIn ? <Component /> : <NotAuthenticated />
}

export default ProtectedRoute;