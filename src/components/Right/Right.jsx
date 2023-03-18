import React from 'react';
import img from '../../img/Image frame.png';
import '../SignUp/SignUp.css';
import './Right.css';

const Right = () => {
  return (
    <div className='righta'>
        <div className="wrapper">
        <div className="content">
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
            <div className="content2"></div>
            <div className="content3"></div>
        </div>
    </div>
  )
}

export default Right