import React, { Fragment } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Button, Header, Icon, Input } from 'react-native-elements';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { showToast } from '../../../utils/tools';
import { updateUserData } from '../../../store/actions';

const validationSchema = Yup.object({
    firstname: Yup.string().required('First name is required'),
    lastname: Yup.string().required('Last name is required'),
    age: Yup.number()
        .typeError('Age must be a number')
        .max(120, 'Please provide a valid age number')
        .required('Age is required')
        .positive()
        .integer(),
});

const UserData = () => {
    const user = useSelector(state => state.auth.user);
    const authLoading = useSelector(state => state.auth.loading);
    const dispatch = useDispatch();

    return (
        <Formik
            enableReinitialize={true}
            initialValues={{
                firstname: user.firstname || '',
                lastname: user.lastname || '',
                age: user.age || null,
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
                dispatch(updateUserData(values));
                // TODO: error handling
                showToast(
                    'success',
                    'Success',
                    'Your user profile updated successfully!'
                );
                resetForm();
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
                <View style={{ marginTop: 20 }}>
                    <Input
                        name="firstname"
                        label="First Name"
                        value={values.firstname}
                        onChangeText={handleChange('firstname')}
                        onBlur={handleBlur('firstname')}
                        errorMessage={
                            !!errors.firstname && touched.firstname
                                ? errors.firstname
                                : ''
                        }
                    />
                    <Input
                        name="lastname"
                        label="Last Name"
                        value={values.lastname}
                        onChangeText={handleChange('lastname')}
                        onBlur={handleBlur('lastname')}
                        errorMessage={
                            !!errors.lastname && touched.lastname
                                ? errors.lastname
                                : ''
                        }
                    />
                    <Input
                        name="age"
                        label="Age"
                        keyboardType="number-pad"
                        value={!!values.age ? values.age.toString() : null}
                        onChangeText={handleChange('age')}
                        onBlur={handleBlur('age')}
                        errorMessage={
                            !!errors.age && touched.age ? errors.age : ''
                        }
                    />
                    <Button
                        title="UPDATE"
                        // buttonStyle={{ backgroundColor: Colors.red }}
                        icon={{ name: 'send', size: 30, color: '#fff' }}
                        onPress={handleSubmit}
                        loading={authLoading}
                    />
                </View>
            )}
        </Formik>
    );
};

const styles = StyleSheet.create({});

export default UserData;
