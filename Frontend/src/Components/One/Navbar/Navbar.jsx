import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';

const Navbar = () => {

    return (
        <>
            <nav className='laptop-navbar'>
                <div className="logo">
                    <h2>3EIGHT</h2><span className="material-symbols-outlined">
                        restaurant_menu
                    </span>
                </div>
                <div className="menu-item">
                    <ul>
                        <li>
                            Home
                        </li>
                        <li className='icon-nav'>

                            <p>   Service</p>
                            <span className="material-symbols-outlined">
                                stat_minus_1
                            </span>
                        </li>
                        <li className='icon-nav'>
                            <p> Menu</p>
                            <span className="material-symbols-outlined">
                                stat_minus_1
                            </span>
                        </li>
                        <li>
                            Contact
                        </li>
                    </ul>
                </div>
                <div className="last-part-nav">
                    <span className="material-symbols-outlined">
                        local_mall
                    </span>
                    <button>Login</button>
                </div>
            </nav>
            <nav className='phone-navbar'>
                <div className="phone-nav-top">
                    <div className="logo">
                        <h2>3EIGHT</h2><span className="material-symbols-outlined">
                            restaurant_menu
                        </span>
                    </div>
                    <div className="last-part-nav">
                        <span className="material-symbols-outlined">
                            local_mall
                        </span>
                        <button>Login</button>
                    </div>
                </div>
                <div className="phone-nav-bottom">
                    <ul className='phone-menu-item'>
                        <li className='phone-menu-item-li'><h2>home</h2></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar