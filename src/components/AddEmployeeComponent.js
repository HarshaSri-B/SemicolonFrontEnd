import React , {useState, useEffect} from 'react'
import EmployeeService from '../services/EmployeeService'
import {useNavigate, Link, useParams} from 'react-router-dom';

const AddEmployeeComponent = () => {

    const [id, setId] = useState('')
    const [userName, setuserName] = useState('')
    const [emailId, setEmailId] = useState('')
    const [password, setPassword] = useState('')

   // const {id} = useParams();
    const  history = useNavigate();

    const saveOrUpdateEmployee = (e) =>{
        e.preventDefault();

       
        const employee = {id, userName, emailId, password}

        
        if(id){

            EmployeeService.updateEmployee(id, employee).then((response) =>{
                history.push('/employees')
            }).catch(error => {
                console.log(error)
            })

        }else{ 

            EmployeeService.createEmployee(employee).then((Response) =>{
                console.log(Response.data)
                history.push('/employees')
            }).catch(error => {
                console.log(error)
            })
        }
         
    }

    useEffect(() => {
        EmployeeService.getEmployeeById(id).then((Response) =>{
            setuserName(Response.data.userName)
            setEmailId(Response.data.emailId) 
            setPassword(Response.data.password)     
        }).catch(error => {
            console.log(error)
        })
    }, [])

    const title = () =>{
        if(id){
            return <h2 className='text-center'>Update Employee</h2>
        }else{
            return <h2 className='text-center'>Add Employee</h2>
        }
    }
  return (
    <div>
        <br /> <br />
        <div className='container'>
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    {
                        title()
                    }
                    <div className='card-body'>
                        <form>
                        <div className='form-group mb-2'>
                                <label className = "form-label"> Id</label>
                                <input
                                    type = "text"
                                    placeholder='Enter User name'
                                    name = "Id"
                                    className='form-control'
                                    value = {id}
                                    onChange = {(e) => setId(e.target.value)}></input>
                            </div>
                            <div className='form-group mb-2'>
                                <label className = "form-label"> User Name</label>
                                <input
                                    type = "text"
                                    placeholder='Enter User name'
                                    name = "userName"
                                    className='form-control'
                                    value = {userName}
                                    onChange = {(e) => setuserName(e.target.value)}></input>
                            </div>
                            
                            <div className='form-group mb-2'>
                                <label className = "form-label"> Email Id</label>
                                <input
                                    type = "text"
                                    placeholder='Enter Email Id'
                                    name = "Email Id"
                                    className='form-control'
                                    value = {emailId}
                                    onChange = {(e) => setEmailId(e.target.value)}></input>
                            </div>

                            <div className='form-group mb-2'>
                                <label className = "form-label"> Password</label>
                                <input
                                    type = "text"
                                    placeholder='Enter Email Id'
                                    name = "password"
                                    className='form-control'
                                    value = {password}
                                    onChange = {(e) => setPassword(e.target.value)}></input>
                            </div>

                            <button className='btn btn-success' onClick = {(e) => saveOrUpdateEmployee(e)} >Submit</button>
                            <Link to = "/employees" className= "btn btn-danger">Cancel</Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddEmployeeComponent