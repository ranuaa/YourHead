import React from 'react'
import './Auth.css'
import Logo from '../../img/logo.png'
import { useState } from 'react'
import { useDispatch, useSelector }  from 'react-redux'
import { logIn, signUp } from '../../actions/AuthAction'
import PacmanLoader from "react-spinners/PacmanLoader";

const Auth = () => {

  const dispatch = useDispatch();
  const [isSignUp, setIssignUp] = useState(true)
  const loading = useSelector((state) => state.authReducer.loading)
  console.log(loading)
  const [data, setData] = useState({
    firstName: '',
    email: '',
    username: '',
    password: '',
    confirmpass: '',

  })

  const [confirmPass, setConfirmPass] = useState(false)


  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignUp) {
      data.password === data.confirmpass ? dispatch(signUp(data)) : setConfirmPass(true)

  }else {

    dispatch(logIn(data))
  }
}


  const resetForm = (e) => {
    setConfirmPass(false)
    setData({
      firstname: '',
      email: '',
      username: '',
      password: '',
      confirmpass: '',
    })
  }


  return (
    <div className='Auth'>
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="Webname">
          <h1>Your Head</h1>
          <h3>Carefull Your head!!</h3>
        </div>
      </div>

      {/* right */}

      <div className="a-rigth">
        <form className="infoForm authForm" onSubmit={handleSubmit} >

          <h3>{isSignUp ? "Sign Up" : "Log In"}</h3>

          <div>
            {isSignUp && (

              <input type="text"
                placeholder='Full Name'
                className='infoInput'
                name='firstname'
                onChange={handleChange}
                value={data.firstname}
              />
            )}
          </div>

          <div>
            {isSignUp && (

              <input
                type="email"
                placeholder='Email' className='infoInput'
                name='email'
                onChange={handleChange}
                value={data.email}
              />
            )}
          </div>

          <div>
            <input
              type="text"
              placeholder='User Name'
              className='infoInput'
              name='username'
              onChange={handleChange}
              value={data.username}
            />
          </div>

          <div>
            <input
              type="password"
              placeholder='Password'
              className='infoInput'
              name='password'
              onChange={handleChange}
              value={data.password}
            />
            {isSignUp && (

              <input
                type="password"
                placeholder='Confirm Password'
                className='infoInput'
                name='confirmpass'
                onChange={handleChange}
                value={data.confirmpass}
              />
            )}
          </div>
          {confirmPass ? <span>* Confirm Password is not same</span> : ""}
          <div>
            <span style={{ fontSize: '12px', cursor: 'pointer' }} onClick={() => {setIssignUp((con) => !con); resetForm()}}>{isSignUp ? "Have An Account? Login" : "Don't Have an account? Sign Up"}</span>
          </div>

          <button className="button infoButton" disabled={loading} type='submit'>{ loading ? "Loading ..." : isSignUp ? "Sign Up" : "Login"}</button>

        </form>
      </div>

    </div>
  )
}

export default Auth