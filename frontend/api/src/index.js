import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import App from './App';

import {HashRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from "./Navbar";

ReactDOM.render(
    <Router>
        <Navbar />
    </Router>,
    document.getElementById('root')
);
