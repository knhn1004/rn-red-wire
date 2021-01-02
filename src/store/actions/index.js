import { firebase, usersCollection } from '../../firebase';
import {
    AUTH_START,
    AUTH_USER,
    AUTH_FINISHED,
    LOGOUT,
    AUTO_LOAD_START,
    AUTO_LOAD_FINISHED,
} from './types';

export const registerUser = ({ email, password }) => async dispatch => {
    try {
        dispatch({
            type: AUTH_START,
        });
        const response = await firebase
            .auth()
            .createUserWithEmailAndPassword(email, password);

        const { user } = response;
        const userProfile = {
            uid: user.uid,
            email,
        };

        await usersCollection.doc(user.uid).set(userProfile);
        dispatch({
            type: AUTH_USER,
            payload: { isAuth: ture, user: userProfile },
        });
        dispatch({
            type: AUTH_FINISHED,
        });
    } catch (e) {
        dispatch({
            type: AUTH_USER,
            payload: { error: e.message },
        });
        dispatch({
            type: AUTH_FINISHED,
        });
    }
};

export const loginUser = ({ email, password }) => async dispatch => {
    dispatch({
        type: AUTH_START,
    });
    try {
        const response = await firebase
            .auth()
            .signInWithEmailAndPassword(email, password);

        const userProfileRef = await usersCollection
            .doc(response.user.uid)
            .get();
        const userProfile = userProfileRef.data();

        dispatch({
            type: AUTH_USER,
            payload: { isAuth: true, user: userProfile },
        });
        dispatch({
            type: AUTH_FINISHED,
        });
    } catch (e) {
        dispatch({
            type: AUTH_USER,
            payload: { error: e.message },
        });
        dispatch({
            type: AUTH_FINISHED,
        });
    }
};

const autoSignInPromise = () => {
    return new Promise((resolve, reject) => {
        firebase.auth().onAuthStateChanged(async user => {
            if (!!user) {
                const userSnapshot = await usersCollection.doc(user.uid).get();
                resolve({ isAuth: true, user: userSnapshot.data() });
            } else {
                reject({ isAuth: false, user: [] });
            }
        });
    });
};

export const autoSignIn = () => async dispatch => {
    dispatch({
        type: AUTO_LOAD_START,
    });
    try {
        const result = await autoSignInPromise();
        dispatch({
            type: AUTH_USER,
            payload: result,
        });
        dispatch({
            type: AUTO_LOAD_FINISHED,
        });
    } catch (e) {
        dispatch({
            type: AUTO_LOAD_FINISHED,
        });
    }
};

export const logout = () => async dispatch => {
    try {
        await firebase.auth().signOut();
        dispatch({
            type: LOGOUT,
        });
    } catch (e) {
        console.log(e);
    }
};
