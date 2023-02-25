import React from 'react'
import './smstyle.css'
const SuccesComponent = () => {

 const  backToLogin = () =>{
  window.location.assign("User.html")
 }

  return (
    <div className="container">

     <link rel="stylesheet" href="./smstyle.css"></link>
    
     <body>
     <div class="card">
      <div class = "forIcon">
        <i class="checkmark">✓</i>
      </div>
        <h1>Success</h1> 
        <p>You have successfully registered</p>
        <button class="btn" type="submit" onClick={() => {backToLogin()}}>Log in</button>
      </div>

      </body>
    </div>
  )
}

export default SuccesComponent