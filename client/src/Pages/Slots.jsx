import React,{Fragment, useContext,useEffect} from "react";
import { Outlet } from "react-router-dom";
import Sidebar2 from "../components/Admin/Sidebar/Sidebar";
// import SlotsBook from "../components/Admin/Slots/Slots";
import BookingSlots from "../components/Admin/Slots/Slots";

function SlotBook (){



return(
    <div>

<div className="flex">
    <Sidebar2/>
    <BookingSlots/>


    </div>
    <Outlet/>

    </div>
 




)
}

export default SlotBook