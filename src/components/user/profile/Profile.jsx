import React, { useContext } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import UserData from './UserData';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Colors } from '../../../utils/tools';
import { useSelector } from 'react-redux';
import { Divider } from 'react-native-elements';

const ProfileScreen = () => {
    const user = useSelector(state => state.auth.user);
    return (
        <KeyboardAwareScrollView extraScrollHeight={80}>
            <View style={{ padding: 10 }}>
                <Text style={styles.title}>Profile</Text>
                <Text style={styles.subtitle}>Email</Text>
                <Text style={styles.info}>{user?.email}</Text>
                <Divider style={styles.divider} />
                <Text style={styles.subtitle}>About You</Text>
                <UserData />
            </View>
        </KeyboardAwareScrollView>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 25,
        textAlign: 'center',
        padding: 10,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 22,
        padding: 10,
        fontWeight: 'bold',
        color: Colors.black2,
    },
    info: {
        fontSize: 18,
        padding: 10,
    },
    divider: {
        marginTop: 10,
        marginBottom: 10,
    },
});

export default ProfileScreen;
