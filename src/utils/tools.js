import React from 'react';
import { View, Text } from 'react-native';
import { useFonts, Monoton_400Regular } from '@expo-google-fonts/monoton';
import Toast from 'react-native-toast-message';

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
            >
                RedWire
            </Text>
        )
    );
};

export const showToast = (type, text1, text2) => {
    Toast.show({
        type,
        text1,
        text2,
        // position: 'bottom',
        // bottomOffset: 50,
        topOffset: 50,
    });
};
