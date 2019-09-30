import React from 'react';
import { Link } from "react-router-dom";

import './Header.css';

export default function Header() {
    return (
        <header className="app-header">
            <Link to="/" className="app-logo">
                <span>Logo</span>
            </Link>

            <div className="float-right">
                <ul className="header-links clearfix">
                    <li>
                        <Link to="/">
                            <span>Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/forms">
                            <span>Forms</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/logout">
                            <span>Logout</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    )
};