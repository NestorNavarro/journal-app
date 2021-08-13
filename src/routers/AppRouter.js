import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';
import { firebase } from '../firebase/firebaseConfig';
import { login } from '../actions/auth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
} from "react-router-dom";
import { startLoadingNotes } from '../actions/note';



export const AppRouter = () => {
    const dispatch = useDispatch();
    const [checking, setChecking] = useState(true);
    const [isAuth, setIsAuth] = useState(false);
    useEffect(() => {
        firebase.auth().onAuthStateChanged( async (user) =>{
            if(user?.uid) {
                dispatch( login(user.uid, user.displayName) );
                setIsAuth(true);
                dispatch( startLoadingNotes(user.uid) );
            } else {
                setIsAuth(false);
            }
            setChecking(false);
        });
    }, [dispatch, setChecking, setIsAuth]);

    if(checking) {
        return (
            <h1>Loading...</h1>
        );
    }

    return (
        <Router>
            <div>
                <Switch>
                    <PrivateRoute exact path="/" isAuth={ isAuth } component={ JournalScreen } />
                    <PublicRoute path="/auth" isAuth={ isAuth } component={ AuthRouter } />
                    <Redirect to="/auth/login" />
                </Switch>
            </div>
        </Router>
    );
}
