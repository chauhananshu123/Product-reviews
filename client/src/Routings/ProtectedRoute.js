import React,{ useEffect, useContext } from 'react';
import NotAuthenticated from '../pages/NotAuthenticated';
//import Axios from 'axios';
import jwt from 'jsonwebtoken';
import isVerifiedContext from '../Context/IsVerifiedContext';

const ProtectedRoute = ({ component , ...rest}) => {
    let {isVerified, setIsVerified} = useContext(isVerifiedContext);
    var Component = component;
    useEffect(() => {
        const { shop } = rest.computedMatch.params;
        const shopLogger = async () => {
        const authChecker = async (shopname)=>{
        try {
            let data = jwt.verify(shopname, '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' );
            console.log(data);
            setIsVerified(true);
            localStorage.setItem("shopname", shopname)
        } catch (error) {
            setIsVerified(false);
        }
    }
      if(shop){
        authChecker(shop);
        console.log("if");
      }else{
        console.log("else");
        let shopname = localStorage.getItem("shopname");
        if(!shopname){
          setIsVerified(false);
        }else{
            authChecker(shopname);   
        }
      }
 
    }
  

      shopLogger()
    }, []) 
    
   return isVerified ?  <Component  {...rest} /> : <NotAuthenticated />

 
}
 
export default ProtectedRoute;