import React, {useEffect, useState} from 'react';
import Loader from "./Loader";
import Context from './context'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/style.css'


import AddSkill from './skill/AddSkill'

import {Redirect} from "react-router-dom";

var SwaggerApi = require('codegen-skills-api');
var api = new SwaggerApi.SkillApi();


function About(props) {
    const [loading, setLoaging] = React.useState(true);
    const skillId = props.match.params.id;
    const callBack = (error, data, response) => {
        if (error) {
            setLoaging(false);
        } else {
            setValue(data)
            setLoaging(false);
        }
    };
    //Пример перенаправления после .... setRedirect(true)
    const [redirect, setRedirect] = useState(false);
    useEffect(() => {
        api.getSkillById(skillId, callBack);
    }, []);
    const defaultValue = {
        id: '',
        name: '',
        study: '',
        progress: ''
    };
    const [value, setValue] = useState(defaultValue);

    if (redirect) {
        return <Redirect to='/'/>
    }

    const updateSkill = (skill) => {
      console.table(skill);
        api.updateSkill({'skill': new SwaggerApi.Skill.constructFromObject(skill)}, (err, data, resp) => {});
        setRedirect(true)
    };

    function submitHendler(event) {
        event.preventDefault();
        console.log(value)
        if (value.name.trim()) {
            updateSkill(value);
        }
    }

    function useInputValue(defaultValue = '', name) {
        return {
            bind: {
                name,
                value: value[name],
                onChange: event => {
                    var copy = Object.assign({}, value);
                    copy[name] = event.target.value;
                    setValue(copy)
                }
            },
            value: () => value
        }
    }
    name: useInputValue('', "name");

    return (
        <form onSubmit={submitHendler}>
            <input type="hidden" defaultValue={value.id || ''}/>
            <input defaultValue={value.name || ''} onChange={event => {
                    console.log(value);
                    var copy = Object.assign({}, value);
                    copy.name = event.target.value
                    console.log(copy)
                    setValue(copy)
                }
            }/>
            <input defaultValue={value.study || ''} onChange={event => {
                                console.log(event.target.value);
                                var copy = Object.assign({}, value);
                                console.log(copy)
                                copy.study = event.target.value
                                console.log(copy)
                                setValue(copy)
                            }
                        }/>
                         <input defaultValue={value.progress || ''} onChange={event => {
                                                        console.log(event.target.value);
                                                        var copy = Object.assign({}, value);
                                                        console.log(copy)
                                                        copy.progress = event.target.value
                                                        console.log(copy)
                                                        setValue(copy)
                                                    }
                                                }/>
            <button type="submit">Add Skill</button>
        </form>
    );
}
export default About