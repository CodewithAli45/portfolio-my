import React from 'react';
import backdrop from '../utils/6170426_3054594.svg';
import '../styles/Backdrop.css';


export const Backdrop = () => {
    return (
        <div className='backdrop'>
            <div className="person-text">
                <p className='first-text'>Welcome to World of Web Developer</p>
                <p>Hi! I am, <span className='person-text-name'>Ali Murtaza</span></p>
                <p className='last-text'>A Full Stack Developer with skills in <em> HTML, CSS, JavaScript, Reactjs, Nodejs, Expressjs, Mongodb database and DSA with JAVA.</em></p>
            </div>
            <img src={backdrop} alt="backdrop" className='backdrop-image'/>
        </div>
    );
}

