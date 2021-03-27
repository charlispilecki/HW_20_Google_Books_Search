import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default function Header() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Search</Link>
                    </li>
                    <li>
                        <Link to="/saved">Saved</Link>
                    </li>
                </ul>
            </nav>
            <h1 className="title">(React) Google Books Search</h1>
            <h2 className="subtitle">Search for and save books of interest</h2>
            <br></br>
        </div>
    )
}

