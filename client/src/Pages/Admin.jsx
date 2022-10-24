import React,{Fragment, useContext,useEffect} from "react";
import Home from "../components/Admin/Home/Home";
import { Outlet } from "react-router-dom";
import Sidebar2 from "../components/Admin/Sidebar/Sidebar";
function AdminHome (){



return(
    <div>

    <div className="flex">
        <Sidebar2/>
        <Home/>
    
    
        </div>
        <Outlet/>
    
        </div>
     
    
)
}

export default AdminHome