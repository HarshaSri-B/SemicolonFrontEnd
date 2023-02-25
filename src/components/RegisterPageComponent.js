import './registerstyle.css'
import React, { useState, useEffect } from 'react'
import { useNavigate, Link, useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService'

const RegisterPageComponent = () => {

  const [teamName,setTeamName] = useState('')
  const [id, setId] = useState('')
  const [userName, setuserName] = useState('')
  const [emailId, setEmailId] = useState('')
  const [password, setPassword] = useState('')

  // const {id} = useParams();
  const history = useNavigate();

  const saveOrUpdateEmployee = (e) => {
    e.preventDefault();


    const employee = { teamName, id, userName, emailId, password }


    EmployeeService.createEmployee(employee).then((Response) => {
      console.log(Response.data)
           history.push('/employees')
    }).catch(error => {
      console.log(error)
    })
   
    if(teamName != "" && id != "" && userName != "" && emailId != "" && password != ""){
    window.location.assign("sm.html")
    }


    
  }

  useEffect(() => {
    EmployeeService.getEmployeeById(id).then((Response) => {
      setTeamName(Response.data.teamName)
      setuserName(Response.data.userName)
      setEmailId(Response.data.emailId)
      setPassword(Response.data.password)
    }).catch(error => {
      console.log(error)
    })
  }, [])





  return (
    <div className='container'>
      <link rel="stylesheet" href="./registerstyle.css"></link>
      <title>Register</title>

      <body>
        <div id="bg"></div>
        
        <form >
        <h1>Register Here!</h1>
          <div class="main-head">
          
          </div>
          <div class="form-field">
            <input type="text" placeholder="TeamName "
              name="TeamName"
              className='form-control'
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}

              required />
          </div>

          <div class="form-field">
            <input type="text" placeholder="EmpId "
              name="EmpId"
              className='form-control'
              value={id}
              onChange={(e) => setId(e.target.value)}
              required />
          </div>

          <div class="form-field">
            <input type="email" placeholder="Email "
              name="email"
              className='form-control'
              value={emailId}
              onChange={(e) => setEmailId(e.target.value)} required />
          </div>

          <div class="form-field">
            <input type="text" placeholder="UserName"
              name="User Name"
              className='form-control'
              value={userName}
              onChange={(e) => setuserName(e.target.value)}
              required />
          </div>

          <div class="form-field">
            <input type="password" placeholder="Password"
              name="pwd"
              className='form-control'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required />
          </div>

          <button className='btn btn-success' onClick={(e) => saveOrUpdateEmployee(e)} >Submit</button>
        </form>

      </body>
    </div>
  )
}

export default RegisterPageComponent