import React, {useContext} from 'react';
import SideNavContext from '../../Context/SIdeNavContext';

const Header = ()=>{ 
    const {sidebarOpen, setSideBarOpen} = useContext(SideNavContext);
    const SideBarHandle = ()=>{
        console.log(sidebarOpen);
        setSideBarOpen(!sidebarOpen);
    }

    return (
        
        <header>
            <h1 className="bar-handler" >
                <label onClick={SideBarHandle} >
                    <span className="las la-bars" >  </span>
                </label>
            
            </h1>
            <div className="user-wrapper" >
                <img src="https://artistdata.s3.amazonaws.com/Images/2d63b5c7-8ba9-485c-81a3-92ba6ed3bcfc.jpg" height="40px" width="40px" alt="" />
                <div>
                    <h4> John Doe </h4>
                    <small> Super Admin </small>
                </div>
            </div> 
        </header>
     
    )
}

export default Header;