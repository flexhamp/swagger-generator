import React, {useState} from 'react';
import PropTypes from 'prop-types';

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
        <form className="formA" onSubmit={submitHendler}>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label>Skill</label>
                    <input className="form-control" {...input.name.bind}/>
                </div>
                <div className="form-group col-md-3">
                    <label>Study</label>
                    <input type="number" className="form-control"{...input.study.bind}/>
                </div>
                <div className="form-group col-md-3">
                    <label>Progress</label>
                    <input type="number" className="form-control" {...input.progress.bind}/>
                </div>
            </div>
            <button type="submit" className="btn btn-primary">Add Skill</button>
        </form>
    );
}

AddSkill.propTypes = {
    onCreate: PropTypes.func.isRequired
};

export default AddSkill