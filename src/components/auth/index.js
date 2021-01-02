import React, { Fragment, useCallback, useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Colors, LogoText, showToast } from '../../utils/tools';
import { Button, Input } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../store/actions';
import { useFocusEffect } from '@react-navigation/native';
import { CLEAN_AUTH_ERROR } from '../../store/actions/types';

const validationSchema = Yup.object({
    email: Yup.string().email().required(),
    password: Yup.string().required(),
});

const AuthScreen = () => {
    const [hidePassword, setHidePassword] = useState(true);
    const [formType, setFormType] = useState('login');
    const authLoading = useSelector(state => state.auth.loading);

    useEffect(() => {
        showToast('success', 'Hello', 'Welcome to Redwire!');
    }, []);

    const dispatch = useDispatch();
    const error = useSelector(state => state.auth.error);

    useEffect(() => {
        if (!!error && !authLoading) {
            showToast('error', 'Sorry', error);
        }
    }, [error, authLoading]);

    useFocusEffect(
        useCallback(() => {
            return () =>
                dispatch({
                    type: CLEAN_AUTH_ERROR,
                });
        }, [])
    );

    return (
        <View style={styles.contentContainerStyle}>
            <View style={styles.container}>
                <LogoText style={{ fontSize: 58 }} />
                <Formik
                    initialValues={{
                        email: 'test@test.com',
                        password: 'test123',
                    }}
                    validationSchema={validationSchema}
                    onSubmit={(values, { resetForm }) => {
                        if (formType === 'login') {
                            // login
                        } else {
                            // register
                            // dispatch({ type: AUTH_START });
                            dispatch(registerUser(values));
                        }
                    }}
                >
                    {({
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        values,
                        touched,
                        errors,
                    }) => (
                        <Fragment>
                            <Input
                                placeholder="Email"
                                leftIcon={{
                                    type: 'antdesign',
                                    name: 'mail',
                                    color: Colors.white,
                                }}
                                inputStyle={styles.inputStyle}
                                placeholderTextColor={Colors.grey}
                                inputContainerStyle={styles.inputContainer}
                                textContentType="emailAddress"
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                                renderErrorMessage={
                                    errors.email && touched.email
                                }
                                errorMessage={errors.email}
                                errorStyle={{ color: Colors.black }}
                            />
                            <Input
                                placeholder="Password"
                                leftIcon={{
                                    type: 'antdesign',
                                    name: 'lock',
                                    color: Colors.white,
                                }}
                                inputStyle={styles.inputStyle}
                                placeholderTextColor={Colors.grey}
                                inputContainerStyle={styles.inputContainer}
                                textContentType="password"
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                                secureTextEntry={hidePassword}
                                rightIcon={{
                                    type: 'antdesign',
                                    name: hidePassword ? 'eye' : 'eyeo',
                                    onPress: () =>
                                        setHidePassword(prev => !prev),
                                    size: 30,
                                }}
                                renderErrorMessage={
                                    errors.password && touched.password
                                }
                                errorMessage={errors.password}
                                errorStyle={{ color: Colors.black }}
                            />
                            <Button
                                title={
                                    formType === 'login' ? 'LOGIN' : 'REGISTER'
                                }
                                buttonStyle={{
                                    backgroundColor: Colors.black,
                                    marginTop: 10,
                                }}
                                titleStyle={{
                                    width: '100%',
                                }}
                                onPress={handleSubmit}
                                loading={authLoading}
                            />
                            <Button
                                type="outline"
                                title={
                                    formType === 'login'
                                        ? 'Need an account?'
                                        : 'Already have an account?'
                                }
                                buttonStyle={{
                                    marginTop: 10,
                                    borderColor: Colors.white,
                                }}
                                titleStyle={{
                                    width: '100%',
                                    color: Colors.white,
                                }}
                                onPress={() => {
                                    setFormType(prev =>
                                        prev === 'login' ? 'signup' : 'login'
                                    );
                                }}
                                disabled={authLoading}
                            />
                        </Fragment>
                    )}
                </Formik>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    contentContainerStyle: {
        flex: 1,
        backgroundColor: Colors.red,
    },
    container: {
        flex: 1,
        padding: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputStyle: {
        fontSize: 15,
        color: Colors.white,
    },
    inputContainer: {
        borderColor: Colors.grey,
        borderBottomWidth: 3,
    },
});

export default AuthScreen;
