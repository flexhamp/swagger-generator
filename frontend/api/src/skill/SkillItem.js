import React from 'react';
import PropTypes from 'prop-types';

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

export function SkillItem({skill}) {
    return (
        <li style={styles.li}>
            <span>
                <input type="checkbox" style={styles.input}/>
                <strong>{skill.id}</strong>&nbsp;{skill.name}&nbsp;{skill.study}&nbsp;{skill['pogress']}
            </span>
            <button className='rm'>&times;</button>
        </li>
    );
}

SkillItem.propTypes = {
    skill: PropTypes.object.isRequired
};

export default SkillItem