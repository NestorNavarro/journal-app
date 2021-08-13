import { useState } from 'react';

export default function useForm( initialState = {} ) {
    const [formValues, setValues] = useState(initialState);
    
    const reset = (newState = initialState) => {
        setValues(newState);
    }

    const handleInputChange = ({ target }) => {
        setValues({
            ...formValues,
            [target.name]: target.value,
        });
    }
    return [ formValues, handleInputChange, reset ];
}