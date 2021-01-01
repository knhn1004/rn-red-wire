import React, { useContext } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Button, Divider, Header, Icon, Input } from 'react-native-elements';
import UserData from './UserData';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const ProfileScreen = () => {
    return (
        <KeyboardAwareScrollView extraScrollHeight={10}>
            <View style={{ padding: 10 }}>
                <Text
                    style={{
                        fontSize: 20,
                        textAlign: 'center',
                        padding: 10,
                        fontWeight: 'bold',
                    }}
                >
                    You User Data
                </Text>
                <Input label="email" />
                <Input label="password" secureTextEntry={true} />
                <Button
                    title="UPDATE"
                    // buttonStyle={{ backgroundColor: Colors.red }}
                    icon={{ name: 'send', size: 30, color: '#fff' }}
                    onPress={() => alert('pressed')}
                />
                <UserData />
            </View>
        </KeyboardAwareScrollView>
    );
};

const styles = StyleSheet.create({});

export default ProfileScreen;
