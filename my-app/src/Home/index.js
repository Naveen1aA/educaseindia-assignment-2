import React from 'react'
import './index.css'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div className='account-container'>
    <div className='main-container'>
     <h1 className="heading">Welcome to PopX</h1>
     <p className='paragraph'>    Lorem ipsum doler sit amet.<br/>consectetur adipiscing elit. </p>
     <Link to="/signup"><button className='button1'>Create Account</button></Link>
     <Link to="/login"><button className='button2'>Already Registered? Login</button></Link>
    </div>
    </div>
  )
}

export default Home