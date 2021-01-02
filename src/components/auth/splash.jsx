import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { Colors, LogoText } from '../../utils/tools';

const Splash = () => {
    return (
        <View style={styles.contentContainerStyle}>
            <LogoText />
            <Text style={{ color: Colors.white }}>Checking User Data</Text>
            <ActivityIndicator color={Colors.white} />
        </View>
    );
};

const styles = StyleSheet.create({
    contentContainerStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.black,
    },
});

export default Splash;
