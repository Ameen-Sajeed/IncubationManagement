import './App.css';
import Signup from './Pages/SignUpPage'
import Login from './Pages/LoginPage'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import HomePage from './Pages/Homepage';
import Application from './Pages/AppPage';


function App() {
  return (
    <div className="App">
    <Router>
    <Routes> 
      <Route path='/login' element={<Login/>}/>  
      <Route path='/Signup' element={<Signup/>}/>      
      <Route path='/' element={<HomePage/>}/>      
      <Route path='/app' element={<Application/>}/>      

    </Routes>
   </Router>
     
      
    </div>
  );
}

export default App;
