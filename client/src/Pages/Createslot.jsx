import React,{useContext,useEffect} from "react";
import { Outlet } from "react-router-dom";
import CreateSlot from "../components/Admin/CreateSlot/createSlot";
import Sidebar2 from "../components/Admin/Sidebar/Sidebar";
function Create (){



return(
    <div>

<div className="flex">
    <Sidebar2/>
    <CreateSlot/>

    </div>
    <Outlet/>

    </div>
 

)
}

export default Create