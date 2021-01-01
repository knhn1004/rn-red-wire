import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useFonts, Monoton_400Regular } from '@expo-google-fonts/monoton';

const styles = StyleSheet.create({});

export const Colors = {
    white: '#ffffff',
    black: '#131418',
    black2: '#272930',
    black3: '#1a1a21',
    grey: '#c8c8c8',
    red: '#d74444',
};

export const LogoText = ({ style }) => {
    let [fontsLoaded] = useFonts({
        Monoton_400Regular,
    });
    return (
        fontsLoaded && (
            <Text
                style={{
                    fontFamily: 'Monoton_400Regular',
                    color: '#ffffff',
                    fontSize: 50,
                    ...style,
                }}
            >RedWire</Text>
        )
    );
};
