import React,{useContext,useEffect} from "react";
import Rejected from "../components/Admin/Rejected/Rejected";
import { Outlet } from "react-router-dom";
import Sidebar2 from "../components/Admin/Sidebar/Sidebar";
function Reject (){



return(
    <div>

<div className="flex">
    <Sidebar2/>
    <Rejected/>


    </div>
    <Outlet/>

    </div>
 

)
}

export default Reject