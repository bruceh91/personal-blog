import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import AuthButton from './auth/authButton';


class Navbar extends Component {



    render() {
        return (

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/admin/home">Admin Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/donate">Donations</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                    </ul>
                    <div className="my-2 my-lg-0 position-relative">
                    <AuthButton />
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar; 