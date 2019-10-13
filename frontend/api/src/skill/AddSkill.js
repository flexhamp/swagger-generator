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
    const [value, setValue] = useState({name: "", study: "", progress: ""});
    const input = useInputValue('');
    function submitHendler(event) {
        event.preventDefault();
        console.table(value)
//      Валидация
//         if (input.value().trim()) {
//             onCreate(input.value())
//             input.clear()
//         }
    }

    return (
        <form style={styles.form} onSubmit={submitHendler}>
            {/*<input {...input.bind}/>*/}
            <input name="name" value={value.name} onChange={event => {
                console.log(value)
                var copy = Object.assign({}, value)
                console.log(copy)
                copy.name = event.target.value
                console.log(copy)
                setValue(copy)
            }}/>
            <input name="study" value={value.study} onChange={event => {
                console.log(value)
                var copy = Object.assign({}, value)
                console.log(copy)
                copy.study = event.target.value
                console.log(copy)
                setValue(copy)
            }}/>
            <input name="progress" value={value.progress} onChange={event => {
                console.log(value)
                var copy = Object.assign({}, value)
                console.log(copy)
                copy.progress = event.target.value
                console.log(copy)
                setValue(copy)
            }}/>
            <button type="submit">Add Skill</button>
        </form>
    );
}

AddSkill.propTypes = {
    onCreate: PropTypes.func.isRequired
};

export default AddSkill