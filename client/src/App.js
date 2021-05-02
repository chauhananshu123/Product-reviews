import React, {useState} from 'react';
import './App.css';
import AppRouter from './Routings/AppRouter';
import SideNavContext from './Context/SIdeNavContext';

const App = ()=> {
  const [sidebarOpen, setSideBarOpen] = useState(false);
  return (
    <>
      <SideNavContext.Provider
        value={{
          sidebarOpen , setSideBarOpen
        }}
      >
         <AppRouter />

      </SideNavContext.Provider>
    </>
  )
}

export default App;
