import React from 'react';
import PropTypes from 'prop-types';
import SkillItem from './SkillItem';

const styles = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0
    }
};

export function SkillsList(props) {
    return (
        <ul style={styles.ul}>
            {props.skills.map(skill => {
                return <SkillItem skill={skill} key={skill.id} onChange={props.onToggle}/>
            })}
        </ul>
    );
}

SkillsList.propTypes = {
    skills: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle: PropTypes.func.isRequired
};

export default SkillsList