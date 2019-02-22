import React, { Component } from 'react';
import Logo from '../../assets/logo.svg'
import './Header.css'


class Header extends Component {


    render() {
        return (
            <div className="Header">
                <img className="Header-logo"
                     src={Logo}
                     alt="Logo"
                />
                <div className="Header-title">Demo app</div>
            </div>
        );
    }
}

export default Header;
