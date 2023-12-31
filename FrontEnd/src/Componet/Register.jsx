import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import abc from "./style.module.css"
const Register = () => {
    let [name, changeName] = useState('')
    let [email, changeEmail] = useState('')
    let [phoneNo, changePhoneNo] = useState('')
    let [password, changepassword] = useState('')
    let nameChange = (e) => { changeName(e.target.value) }
    let emailChange = (e) => { changeEmail(e.target.value) }
    let phoneNoChange = (e) => { changePhoneNo(e.target.value) }
    let passwordChange = (e) => { changepassword(e.target.value) }

    let register = (e) => {
        e.preventDefault()
        let data = { name, email, phoneNo, password }
        axios.post('http://localhost:8000/register', data)
            .then((x) => {
                alert(x.data.message)
            })
            .catch(() => {
                alert("Invalid credentials")
            })
        console.log(data);
    }
    return (
        <div className={abc.div1}>
            <form action="" onSubmit={register} >
                <table>

                    <tr>

                        <h2> <label htmlFor="">Name <input value={name} onChange={nameChange} type="text" name="" id="" /></label><br /></h2>

                    </tr>
                    <tr>
                        <h2> <label htmlFor="">Email <input value={email} type="email" name="" onChange={emailChange} id="" /></label><br /></h2>

                    </tr>
                    <tr>
                        <h2> <label htmlFor="">PhoneNo <input value={phoneNo} type="tel" name="" id="" onChange={phoneNoChange} /></label><br /></h2>

                    </tr>
                    <tr>
                        <h2><label htmlFor="">Password <input value={password} type="text" name="" id="" onChange={passwordChange} /></label><br /></h2>

                    </tr>
                </table>
                <button className={abc.btn1}>Submit</button>
            </form>
            <Link className={abc.link1} to='/login'>Click here to home page</Link>
        </div>
    )
}

export default Register
