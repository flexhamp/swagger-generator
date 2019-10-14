import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/style.css'

import {Redirect} from "react-router-dom";
import Context from "../App";

var SwaggerApi = require('codegen-skills-api');
var api = new SwaggerApi.SkillApi();

function SkillUpdate(props) {
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
                    var copy = Object.assign({}, value);
                    copy[name] = event.target.value
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
        <div className="wrapper">
            <h2 className="text-center">Edit Skill</h2>
            <form className="formA" onSubmit={submitHendler}>
                <input type="hidden" defaultValue={value.id || ''}/>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label>Skill</label>
                        <input className="form-control" defaultValue={value.name || ''} {...name.bind}/>
                    </div>
                    <div className="form-group col-md-3">
                        <label>Study</label>
                        <input type="number" className="form-control" defaultValue={value.study || ''} {...study.bind}/>
                    </div>
                    <div className="form-group col-md-3">
                        <label>Progress</label>
                        <input type="number" className="form-control" defaultValue={value.progress || ''} {...progress.bind}/>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Update Skill</button>
            </form>
        </div>
    );
}

export default SkillUpdate