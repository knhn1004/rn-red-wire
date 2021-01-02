import React, { Fragment } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Button, Header, Icon, Input } from 'react-native-elements';
import { Formik } from 'formik';
import * as Yup from 'yup';

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
    return (
        <Formik
            // enableReinitialize={true}
            initialValues={{ firstname: '', lastname: '', age: 0 }}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
                console.log(values);
                alert('submitted');
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
                        value={values.age.toString()}
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
                    />
                </View>
            )}
        </Formik>
    );
};

const styles = StyleSheet.create({});

export default UserData;
