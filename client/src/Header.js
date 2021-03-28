import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default function Header() {
    return (
        <div className="mb-6">
            <nav className="navbar">
                <div className="navbar-brand">
                    <a className="navbar-item" href="search">
                        Google Books
                    </a>
                </div>
                <div className="navbar-menu">
                    <div className="navbar-start">
                        <Link className="navbar-item" to="/">Search</Link>
                        <Link className="navbar-item" to="/saved">Saved</Link>
                    </div>
                </div>
            </nav>
            <h1 className="title has-text-centered mt-2">(React) Google Books Search</h1>
            <h2 className="subtitle has-text-centered">Search for and save books of interest</h2>
        </div>
    )
}

