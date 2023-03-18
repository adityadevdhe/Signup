import React, { useState } from 'react';
import './SignUp.css';
import logo from '../../img/Logo (1).png';
import icon from '../../img/icon.png';

import iconp from '../../img/iconp.png'
import Right from '../Right/Right';
import Auth from '../Auth/Auth';
const SignUp = () => {
 
    
  return (
    
    <div className='SignUp'>
        
        {/*Left SIde*/}
        <div className="left">
        <div className="logo">
                <img src={logo} alt="" />
            </div>
            
            <div className="appname">
               <h1> Welcome to <br/> Systempackage</h1>
            </div>
            <form className='infoform auth-form'>
                <div className='infoInpt container'>
                    <div><input type="text" placeholder='hello' className='inp' /></div>
                    <div className='box'>@headsdesign 
                    <img src={icon} className='icon' alt="" />
                    </div>
                </div>
                <div className='infoInpt container'>
                    <div className="hold">
                    <input type="password" placeholder='Enter Password'  className='inp'/>
                    <img src={iconp} alt="" />
                    </div>
                </div>
                <div className='btn'  >
                    Next
                </div>
            </form>
            <span className='forget'>Forget your password</span>
            <span className='nmember'>Not Member? <a href="">Create Account</a></span>
        </div>
        {/*Right Side*/}
        <div className="auth-right">
             <Right/>
        </div>
       
    </div>
  )
}

export default SignUp