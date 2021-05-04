import React, {useState} from 'react';
import './App.css';
import AppRouter from './Routings/AppRouter';
import SideNavContext from './Context/SIdeNavContext';
import isVerifiedContext from './Context/IsVerifiedContext';
import ActiveSideBarContext from './Context/ActiveSideBarContext';

const App = ()=> {
  const [sidebarOpen, setSideBarOpen] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [activeSideBar, setActiveSideBar] = useState(null);
  
  return (
    <>
      <isVerifiedContext.Provider
        value={{isVerified, setIsVerified}}
      >
      <SideNavContext.Provider
        value={{
          sidebarOpen , setSideBarOpen
        }}
      >
      <ActiveSideBarContext.Provider
        value={{activeSideBar, setActiveSideBar}}
      >

         <AppRouter />

      </ActiveSideBarContext.Provider>

      </SideNavContext.Provider>

      </isVerifiedContext.Provider>

    </>
  )
}

export default App;
