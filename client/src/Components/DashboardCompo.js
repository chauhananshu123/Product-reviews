import React, {useState} from 'react';


const MainContent = ()=>{
    const [rowData] = useState([
        {
            class_name:"card-bg-color-1",
            head_value:"Total Reviews",
            count_value:"540"
        },
        {
            class_name:"card-bg-color-2",
            head_value:"Todays Reviews",
            count_value:"10"
        }
    ])
   
    return (
      
                <div className="row" >
                    {
                        rowData.map((element, index)=>{
                            return (
                                <div className="col-md-6" key={index} >
                                <div className="card " >
                                    <div className={`d-flex text-white justify-content-around dashboard-icons card-header ${element.class_name}`} >
                                        <h3> { element.head_value } </h3> <span className="las la-gem" ></span>
                                    </div>
                                    <div className="card_down" >
                                        <h3> { element.count_value } </h3>
                                    </div>
                                </div>
                            </div>  
                            )
                        })
                    }

                    <div className="col-md-12 mt-3">
                        <div className="card" >
                            <div className="card-header">
                                 <h2> How Its Work ? { process.env.REACT_APP_ONAKR } </h2>
                                
                            </div>
                            <div className="card-body" >
                                <ul>
                                    <li> Lorem ipsum dolor, sit amet consectetur adipisicing elit. </li>
                                    <li> Lorem ipsum dolor, sit amet consectetur adipisicing elit. </li>
                                    <li> Lorem ipsum dolor, sit amet consectetur adipisicing elit. </li>
                                    <li> Lorem ipsum dolor, sit amet consectetur adipisicing elit. </li>
                                    <li> Lorem ipsum dolor, sit amet consectetur adipisicing elit. </li>
                                    <li> Lorem ipsum dolor, sit amet consectetur adipisicing elit. </li>
                                    <li> Lorem ipsum dolor, sit amet consectetur adipisicing elit. </li>
                                    <li> Lorem ipsum dolor, sit amet consectetur adipisicing elit. </li>

                                </ul>
                            </div> 
                        </div>

                    </div>
             
            </div>


   
    )
}

export default MainContent;