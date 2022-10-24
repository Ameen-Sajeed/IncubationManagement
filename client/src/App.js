import './App.css';
import Signup from './Pages/SignUpPage'
import Login from './Pages/LoginPage'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import HomePage from './Pages/Homepage';
import Application from './Pages/AppPage';
import Home from './components/Admin/Home/Home';
import AdminLogin from './Pages/AdminLogin';
import AdminHome from './Pages/Admin';
import User from './Store/UserContext';
import { Fragment } from 'react';
import Success from './Pages/Success';
import Applications from './Store/ApplicationContext'
import Approve from './Pages/Approved';
import Reject from './Pages/Rejected';
import SlotBook from './Pages/Slots';
import Create from './Pages/Createslot';
import Progresspage from './Pages/Progress';
function App() {
  return (

  <User>
    <Applications>

 

    <Router>  
    <Routes> 
      <Route path='/login' element={<Login/>}/>  
      <Route path='/Signup' element={<Signup/>}/>      
      <Route path='/' element={<HomePage/>}/>      
      <Route path='/app' element={<Application/>}/>      
      <Route path='/success' element={<Success/>}/>      


    </Routes>
   
     <Routes>
     <Route path='/admin/login' element={<AdminLogin/>}/>  
     <Route  path='/dashboard' element={<AdminHome/>}/>  
     <Route  path='/approved' element={<Approve/>}/>  
     <Route  path='/rejected' element={<Reject/>}/>  
     <Route  path='/slot' element={<SlotBook/>}/>  
     <Route  path='/createslot' element={<Create/>}/>  
     <Route  path='/progress' element={<Progresspage/>}/>  

    </Routes> 
   </Router>
     
</Applications>    
</User>
   
  );
}

export default App;
