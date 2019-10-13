import React, {useState} from 'react';
import PropTypes from 'prop-types';

const styles = {
    form: {
        marginBottom: '1rem'
    }
};

function AddSkill({onCreate}) {
    const defaultValue = {
        id: '',
        name: '',
        study: '',
        progress: ''
    };
    const [value, setValue] = useState(defaultValue);

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

    const input = {
        name: useInputValue('', "name"),
        study: useInputValue('', "study"),
        progress: useInputValue('', "progress")
    };

    function submitHendler(event) {
        event.preventDefault();
        if (value.name.trim()) {
            onCreate(value);
            setValue(defaultValue);
         }
    }

    return (
        <form style={styles.form} onSubmit={submitHendler}>
            <input type="hidden" value={value.id}/>
            <input {...input.name.bind}/>
            <input {...input.study.bind}/>
            <input {...input.progress.bind}/>
            <button type="submit">Add Skill</button>
        </form>
    );
}

AddSkill.propTypes = {
    onCreate: PropTypes.func.isRequired
};

export default AddSkill