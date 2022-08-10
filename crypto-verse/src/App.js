
import './App.css';
import {BrowserRouter ,Route ,Routes , Link} from "react-router-dom";
import {Layout , Typography , Space} from 'antd';
import  React from 'react';
import Navbar  from './Components/Navbar';
import { Router} from "react-router-dom";



function App() {
  return (
 
    <BrowserRouter>
    <Router>
<div className="app">
 <div className="navbar">
 <Route exact path='/'> 
  <Navbar/>
 </Route>
    
 </div>
 {/* <div className="main">

 </div>


<div className="footer">

</div> */}


      </div>
      </Router>

  </BrowserRouter>
   

  );
}

export default App;
