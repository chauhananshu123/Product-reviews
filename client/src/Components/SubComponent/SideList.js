import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import SideNavContext from '../../Context/SIdeNavContext';
const SideList = ({element})=>{
    let { name, icon, linkname } = element;
    let { setSideBarOpen } = useContext(SideNavContext);
    const sideNavClose = ()=>{
        setSideBarOpen(false)
    }
    return (
        <li>
            <Link to={linkname} className="" onClick={sideNavClose} > <span className={icon} ></span> <span> {name} </span> </Link>
        </li>
    )
}

export default SideList;