import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

import './indexstyle.css';
const HomePageComponent = () => {


  const [employees, setEmployees] = useState([])
  //1) for getting all the details stored in the database 
  useEffect(() => {

    getAllEmployees();
  }, [])

  const getAllEmployees = () => {
    EmployeeService.getAllEmployees().then((response) => {
      setEmployees(response.data)
      console.log(response.data);
    }).catch(error => {
      console.log(error);
    })
  }

  const deleteEmployee = (employeeId) => {
    EmployeeService.deleteEmployee(employeeId).then((response) => {
      getAllEmployees();

    }).catch(error => {
      console.log(error);
    })

  }

  return (
    
    <div className="container">
      <div id="bg"></div>

      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet"></link>
      <link rel="stylesheet" href="indexstyle.css"></link>

      <title>Landing Page</title>

      <section class="hero-section">
        <nav class="navbar">
          <h2>Fahad's Burger</h2>
          <ul>
            <li><a href="Admin.html">Admin</a></li>
            <li><a href="User.html">Employee</a></li>

            <li><a href="About.html">About</a></li>

            
          </ul>
        </nav>
        <div class="hero-text">
          <h2>Semicolons Hackathon</h2>
          <p>CODE IT</p>

        </div>
      </section>



    </div>


  )
}

export default HomePageComponent