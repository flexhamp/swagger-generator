import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/style.css'

import SkillsList from './skill/SkillsList'
import AddSkill from "./skill/AddSkill";
import Loader from "./Loader";
import Context from './context'

var SwaggerApi = require('codegen-skills-api');
var api = new SwaggerApi.SkillApi();

function App() {
    const [skills, setSkills] = React.useState([]);

    const [loading, setLoaging] = React.useState(true);

    const callBackArr = (error, data, response) => {
        if (error) {
            setLoaging(false);
        } else {
            setSkills(data);
            setLoaging(false);
        }
    };

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
    };

    useEffect(() => {
        api.getSkills(callBackArr);
    }, []);


    return (
        <Context.Provider value={{removeSkill}}>
            <div className="wrapper">
                <h2 className="text-center">Skills List</h2>
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