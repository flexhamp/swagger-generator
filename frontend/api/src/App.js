import React, {useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/style.css'

import SkillsList from './skill/SkillsList'
import AddSkill from "./skill/AddSkill";

import Context from './context'

function App() {
    const [skills, setSkills] = React.useState([
        {id: 1, name: "Java", study: 1600, progress: 523},
        {id: 2, name: "Kotlin", study: 900, progress: 157},
        {id: 3, name: "Groovy", study: 530, progress: 256},
        {id: 4, name: "Jenkins", study: 600, progress: 200}]
    );

    useEffect(() => {
        fetch('http://localhost:8080/skill')
            .then(response => response.json())
            .then(json => console.log(json));
    }, []);

    function toggleSkill(id) {
        setSkills(skills.map(skill => {
                if (skill.id === id) {
                    skill.progress = skill.study
                }
                return skill
            })
        );
    }

    function removeSkill(id) {
        setSkills(skills.filter(skill => skill.id !== id))
    }

    function addSkill(name) {
        setSkills(skills.concat([{
            id: skills.length + 1,
            name,
            study: 1600,
            progress: 523
        }]))
    }

    return (
        <Context.Provider value={{removeSkill}}>
            <div className="wrapper">
                <h1>Skills List</h1>
                <AddSkill onCreate={addSkill}/>
                {skills.length ? <SkillsList skills={skills} onToggle={toggleSkill}/> : <p>No Skills Found</p>}
            </div>
        </Context.Provider>
    );
}

export default App;