import React, { useEffect, useContext } from 'react';
import SideCompo from '../Components/SideCompo';
import Header from '../Components/SubComponent/Header';
import SettingsCompo from '../Components/SettingsCompo';
import ActiveSideBarContext from '../Context/ActiveSideBarContext';
import isVerifiedContext from '../Context/IsVerifiedContext';


const Settings = ()=>{
    let { setActiveSideBar } = useContext(ActiveSideBarContext);
    let { isVerified } = useContext(isVerifiedContext);
    const activeSideBarr = () => {
          setActiveSideBar(1);
    }
    let fetchAllproducts = async()=>{
        console.log(isVerified);
        let { user, shopName } = isVerified;
    
    }
    
    useEffect(() => {
        activeSideBarr();
        fetchAllproducts()
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