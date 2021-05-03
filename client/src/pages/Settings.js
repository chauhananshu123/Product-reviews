import React, { useEffect, useContext } from 'react';
import SideCompo from '../Components/SideCompo';
import Header from '../Components/SubComponent/Header';
import SettingsCompo from '../Components/SettingsCompo';
import ActiveSideBarContext from '../Context/ActiveSideBarContext';
const Settings = ()=>{
    let { setActiveSideBar } = useContext(ActiveSideBarContext);
    const activeSideBarr = () => {
          setActiveSideBar(1);
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
                <SettingsCompo />
             </main>
            </div>
        </>
    )
}

export default Settings;