import React, {useState} from 'react';

export const useForm = (callback, initialState = {}) => {

    const [values, setValues] = useState(initialState);

    const onChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value})
    };

    const onSubmit = (event) => {
        // To avoid the refresh of the page after the submit
        event.preventDefault();
        callback();
    };

    return {
        onChange,
        onSubmit,
        values
    }
}




