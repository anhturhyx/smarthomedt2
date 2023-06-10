import React from "react";
import './index.css';
import {BrowserRouter as Router, Switch, Route, Routes, Link, Redirect} from 'react-router-dom';
import Menu from '../Menu/index';
import Gas from '../Gas/index';
import Temp_Humid from '../Temp&Humid/index';
import Login from '../Login/index';
import Overview from '../Overview/index';
import HeaderLogo from '../HeaderLogo/index'
import Light from '../Light/index';
import Door from '../Door/index';

function HomePage() {
    return (
        <div className="home">
           <Menu/>
           <Overview/>
        
        
      </div>
        
    );
}

export default HomePage;