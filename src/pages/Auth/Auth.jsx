import React from 'react'
import './Auth.css'
import Logo from '../../img/logo.png'

const Auth = () => {
  return (
    <div className='Auth'>
        <div className="a-left">
            <img src={Logo} alt="" />
            <div className="Webname">
                <h1>Your Head</h1>
                <h6>Carefull Your head!!</h6>
            </div>
        </div>
        <SignUp/>
    </div>
  )
}


function LogIn() {
    return (
      <div className="a-right">
        <form className="infoForm authForm">
          <h3>Log In</h3>
  
          <div>
            <input
              type="text"
              placeholder="Username"
              className="infoInput"
              name="username"
            />
          </div>
  
          <div>
            <input
              type="password"
              className="infoInput"
              placeholder="Password"
              name="password"
            />
          </div>
  
          <div>
              <span style={{ fontSize: "12px" }}>
                Don't have an account Sign up
              </span>
            <button className="button infoButton">Login</button>
          </div>
        </form>
      </div>
    );
  }



function SignUp() {
    return(
        <div className="a-rigth">
            <form  className="infoForm authForm">

            <h3>Sign Up</h3>

            <div>
                <input type="text" placeholder='Full Name' className='infoInput' name='fistName' 
                required
                />
            </div>

            <div>
            <input 
            required
            type="email" 
            placeholder='Email' className='infoInput' 
            name='email' />
            </div>

            <div>
            <input
            required 
            type="text" 
            placeholder='User Name' className='infoInput' name='userName' />
            </div>

            <div>
            <input
            required
            type="password" placeholder='Password' className='infoInput' name='password' />
            <input
            required
            type="password" 
            placeholder='Confirm Password'
            className='infoInput'
            name='confirmpass' />
            </div>
            
            <div>
                <span style={{fontSize: '12px'}} >Have An Account? Login</span>
            </div>

            <button className="button infoButton" type='submit'>Sign Up</button>

            </form>
        </div>
    )
}

export default Auth