import React from 'react';
import './nav.css'
import { Link } from 'react-router-dom';



function Nav() {


    return (
        <div className="navbar_show">
            <nav class="navbar_bar">
                <img className="navbar_icon" id="logo"

                    src="https://cdn.onlinewebfonts.com/svg/img_224040.png" alt=""
                />
                <ul className="itemShow">
                    <Link to="/News" className="allTypeOf_News">
                        Home
                    </Link>
                    <Link to="/sportnews" className="sport" >
                        sport
                    </Link>

                    <Link to="./"  className="other" >
                        other
                        <div class="dropdown-content">
                            <Link to="./Bike" className="bike">Bike's</Link>
                            <Link to="./Car" className="car">Car's</Link>
                            <Link to="./Entertenment" className="entertenment">Entertenment</Link>
                            <Link to="./Mobile" className="Mobile">Mobile</Link>
                            <Link to="./Movie" className="movie">Movie's</Link>
                            <Link to="./Socialmedia" className="Socialmedia">Social media</Link>
                            
                        </div>
                    </Link>

                </ul>
                <div className="finder">
                    <input className="input_qr" placeholder="Serch Here">
                    </input>
                    <button className="click_qr">
                        Find
                    </button>
                </div>

            </nav>
        </div>
    )
};
export default Nav;