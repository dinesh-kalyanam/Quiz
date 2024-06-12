import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import  CardDemo from './Screen2'
import CardContainer from './Screen1'
import "@fontsource/raleway";
import "@fontsource/raleway/400.css";
import "@fontsource/raleway/400-italic.css";
import FormScreen from './Screen2';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Nav';
import Select from './Screen3';
import CopyCode from './Screen4';






ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <Navbar/>
    <BrowserRouter>

  
    <Routes>
    
    <Route path='/'element={<CardContainer />}/>
    <Route path='/Home'element={<CardContainer />}/>
      <Route path='/form' element={<FormScreen/>}/>
    <Route path='/select' element={<Select/>}/>
   
  <Route path='/copy' element={<CopyCode/>}/>

      </Routes>
    
    
     </BrowserRouter>

  </React.StrictMode>,

  // <BrowserRouter>
  // <CardContainer/>
  // <Switch>
  //   <Route path='/EnterNme' element={FormScreen}/>
  // </Switch>
  // </BrowserRouter>
)
