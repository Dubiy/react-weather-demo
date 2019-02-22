import React, { Component } from 'react';
import Logo from '../../assets/logo.svg'
import './Header.css'
import {Link} from "react-router-dom";


class Header extends Component {


    render() {
        return (
            <div className="Header">
                <img className="Header-logo"
                     src={Logo}
                     alt="Logo"
                />
                <div className="Header-title">Demo app</div>
                <nav>
                    <Link to="/">Weather</Link>
                    <Link to="/page">Page1</Link>
                    <Link to="/about">About</Link>
                </nav>
            </div>
        );
    }
}

export default Header;
