import React from 'react'
import '.././styles/navbar.css'

const Navigation = () => {
  return (
    <>
  <div className="navbar-container">
    <div className="nav-bar justify-content-center">
        <div className="nav-links">
            <a href="/" className="nav">Home</a>
            <a href="/contact" className="nav">Contact Us</a>
        </div>
    <a href="/">
        <h2 className='text-6xl text-primary-hackathon-color-400 text-center'>CROP CONNECT</h2>
        </a>

        <div className="nav-links">
            <a href="/pricing" className="nav">Pricing</a>
            <div className=" rounded bg-primary-hackathon-color-400 justify-center border-2 border-primary-hackathon-color-700 hover:bg-primary-hackathon-color-500 ">

         
            <a href="/login" className="text-center mb-2 p-10">Login</a>
            </div>
        </div>
    </div>
</div>
    </>
  )
}

export default Navigation