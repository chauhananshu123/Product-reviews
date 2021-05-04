import React, {useContext} from 'react';
import SideList from './SubComponent/SideList';
import SideNavContext from '../Context/SIdeNavContext';
import ActiveSideBarContext from '../Context/ActiveSideBarContext';

const SideCompo = ()=>{
    let { sidebarOpen, setSideBarOpen } = useContext(SideNavContext);
    let { activeSideBar } = useContext(ActiveSideBarContext);

    const ulList = [
        {
            name: "Dashboard",
            icon: "las la-igloo",
            linkname: "/index"     
        },
        {
            name: "Settings",
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

    const SideBarClose = ()=> {
        setSideBarOpen(false)
    }
    return (
        <div className={ `sidebar ${ sidebarOpen ? 'side-block' : '' }` } >
        <div className="sidebar-brand">
            <h3> <span className="lab la-accusoft main-logo-side" ></span> Product Reviews <span id="cross_btn" className="las la-times" onClick={SideBarClose} ></span> </h3>
        </div>
        <div className="sidebar-menu">
            <ul>
                {
                    ulList.map((element, index)=>{
                      let actiiv = index === activeSideBar ? "active" : "";
                      console.log(actiiv);
                        return (
                            <SideList key={index} element={element} indd={index} actiiv={actiiv} />
                        )
                    })
                }
            </ul>
        </div>
    </div>
    )
}

export default SideCompo;