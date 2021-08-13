import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { starLoginEmailPassword, startGoogleLogin } from '../../actions/auth';
import useForm from '../../hooks/useForm';


export default function LoginScreen() {
    const { loading } = useSelector(state => state.ui );
    
    const [ formValues, handleInputChange ] = useForm({
        email: 'nestor@gmail.com',
        password: '123456',
    });
    const { email, password } = formValues;
    
    const dispatch = useDispatch();  
    const handleLogin = (e) => {
        e.preventDefault();
        dispatch( starLoginEmailPassword(email, password) );
    };
    const handleGoogleLogin = () => {
        dispatch( startGoogleLogin() );
    }
    return (
        <>
            <h3 className="auth__title">Login</h3>
            <form 
                className="animate__animated animate__fadeIn animate__faster"
                onSubmit={ handleLogin } 
            >
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
                <button
                    className="btn btn-primary btn-block"
                    type="submit"
                    disabled={ loading }
                >
                    Login
                </button>
                <div className="auth__social-networks">
                    <p>Login with social networks</p>
                    <div
                        className="google-btn"
                        onClick={ handleGoogleLogin }
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>
                <Link className="link" to="/auth/register">
                    Create new account
                </Link>
            </form>
        </>
    );
}
