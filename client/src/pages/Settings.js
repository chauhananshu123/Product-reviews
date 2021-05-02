import React from 'react';
import SideCompo from '../Components/SideCompo';
import Header from '../Components/SubComponent/Header';
import SettingsCompo from '../Components/SettingsCompo';
const Settings = ()=>{
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