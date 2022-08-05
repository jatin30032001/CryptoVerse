
import {BrowserRouter} from "react-router-dom"
import './App.css';
import Header from "./Components/Header";

function App() {
  return (

    <BrowserRouter>
    <div className="App">
      <Header/>
      <Route path ='/'component ={HomePage}/>
      <Route path ='/coins/:id'component ={CoinPage}/>


    </div>
    </BrowserRouter>
  );
}

export default App;
