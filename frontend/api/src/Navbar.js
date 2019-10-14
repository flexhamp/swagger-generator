import React from 'react';
import {HashRouter as Router, Route, Link} from "react-router-dom";
import App from "./App";
import About from "./About";
import SkillUpdate from "./skill/SkillUpdate";

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">App</Link>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
                    </ul>
                </div>
            </nav>
            <div className="container-fluid">
                <Router>
                    <Route path="/" exact component={App} />
                    <Route path="/about" component={About} />
                    <Route path="/update/:id" component={SkillUpdate} />
                </Router>
            </div>
        </div>
    );
}

export default Navbar;