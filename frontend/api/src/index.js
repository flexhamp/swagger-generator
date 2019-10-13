import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import App from './App';

import About from './About';
import SkillUpdate from './skill/SkillUpdate'




import {HashRouter as Router, Route, Switch} from "react-router-dom";

ReactDOM.render(
    <Router>
        <Route exact path="/" component={App}/>
        <Route path="/about/:id" component={About}/>
        <Route path="/update" component={SkillUpdate}/>
    </Router>,
    document.getElementById('root')
);
