import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  let [email, changeEmail] = useState('')
  let [password, changepassword] = useState('')
  let emailChange = (e) => { changeEmail(e.target.value) }
  let passwordChange = (e) => { changepassword(e.target.value) }
  let navigate=useNavigate()
let register=(e)=>{
  e.preventDefault()
  let data={email,password}
  axios.post('http://localhost:8000/login', data)

  .then((res)=>{
     if (res.data.status===200) {
      alert(res.data.message)
      navigate('/home')
     } else {
      alert(res.data.message)
     }
  })
}

  return ( 
    <div>
      <form action="" onSubmit={register}>
        <h2> <label htmlFor="">Email <input value={email} type="email" name="" onChange={emailChange} id="" /></label><br /></h2>
        <h2><label htmlFor="">Password <input value={password} type="text" name="" id="" onChange={passwordChange} /></label><br /></h2>
        <input type="submit" name="" id="" />
      </form>
      <Link to="/register">Click Here to Register</Link>
    </div>
  )
}

export default Login
