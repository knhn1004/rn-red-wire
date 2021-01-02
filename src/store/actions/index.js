import { firebase, usersCollection } from '../../firebase';
import { AUTH_START, AUTH_USER, AUTH_FINISHED } from './types';

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
