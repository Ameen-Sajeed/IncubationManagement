import { useContext, useEffect, useState } from "react";
import logo from '../../../assets/images/logo.jpg'
import user from '../../../assets/images/User.png'
import pg from '../../../assets/images/5607.jpg'
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../../Store/UserContext";
import { ApplicationContext } from "../../../Store/ApplicationContext";
import Axios from 'axios'

 export default function Home () {
  const [open, setOpen] = useState(true);

  const navigate = useNavigate()
  const { setAdminDetails, removeCookie } = useContext(UserContext)
  const { applications, setApplications } = useContext(ApplicationContext)
  const [status, setStatus] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [forms, setForms]=useState([])
  const handleLogout = () => {
    localStorage.removeItem('admin')
    setAdminDetails(null);
    removeCookie("jwt");
    navigate('/admin/login');
  }
  const Menus = [
    { title: "Dashboard", src: "Chart_fill" },
    { title: "Application List", src: "Chat" },
    { title: "Rejected List", src: "User",  },
    { title: "Booking Slots ", src: "Calendar" },
    { title: "Progress Status", src: "Search" },
    { ameen: "Progress Sta", src: "Search" },

  ];

  useEffect(() => {
    Axios.get('http://localhost:5000/admin/application').then((response) => {
        if (response.data) {
            const { data } = response
            console.log(data);
            setApplications(data)
            setForms(data)
        } else {
            setErrorMessage('Something went wrong')
        }
    }).catch((err) => {
        console.log(err);
        setErrorMessage('Something went wrong')
    })
}, [status])

  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-blue-400 h-screen p-5  pt-8 relative duration-300`}
      >
        <img
          src={logo}
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img 
            src={pg}
            className={`cursor-pointer duration-500 h-10 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Incubation Management
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white  text-md items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              <img src={user} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
                <Link to='/'>{Menu.ameen}</Link>
              </span>

            </li>

          ))}
        </ul>
        <div className="p-8">
        <button  onClick={handleLogout} type="button" class="inline-block px-6 py-2.5 bg-green-500 text-dark font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Log Out</button>

        </div>
      </div>
      <div class="container mx-auto px-4 sm:px-8">
    <div class="py-8">
        <div>
            <h2 class="text-2xl font-semibold leading-tight">APPLICATIONS</h2>
        </div>
        <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
                <table class="min-w-full leading-normal">
                    <thead>
                        <tr>
                            <th
                                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100  text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                SL NO:
                            </th>
                            <th
                                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                NAME
                            </th>
                            <th
                                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                EMAIL
                            </th>
                            <th
                                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                COMPANY_NAME
                            </th>
                            <th
                                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                STATUS
                            </th>
                            <th
                                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                ACTION
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    { 
                                forms.map((obj, index) => {

                                
                                    
                      return  ( 
                      
                      <tr>
                        <td className="text-center">{index +1}</td>
                        <td className="text-center">{obj.name}</td>
                        <td className="text-center">{obj.email}</td>
                        <td className="text-center">{obj.company_name}</td>
                        <td className="text-center">pending</td>
                        <td className="text-center p-4 ">
                        <button type="button" class=" m-2  inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-purple-200 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-200 active:shadow-lg transition duration-150 ease-in-out">ApprOVE</button>
                        <button type="button" class="  inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-yellow-400 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out">REJECT</button>
                        </td>              
                        </tr>
                      )
                                })
                            }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}
