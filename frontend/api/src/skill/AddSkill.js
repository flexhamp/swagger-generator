import React, {useState} from 'react';
import PropTypes from 'prop-types';

const styles = {
    form: {
        marginBottom: '1rem'
    }
};

//Create My first Hook
function useInputValue(defaultValue = '') {
    const [value, setValue] = useState(defaultValue);
    return {
        bind: {
            value,
            onChange: event => setValue(event.target.value)
        },
        clear: () => setValue(''),
        value: () => value

    }
}


function AddSkill({onCreate}) {
    const input = useInputValue('');
    function submitHendler(event) {
        event.preventDefault();
//      Валидация
        if (input.value().trim()) {
            onCreate(input.value())
            input.clear()
        }
    }

    return (
        <form style={styles.form} onSubmit={submitHendler}>
            <input {...input.bind}/>
            <button type="submit">Add Skill</button>
        </form>
    );
}

AddSkill.propTypes = {
    onCreate: PropTypes.func.isRequired
};

export default AddSkill