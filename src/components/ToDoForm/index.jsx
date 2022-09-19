import React, { useState } from 'react';
import PropTypes from 'prop-types';

TodoForm.propTypes = {
    onSubmit: PropTypes.func,
};

TodoForm.defaultProps = {
    onSubmit: null,
}

function TodoForm(props) {
    const {onSubmit} = props //sử dụng Object destructoring để lấy nó ra
    const [value, setValue] = useState('')

    function handleValueChange(e) {
        // console.log(e.target.value)
        setValue(e.target.value)
    }

    function handleSubmit(e) {//BÁO LÊN THẰNG CHA CÓ SK SUBMIT
        e.preventDefault()//Prevent Reloading Browser
        if (!onSubmit) {
            return
        }
        const formValues = {
            title: value, 
        };
        onSubmit(formValues)

        //reset form
        setValue('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={value} onChange={handleValueChange} />
        </form>
    );
}

export default TodoForm;