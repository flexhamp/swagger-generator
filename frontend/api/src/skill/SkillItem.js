import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import Context from '../context'
import {Link} from "react-router-dom";

const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.5rem 1rem',
        border: '1px solid #ccc',
        borderRadius: '4px',
        marginBottom: '.5rem'
    },
    input: {
        marginRight: '1rem'
    }
};

export function SkillItem({skill, onChange}) {
    const {removeSkill} = useContext(Context);
    const classes = [];

    if (skill.progress === skill.study) {
        classes.push('done')
    }
    return (
        <li style={styles.li}>
            <span className={classes.join(' ')}>
                <input type="checkbox"
                       style={styles.input}
                       onChange={() => onChange(skill.id)}
                       checked={skill.progress === skill.study}
                />
                <Link to={`/update/${skill.id}`}>
                    <strong>{skill.name}</strong>&nbsp;
                    <span className="badge badge-primary">{skill.study} ч</span>&nbsp;
                    <span className="badge badge-success">{skill.progress} ч</span>
                </Link>
            </span>

            <button className='rm' onClick={removeSkill.bind(null, skill.id)}>&times;</button>
        </li>


    );
}

SkillItem.propTypes = {
    skill: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired
};

export default SkillItem