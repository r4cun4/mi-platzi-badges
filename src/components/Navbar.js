import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Navbar.css'
import logo from '../images/logo.svg';

class Navbar extends React.Component {
    render() {
        return (
            <div className="Navbar">
                <div className="container-fluid">
                    <Link className="Navbar__brand" to="/">
                        <img className="Navbar__brand-logo" src={logo} alt="Logo" />
                    </Link>
                        <Link className="Navbar__brand" to="/">Home</Link>
                        <Link className="Navbar__brand" to="/badges/new">BadgesNew</Link>
                        <Link className="Navbar__brand" to="/badges">Badges</Link>
                </div>
            </div>
        )
    }
}

export default Navbar;