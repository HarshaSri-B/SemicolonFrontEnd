import React , {useState, useEffect} from 'react'
import {useNavigate, Link, useParams} from 'react-router-dom';
import EmployeeService from '../services/EmployeeService'
import './loginstyle.css'

const AdminLoginComponent = () => {
  
  const [emailId, setEmailId] = useState('')
  const [password, setPassword] = useState('')

  const  history = useNavigate();

  const checkEmployee =  (e) =>{
      e.preventDefault();

      EmployeeService.verifyEmployee(emailId,password).then((Response) => {
        console.log(Response.data)
        
        
        if(Response.data == "login sucess"){

          window.location.assign("ProblemStatement.html")
          history.push('/employees')
        }
        else{
          alert("User does not exist")
          return;
        }
      }).catch(error => {
        console.log(error)
    })
  }




  return (
    <div className='container'>

        <title>User Login Page</title>
        <link rel="stylesheet" href="./loginstyle.css"></link>

        <div id="bg"></div>

        
        <form>
        <h1 >Admin Login</h1>
        <div class="form-field">
            <input type="email" placeholder="Email" 
           // className='form-control'
            value = {emailId}
            onChange = {(e) => setEmailId(e.target.value)}
            required/>
        </div>
        
        <div class="form-field">
            <input type="password" placeholder="Password" 
            //className='form-control'
            value = {password}
            onChange = {(e) => setPassword(e.target.value)}
            required/>                         </div>
        
        <div>
        <button className='btn btn-success' type = "submit" onClick = {(e) => checkEmployee(e) }>Log in</button>
    
        </div>
         
        </form>
    </div>
  )
}

export default AdminLoginComponent