import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/style.css'

import SkillsList from './skill/SkillsList'

function App() {
    const skills = [
        {id: 1, name: "Java", study: 1600, pogress: 523},
        {id: 2, name: "Kotlin", study: 900, pogress: 157},
        {id: 3, name: "Groovy", study: 530, pogress: 256},
        {id: 4, name: "Jenkins", study: 600, pogress: 200}
    ];

    return (
        <div className="wrapper">
            <h1>Skills List</h1>
            <SkillsList skills={skills}/>
        </div>
    );
}

export default App;