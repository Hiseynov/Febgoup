import React from 'react';
import { Link } from "react-router-dom";
import Categories from '../components/Categories'
const Login = () => {
    return (
        <>
            <section id="login">
                <div className="login-wrapper">
                    <div className="login-items">


                       <Categories></Categories>
                        <div className="login-item">
                            <h3>Log In</h3>
                            <form action="">
                                <div className="user">
                                    <label htmlFor="">Email</label>
                                    <input className='letter' type="email" />
                                </div>
                                <div className="user">
                                    <label htmlFor="">Password</label>
                                    <input className='letter' type="password" />
                                </div>
                                <span>Forgot Password?</span>
                                <input type="submit" value="Log In" />
                            </form>
                            <div className="divider">
                                <div className="hr"></div> <span>or</span> <div className="hr"></div>
                            </div>

                            <div className="icons">
                                <span>Continue with</span>
                                <ul>
                                    <li><a class="fa-brands fa-facebook" href=''></a></li>
                                    <li><a class="fa-brands fa-apple" href=""></a></li>
                                    <li><a class="fa-brands fa-google" href=""></a></li>
                                </ul>
                            </div>

                            <div className="sing-up-section">
                               <span>Don't have an account ?</span>
                              
                                <Link  to={"/Register"} style={{color:'#0a0a0a',fontWeight:'700'}}>Sing Up</Link>
                              
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}

export default Login