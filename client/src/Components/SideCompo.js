import React, {useContext, useEffect, useState} from 'react';
import SideList from './SubComponent/SideList';
import SideNavContext from '../Context/SIdeNavContext';

const SideCompo = ()=>{
    let { sidebarOpen, setSideBarOpen } = useContext(SideNavContext);
    const [sidebarClass, setSidebarClass] = useState("");
    const ulList = [
        {
            name: "Dashboard",
            icon: "las la-igloo",
            linkname: "/index"     
        },
        {
            name: "Customers",
            icon: "las la-users",   
            linkname: "/settings"     
        },
        {
            name: "Projects",
            icon: "las la-clipboard-list",   
            linkname: "/index"   
        },
        {
            name: "Orders",
            icon: "las la-shopping-bag",  
            linkname: "/index"    
        },
        {
            name: "Account",
            icon: "las la-user-circle", 
            linkname: "/index"     
        },
        {
            name: "Task",
            icon: "las la-clipboard-list",    
            linkname: "/index"  
        }
    ]
    // useEffect(() => {
    //     sidebarOpen ? setSidebarClass("side-block") : "";
    //  }, [sidebarOpen])
    const SideBarClose = ()=> {
        setSideBarOpen(false)
    }
    return (
        <div className={ `sidebar ${ sidebarOpen ? 'side-block' : '' }` } >
        <div className="sidebar-brand">
            <h3> <span className="lab la-accusoft" ></span> Product Reviews <span className="las la-times" onClick={SideBarClose} ></span> </h3>
        </div>
        <div className="sidebar-menu">
            <ul>
                {
                    ulList.map((element, index)=>{
                        return (
                            <SideList key={index} element={element} />
                        )
                    })
                }
            </ul>
        </div>
    </div>
    )
}

export default SideCompo;