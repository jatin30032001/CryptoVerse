
import './App.css';
import {BrowserRouter as Router ,Route ,Routes , Link} from "react-router-dom";
import {Layout , Typography , Space} from 'antd';
import  React from 'react';
import Navbar   from './Components/Navbar';
import  HomePage   from './Components/HomePage';
import    Cryptocurrencies   from './Components/Cryptocurrencies';
import  News  from './Components/News';
import  Exchanges   from './Components/Exchanges';
import  CryptoDetails   from './Components/CryptoDetails';









function App() {
  return (
    
 <Router>
    <div className='App'>
    
    
      <div className="navbar">
      <Navbar/>
      </div>
      
       <div className="main">
<Layout>
  
  <div className="routes">

  <Routes>

  < Route exact path='/' element ={<HomePage/>}/>
  < Route exact path='/cryptocurrencies' element ={<Cryptocurrencies/>}/>
  < Route exact path='/crypto/:coinId' element ={<CryptoDetails/>}/>
  < Route exact path='/exchanges' element ={<Exchanges/>}/>
  < Route exact path='/news' element ={<News/>}/>
  

  </Routes>
          
  </div>
  
</Layout>
      

 <div className="footer">
   <Typography.Title level={5} style={{color : 'white' , textAlign:'center'}}>
            Cryptoverse <br/>
            All Rights are Reserved
   </Typography.Title>

   <Space>
  <Link to = '/'> Home</Link> 
  <Link to ='/exchanges'>Exchanges</Link>
  <Link to ='/news'>News</Link>

    </Space>


 </div>
   
 </div>

 
    </div>


     </Router> 
 
 
 

  );
}

export default App;
