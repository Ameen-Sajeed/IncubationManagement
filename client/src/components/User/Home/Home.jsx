import React, { useContext } from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import startUp from '../../../assets/images/2010.i039.003_business startup isometric.jpg'
import { UserContext } from '../../../Store/UserContext'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const {setUserDetails, userDetails, removeCookie}=useContext(UserContext)
  const Navigate= useNavigate()
  const logout = () => {
    localStorage.removeItem('user');
    setUserDetails(null)
    removeCookie("jwt");
    Navigate("/login");
};

// const { setAdminDetails, } = useContext(UserContext)

// const logout = () => {
//     localStorage.removeItem('admin')
//     setAdminDetails(null);
   
//     navigate('/admin/login');
//   }


  console.log("klklk")
  console.log(userDetails);

  return (
    <div className='home'>
      <div className='flex justify-end p-3'>
        {userDetails ?
      <button onClick={logout} type="button" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Log Out</button>: 
      <Link to='/login'><button  type="button" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Login</button></Link>
    }
      </div>
     <h1 className='text-3xl text-purple-600 font-bold m-1'> {userDetails ? `Hey,Welcome ${userDetails.name}`:'Welcome Entrepreneurs'}!</h1> 
      <h3 className='text-xl m-5'>Share your Million dollar Ideas!</h3>
      {userDetails ?
      <div>
      <Link to ='/app'> <button type="button" class="inline-block px-6 py-2.5 m-2 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Click Here</button></Link>
      <p>For Application Form !</p>
      </div>:
      <div>
         <p className='p-3'>Login for Application form </p>

    <Link to='/login'><button  type="button" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Login</button></Link>

      </div>
     
}
      <div className=' flex  justify-center'>
      <img className='hey ' src={startUp}></img>

      </div>
    </div>
  )
}

