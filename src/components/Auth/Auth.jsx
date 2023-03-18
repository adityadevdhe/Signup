import React from 'react';
import './Auth.css';
import img from '../../img/Image frame.png';
import logo from '../../img/Logo (1).png';
import Right from '../Right/Right';
const Auth = () => {
  return (
    <div className='auth'>
        <div className="left-a">
        <div className="logo">
            <img src={logo} alt="" />
        </div>
        <div className="appname">
            <h1>Enter the verification <br /> code to continue</h1>
        </div>
        <p className='para'>We sent to hellouser@heads.design. If you <br /> don’t see it, check your spam.</p>
        <div className="boxesa">
            <div className="boxa"></div>
            <div className="boxa"></div>
            <div className="boxa"></div>
            <div className="boxa"></div>
            <div className="boxa"></div>
            <div className="boxa"></div>
        </div>
        <div className="contain">
            <span className='blue'><h4>Back</h4></span>
            <span className='resend'>Resend 00:00</span>
        </div>
        <div className="member">
        <span><h4>Not Member? <span className='blue'>Create Account</span></h4></span>
        </div>
        </div>
        <div className="a-right">
        <div className="wrapper">
        <div className="content content-auth">
                <div className="up">
                    <img src={img} alt="" />
                </div>
                <div className="down">
                <div className='badge'>
                        NEW
                    </div>
                    <span className='name'>
                       <h3> Developer handoff <br /> improvements</h3>
                    </span>
                    <p>
                    You’ll now see a highlight around Symbols on <br /> the Canvas and in the Inspector.
                    </p>
                    <div className="contain">
                    <div className='dots'>
                        <div className='dot'></div>
                        <div className='dot b'></div>
                        <div className='dot b'></div>
                        <div className='dot b'></div>
                    </div>
                    <span className='name'>Share</span>
                    </div>
                </div>
            </div>
            <div className="content2 autha"></div>
            <div className="content3 autha"></div>
        </div>
        </div>
        
    </div>
  )
}

export default Auth