import React,{useContext,useEffect} from "react";
import Aprroved from "../components/Admin/Approved/Aprroved";
import { Outlet } from "react-router-dom";
import Sidebar2 from "../components/Admin/Sidebar/Sidebar";
function Approve (){



return(
    <div>

<div className="flex">
    <Sidebar2/>
    <Aprroved/>


    </div>
    <Outlet/>

    </div>
 

)
}

export default Approve