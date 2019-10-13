import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/style.css'


import AddSkill from './skill/AddSkill'

import {Redirect} from "react-router-dom";

var SwaggerApi = require('codegen-skills-api');
var api = new SwaggerApi.SkillApi();


function About(props) {
    const [loading, setLoaging] = React.useState(true);
    const skillId = props.match.params.id;
    const [value, setValue] = useState({});
    const callBack = (error, data, response) => {
        if (error) {
            setLoaging(false);
        } else {
            setValue(data)
            setLoaging(false);
        }
    };

    const [redirect, setRedirect] = useState(false);
    useEffect(() => {
        api.getSkillById(skillId, callBack);
    }, []);

    if (redirect) {
        return <Redirect to='/'/>
    }

    const updateSkill = (skill) => {
        console.table(skill);
        api.updateSkill({'skill': new SwaggerApi.Skill.constructFromObject(skill)}, (err, data, resp) => {
        });
        setRedirect(true)
    };

    function submitHendler(event) {
        event.preventDefault();
        console.log(value)
        if (value.name.trim()) {
            updateSkill(value);
        }
    }

    function useInputValue(name) {
        return {
            bind: {
                name,
                value: value[name],
                onChange: event => {
                    console.log(value);
                    var copy = Object.assign({}, value);
                    copy[name] = event.target.value
                    console.log(copy)
                    setValue(copy)
                }
            },
            value: () => value
        }
    }

    const name = useInputValue("name");
    const study = useInputValue("study");
    const progress = useInputValue("progress");

    return (
        <form onSubmit={submitHendler}>
            <input type="hidden" defaultValue={value.id || ''}/>
            <input defaultValue={value.name || ''} {...name.bind}/>
            <input defaultValue={value.study || ''} {...study.bind}/>
            <input defaultValue={value.progress || ''} {...progress.bind}/>
            <button type="submit">Add Skill</button>
        </form>
    );
}

export default About