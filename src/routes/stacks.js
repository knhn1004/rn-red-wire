import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../components/home/homescreen';
import ArticleScreen from '../components/home/homescreen/article';
import VideosScreen from '../components/home/videos';
import { Colors, LogoText } from '../utils/tools';
import { Platform } from 'react-native';
import { Icon } from 'react-native-elements';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import VideoScreen from '../components/home/videos/video';
import ProfileScreen from '../components/user/profile/Profile';

export const Stack = createStackNavigator();

export const screenOptions = {
    headerTitleAlign: 'center',
    headerTintColor: Colors.red,
    headerTitle: () => <LogoText style={{ color: Colors.red, fontSize: 25 }} />,
    headerStyle: {
        backgroundColor: Colors.black,
        height: Platform.OS === 'ios' ? 110 : 80,
        borderBottomWidth: 6,
        borderBottomColor: Colors.red,
    },
};

const HamburgerIcon = () => {
    const navigation = useNavigation();
    return (
        <View style={{ margin: 10 }}>
            <Icon
                name="menufold"
                type="antdesign"
                color={Colors.white}
                onPress={() => navigation.openDrawer()}
                size={30}
            />
        </View>
    );
};

export const HomeStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                ...screenOptions,
            }}
        >
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ headerLeft: () => <HamburgerIcon /> }}
            />
            <Stack.Screen name="Article" component={ArticleScreen} />
        </Stack.Navigator>
    );
};

export const VideosStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="Videos"
            screenOptions={{ ...screenOptions }}
        >
            <Stack.Screen
                name="Videos"
                component={VideosScreen}
                options={{ headerLeft: () => <HamburgerIcon /> }}
            />
            <Stack.Screen name="Video" component={VideoScreen} />
        </Stack.Navigator>
    );
};

export const ProfileStack = () => {
    return (
        <Stack.Navigator screenOptions={{ ...screenOptions }}>
            <Stack.Screen
                name="Profile"
                component={ProfileScreen}
                options={{ headerLeft: () => <HamburgerIcon /> }}
            />
        </Stack.Navigator>
    );
};
