import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import validator from 'validator';
import { removeError, setError } from '../../actions/ui';
import { starRegisterWithEmailPassword } from '../../actions/auth';

export const RegisterScreen = () => {
    const dispatch = useDispatch();
    const { msgError } = useSelector( state => state.ui );
    const [ formValues, handleInputChange ] = useForm({
        name: 'Nestor',
        email: 'nestor@gmail.com',
        password: '123456',
        password2: '123456',
    });
    const { name, email, password, password2 } = formValues;

    const handleRegister = (e) => {
        e.preventDefault();
        if(isFormValid()) {
            dispatch( starRegisterWithEmailPassword(email, password, name) );
        }
    }

    const isFormValid = () => {
        let error;
        if(name.trim().length === 0){
            error = 'Names is required';
            dispatch( setError(error) );
            return false;
        } else if(!validator.isEmail(email)) {
            error = 'Email is not valid';
            dispatch( setError(error) );
            return false;
        } else if(password !== password2){
            error = 'Passwords should be equals';
            dispatch( setError(error) );
            return false;
        } else if(password.length < 5) {
            error = 'The password should be at least six charecters';
            dispatch( setError(error) );
            return false;
        }
        dispatch( removeError() );
        return true;
    }
    return (
        <>
            <h3 className="auth__title">Register</h3>
            <form 
                className="animate__animated animate__fadeIn animate__faster"
                onSubmit={ handleRegister } 
            >
                {msgError &&
                    <div className="auth__alert-error">
                        {msgError}
                    </div>
                }
            
                <input
                    className="auth__input"
                    type="text"
                    placeholder="Name"
                    name="name"
                    autoComplete="off"
                    value={ name }
                    onChange={ handleInputChange } 
                />
                 <input
                    className="auth__input"
                    type="text"
                    placeholder="Email"
                    name="email"
                    autoComplete="off"
                    value={ email }
                    onChange={ handleInputChange } 
                />
                <input
                    className="auth__input"
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={ password }
                    onChange={ handleInputChange } 
                />
                <input
                    className="auth__input"
                    type="password"
                    placeholder="Confirm"
                    name="password2"
                    value={ password2 }
                    onChange={ handleInputChange } 
                />
                
                <button
                    className="btn btn-primary btn-block mb-5"
                    type="submit"
                    disabled={false}
                >
                    Register
                </button>
                <Link 
                    className="link mt-5" 
                    to="/auth/login">
                    Already register?
                </Link>
            </form>
        </>
    );
}
