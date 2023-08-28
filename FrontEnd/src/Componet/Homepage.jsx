import React from 'react'
import { Link } from 'react-router-dom'
import abc from "./style.module.css"
const Homepage = () => {
  return (
    <div className={abc.back}>
    
      <div>
        <Link className={abc.link3} to='/register'>Register Page</Link>
        <Link className={abc.link4} to='/login'>Login Page</Link>
      </div>
    </div>
  )
}
export default Homepage
