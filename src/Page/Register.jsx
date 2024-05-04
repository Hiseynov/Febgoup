import React, { useState } from 'react';
import { Link } from "react-router-dom";

import Categories from '../components/Categories'


const Register = () => {
  const [eyePassword, seteyePassword] = useState(false);
  // const [type, setType] = useState("password");
  // const handleToggle = () => {
  //   type === 'password' ? setType('text') : setType('password')
  // }

  return (
    <>
      <section id="register">
        <div className="register-wrapper">
          <div className="register-items">
            {/* <div className="register-img"></div> */}
            <Categories></Categories>
            <div className="register-item">
              <h3>Sign Up</h3>
              <form action="">
                <div className="user">
                  <label htmlFor="">Name</label>
                  <input className='letter' type="text" />
                </div>
                <div className="user">
                  <label htmlFor="">Surname</label>
                  <input className='letter' type="text" />
                </div>
                <div className="user">
                  <label htmlFor="">Email</label>
                  <input className='letter' type="email" />
                </div>
                <div className="user">
                  <label htmlFor="">Password</label>
                  <input className='letter' type="password" />
                </div>
                <div className="user confirm">
                  <label htmlFor="">Confirm Password</label>
                  <input className='letter' type={!eyePassword ?"password":"text"}  />
                  {
                   eyePassword ? (
                     <i style={{
                      position: 'absolute',
                      cursor: 'pointer',
                      right: '9px',
                      top: '17px'
                    }} onClick={()=>seteyePassword(!eyePassword)} className="fa fa-eye"></i>
                   ):(
                     <i style={{
                      position: 'absolute',
                      cursor: 'pointer',
                      right: '9px',
                      top: '17px'
                    }} onClick={()=>seteyePassword(!eyePassword)} className="fa fa-eye-slash"></i>
                   )
                 }
                  {/* <i className="fa-solid fa-eye-slash"

                   style={{
                    position: 'absolute',
                    cursor: 'pointer',
                    right: '9px',
                    top: '17px'
                  }}></i> */}
                </div>
                <input type="submit" value="Log In" />
              </form>
              <div className="sign-in-section">
                <span>Don't have an account ?</span>

                <Link to={"/Login"} style={{ color: '#0a0a0a', fontWeight: '700' }}>Sign In</Link>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Register