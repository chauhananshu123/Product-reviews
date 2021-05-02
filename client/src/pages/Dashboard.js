import React, { useEffect } from 'react';
import Axios from 'axios';

const Dashboard = ({ ...rest}) => {
  
    console.log('*************************************');
    console.log(rest);
    console.log('**************************************');
    let chekApi = async ()=>{
        let { data } = await Axios.get(`/okk`);
        console.log(data);
    }
    useEffect(() => {
        chekApi();
    }, [])

    return (
        <h1> Dashboard </h1>
    )
}

export default Dashboard;