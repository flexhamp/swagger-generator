import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/style.css'

import SkillsList from './skill/SkillsList'
import AddSkill from "./skill/AddSkill";
import Loader from "./Loader";
import Context from './context'

var SwaggerApi = require('codegen-skills-api');
var api = new SwaggerApi.SkillApi();

import {Redirect} from "react-router-dom";
import About from "./About";

function App() {
    const [skills, setSkills] = React.useState([]);
    const [loading, setLoaging] = React.useState(true);

    const callBackArr = (error, data, response) => {
        if (error) {
            setLoaging(false);
            // console.log('ERROR: ' + error);
        } else {
            setSkills(data);
            setLoaging(false);
            console.log(response)
            console.table(data)
        }
    };

    useEffect(() => {
        api.getSkills(callBackArr);
    }, []);

    const toggleSkill = (id) => {
        setSkills(skills.map(skill => {
                if (skill.id === id) {
                    skill.progress = skill.study
                }
                return skill
            })
        );
    };

    const removeSkill = (id) => {
        api.deleteSkill(id, callBackArr);
    };

    const addSkill = (skill) => {
        api.createSkill({'skill': new SwaggerApi.Skill.constructFromObject(skill)}, callBackArr);
//        setRedirect(true)
    };

    return (
        <Context.Provider value={{removeSkill}}>
            <div className="wrapper">
                <h1>Skills List</h1>
                <AddSkill onCreate={addSkill}/>
                {loading && <Loader/>}
                {skills.length ? (<SkillsList skills={skills} onToggle={toggleSkill}/>) : (
                    loading ? null : <p>No Skills Found</p>
                )}
            </div>
        </Context.Provider>

    );
}

export default App;