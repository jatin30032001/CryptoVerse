import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import { createRoot } from 'react-dom/client';
import store from './App/store';                                                                                                                                                                          
import 'antd/dist/antd.css';


const root = createRoot(document.getElementById('root'));
root.render(

 <React.StrictMode>
  <Provider store ={store}>

<App />
</Provider>

 </React.StrictMode> 
 


  
  
);



