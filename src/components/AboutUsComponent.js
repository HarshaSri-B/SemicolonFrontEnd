import React from 'react'
import "./aboutUs.css"

const AboutUsComponent = () => {
    return (
        <div className='container'>
            <link rel="stylesheet" href="./aboutUs.css"></link>


            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" />


            <body>
                
                    <div class="content"> 
                        <div class="left-side">

                            <div class="phone details">
                                <i class="fas fa-phone-alt"></i>
                                <div class="topic">Phone</div>
                                <div class="text-one">+91 91825 03323</div>
                                <div class="text-two">+91 6309856149</div>
                            </div>
                            <div class="email details">
                                <i class="fas fa-envelope"></i>
                                <div class="topic">Email</div>
                                <div class="text-one">vippala_reddy@persistent.com</div>
                                <div class="text-two">harsha_bandi@persistent.com</div>
                            </div>
                        </div>
                        <div class="right-side">
                            <div class="topic-text">About us</div>
                            <p>The goal of a hackathon is to create functioning software or hardware by the end of the event.[1] Hackathons tend to have a specific focus, which can include the programming language used, the operating system, an application, an API, or the subject and the demographic group of the programmers. In other cases, there is no restriction on the type of software being created or the design of the new system.</p>

                        </div>
                    
                    
                </div>
        
            </body >
        </div >

    
    )
}

export default AboutUsComponent