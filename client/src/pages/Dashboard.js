import React, { useEffect, useContext} from 'react';
import Axios from 'axios';
import SideCompo from '../Components/SideCompo';
import MainContent from '../Components/DashboardCompo';
import Header from '../Components/SubComponent/Header';
import ActiveSideBarContext from '../Context/ActiveSideBarContext';

const Dashboard = ({ ...rest}) => {
    let { setActiveSideBar } = useContext(ActiveSideBarContext);
    const activeSideBarr = () => {
          setActiveSideBar(0);
    }

    useEffect(() => {
        activeSideBarr();
    }, [])

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