import React from 'react';
import { Link } from 'react-router-dom';

var Nav = function () {
    return (
        <nav className="navbar navbar-default navbar-fixed-top animation-hide">
            <div className="container">
                <div className="navbar-header">
                    <Link to='/' className="navbar-brand">
<<<<<<< HEAD
                        <img alt="Brand" className="buzzybee_writing" src="BuzzyBee_logo.png" />
                    </Link>
=======
                        <img className="buzzybee_writing" alt="Brand" src="BuzzyBee_logo.png" />
                    </Link> 
>>>>>>> master
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse navbar-right">
                    <ul className="nav navbar-nav">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/jobs'>Jobs</Link></li>
                        <li><Link to='/story'>Story</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav;
