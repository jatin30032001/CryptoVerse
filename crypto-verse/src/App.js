
import {BrowserRouter ,Route ,Routes} from "react-router-dom"
import './App.css';
import Header from "./Components/Header";
import HomePage from "./Pages/HomePage";
import CoinPage from "./Pages/CoinPage";
import{makeStyles} from "@mate"



function App() {


 


  return (

<BrowserRouter>
<div className ="App">
<Header/>
      <Routes>

        <Route exact path ='/' element = {<HomePage/>}></Route>
        <Route exact path ='/coins/:id' element = {<CoinPage/>}></Route>
         

      </Routes>
      </div>
    </BrowserRouter>
   

  );
}

export default App;
