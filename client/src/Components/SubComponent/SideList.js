import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import SideNavContext from '../../Context/SIdeNavContext';
import ActiveSideBarContext from '../../Context/ActiveSideBarContext';

const SideList = ({element, indd, actiiv})=>{
    let { name, icon, linkname } = element;
    let { setSideBarOpen } = useContext(SideNavContext);
    let { setActiveSideBar } = useContext(ActiveSideBarContext);

    const sideNavClose = (index)=>{
       // alert(index)
        setActiveSideBar(index)
        setSideBarOpen(false)
    }
    return (
        <li>
            <Link to={linkname} className={actiiv} onClick={() => sideNavClose(indd)} > <span className={icon} ></span> <span> {name} </span> </Link>
        </li>
    )
}

export default SideList;