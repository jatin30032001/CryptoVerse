
import './App.css';
import {BrowserRouter as Router ,Route ,Routes , Link} from "react-router-dom";
import {Layout , Typography , Space} from 'antd';
import  React from 'react';
import Navbar  from './Components/Navbar';




function App() {
  return (
 <Router>
    <div className='App'>

      <div className="navbar">
      <Navbar/>
      </div>
       <div className="main">


       </div>
 <div className="footer">

 </div>
   
 

     
    </div>


     </Router> 
 
 
 

  );
}

export default App;
