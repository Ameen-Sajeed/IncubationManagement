import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../../Store/UserContext';
import startUp from '../../assets/images/Work_6.jpg'
import './suc.css'


export default function SuccessPage() {
    const {setUserDetails, userDetails, removeCookie}=useContext(UserContext)
    const Navigate= useNavigate()
    const logout = () => {
      localStorage.removeItem('user');
      setUserDetails(null)
      removeCookie("jwt");
      Navigate("/login");
  };
  return (
    <div >
        <h1 className='text-teal-800 font-bold text-2xl text-center m-10' >Your Application has submitted successfully !</h1>
        <div className='flex justify-center'>
         <Link to="/"><button  type="button" class="inline-block px-6 py-2.5 bg-red-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-200 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out float-right">Back to Home</button></Link>
         <button onClick={logout} type="button" class="inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-200 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out float-right">Log Out</button>

        </div>
        <div className='flex justify-center m-5'>
        <img className='hey' src={startUp}></img>

        </div>

    </div>
  )
}

