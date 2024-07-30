import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';

const Navbar = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        let timeoutId;
        const handleScroll = () => {
            setIsVisible(false);
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => setIsVisible(true), 200);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(timeoutId);
        };
    }, []);

    const handleContactClick = (e) => {
        e.preventDefault();
        document.getElementById('footer').scrollIntoView({ behavior: 'smooth' });
    };

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
                        <Link to="/">Home</Link>
                        </li>
                        <li className='icon-nav'>
                            <Link to="/service">Service</Link>
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
                            <Link to="#footer" onClick={handleContactClick}>Contact</Link>
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
                <div className="phone-navbar-top">
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
                <div className={`phone-navbar-bottom ${isVisible ? 'visible' : 'hidden'}`}>
                    <section>
                        <span className="material-symbols-outlined">
                            home
                        </span> <small>Home</small>
                    </section>
                    <section>
                        <span class="material-symbols-outlined">
                            support_agent
                        </span><small>Service</small>
                    </section>
                    <section>
                        <span class="material-symbols-outlined">
                            restaurant_menu
                        </span> <small>Menu</small>
                    </section>
                    <section onClick={handleContactClick}>
                        <span class="material-symbols-outlined">
                            call
                        </span> <small>Contact</small>
                    </section>
                </div>
            </nav>
        </>
    )
}

export default Navbar