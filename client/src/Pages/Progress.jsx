import React,{useContext,useEffect} from "react";
import { Outlet } from "react-router-dom";
import Sidebar2 from "../components/Admin/Sidebar/Sidebar";
import Progress from "../components/Admin/Progress/Progress";
function Progresspage (){



return(
    <div>

<div className="flex">
    <Sidebar2/>
    <Progress/>


    </div>
    <Outlet/>

    </div>
 

)
}

export default Progresspage