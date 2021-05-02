import React, { useEffect } from 'react';
import Axios from 'axios';
import SideCompo from '../Components/SideCompo';
import MainContent from '../Components/DashboardCompo';
import Header from '../Components/SubComponent/Header';

const Dashboard = ({ ...rest}) => {

    return (
        <>
            <SideCompo />
            <div className="main-content">
               <Header />
             <main>
                <MainContent />
             </main>
            </div>
        </>
    )
}

export default Dashboard;