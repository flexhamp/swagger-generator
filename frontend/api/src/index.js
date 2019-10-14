import React from 'react';
import ReactDOM from 'react-dom';
import './css/style.css';
import './css/bootstrap.min.css';
import './js/jquery'
import './js/bootstrap.min'


import App from './App';

import {HashRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from "./Navbar";

ReactDOM.render(
    <Router>
        <Navbar />
    </Router>,
    document.getElementById('root')
);
