import './index.css';
import React from "react";
import { Link } from "react-router-dom";
import {useSelector} from 'react-redux';
import HeaderLogo from '../Main/index';
import pic from './smarthome.jpg';
import { FaHouseUser } from "react-icons/fa";

function HomePage() {
    const userSignin = useSelector(state => state.userSignin)
    const {userInfo} = userSignin;
    
    return (
        <div className="App">
            <div className="main">
                <img src={pic} alt="pic" />
                
                <div className='login'>
                    <Link to="./signin">
                        <button className='first'>Sign in</button>
                    </Link>
                    <Link to="./signup">
                        <button>Sign up</button>
                    </Link>
                    <span className='dot'>
                        <FaHouseUser className='logo' />
                    </span>
                </div>
            </div>
        </div>
    );
}

export default HomePage;