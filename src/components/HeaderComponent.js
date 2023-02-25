import React from 'react'
import "./indexstyle.css"

const HeaderComponent = () => {
    return (

        <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
            <link rel="stylesheet" href="./indexstyle.css"></link>

            <div>
                <a href='https://reactApp.net' className='navbar-brand'>
                </a>
                <nav class="navbar">
                    <h2>Fahad's Burger</h2>
                    <ul>
                        <li><a href="Admin.html">Admin</a></li>
                        <li><a href="User.html">Employee</a></li>

                        <li><a href="About.html">About</a></li>
                    </ul>
                </nav>

            </div>

        </nav>
    )
}

export default HeaderComponent