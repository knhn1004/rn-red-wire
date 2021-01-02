import { DrawerContentScrollView } from '@react-navigation/drawer';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { useDispatch } from 'react-redux';
import { logout } from '../store/actions';
import { Colors, LogoText } from './tools';

const CustomSideDrawer = props => {
    const mainOptions = [
        { title: 'News', location: 'Home' },
        { title: 'Videos', location: 'Videos' },
        { title: 'Profile', location: 'Profile' },
    ];

    const dispatch = useDispatch();

    return (
        <DrawerContentScrollView {...props}>
            <View>
                <LogoText
                    style={{
                        fontSize: 40,
                        textAlign: 'center',
                        // color: Colors.black2,
                    }}
                />
                {mainOptions.map(item => (
                    <Button
                        key={item.location}
                        title={item.title}
                        onPress={() => props.navigation.navigate(item.location)}
                        buttonStyle={styles.drawerButton}
                        titleStyle={{ width: '100%' }}
                    />
                ))}
                <Button
                    title="Logout"
                    onPress={() => dispatch(logout())}
                    buttonStyle={styles.drawerButton}
                    titleStyle={{ width: '100%' }}
                />
            </View>
        </DrawerContentScrollView>
    );
};

const styles = StyleSheet.create({
    drawerButton: {
        backgroundColor: 'transparent',
        borderBottomWidth: 1,
        borderBottomColor: Colors.black2,
    },
});

export default CustomSideDrawer;
