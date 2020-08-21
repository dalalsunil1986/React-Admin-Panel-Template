import React from 'react'
import "./Menu.css"
import { Link } from "react-router-dom";
const Menu = () => {
    return (
        <div className="menu">
            <ul className="menu-options">
                <li className="menu-list">
                    <Link to="/" className="menu-link">
                        Dashboard
                    </Link>
                </li>
                <li className="menu-list">
                    <Link to="/" className="menu-link">
                        Account
                    </Link>
                </li>
                <li className="menu-list">
                    <Link to="/" className="menu-link">
                        Logout
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Menu
