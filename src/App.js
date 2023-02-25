import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import React from 'react';
import AddEmployeeComponent from './components/AddEmployeeComponent';
import RegisterPageComponent from './components/RegisterPageComponent';
import SuccesComponent from './components/SuccesComponent';
import LoginComponent from './components/LoginComponent';
import HomePageComponent from './components/HomePageComponent';
import AdminLoginComponent from './components/AdminLoginComponent';
import ProblemStatementsComponent from './components/ProblemStatementsComponent';
import AboutUsComponent from './components/AboutUsComponent';
import HeaderComponent from './components/HeaderComponent';



function App() {
  return (
    <div>

      {//<HeaderComponent />
      }
      <Router>
       
        <div className= "container">
       
          <Routes>
          
             {// <Route exact path="/" render={() => {window.location.href="Home.html"}} />
}
              <Route exact path = "/" element = {<HomePageComponent />}></Route>
              <Route  path = "/Admin.html" element = {<AdminLoginComponent />}></Route>
              <Route  path = "/register.html" element = {<RegisterPageComponent />}></Route>
              <Route  path = "/User.html" element = {<LoginComponent />}></Route>
              <Route  path = "/sm.html" element = {<SuccesComponent />}></Route>
              <Route path = "/employees" element = {<ListEmployeeComponent />}></Route>
              <Route path = "/add-employee" element = {<AddEmployeeComponent />}></Route>
              <Route path = "/edit-employee/:id" element = {<AddEmployeeComponent />}></Route>
              <Route  path = "/ProblemStatement.html" element = {<ProblemStatementsComponent />}></Route>
              <Route  path = "/About.html" element = {<AboutUsComponent />}></Route>
          </Routes>
         
        </div>
        
        </Router>
    </div>
  );
}

export default App;
