import React, { Fragment } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Provider, useSelector } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import reducers from './src/store/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import AuthScreen from './src/components/auth';
import {
    HomeStack,
    ProfileStack,
    Stack,
    VideosStack,
} from './src/routes/stacks';
import { Colors } from './src/utils/tools';
import CustomSideDrawer from './src/utils/customDrawer';
import { ThemeProvider } from 'react-native-elements';
import Toast from 'react-native-toast-message';
import { View, Text } from 'react-native';
import thunk from 'redux-thunk';

const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunk, promiseMiddleware))
);

const Drawer = createDrawerNavigator();

const MainDrawer = () => {
    return (
        <Drawer.Navigator
            drawerContent={props => <CustomSideDrawer {...props} />}
            drawerStyle={{
                backgroundColor: Colors.black,
            }}
        >
            <Drawer.Screen name="Home" component={HomeStack} />
            <Drawer.Screen name="Videos" component={VideosStack} />
            <Drawer.Screen name="Profile" component={ProfileStack} />
        </Drawer.Navigator>
    );
};

function App() {
    const auth = useSelector(state => state.auth);

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                {auth.isAuth ? (
                    <Fragment>
                        <Stack.Screen name="Main" component={MainDrawer} />
                    </Fragment>
                ) : (
                    <Stack.Screen name="Auth" component={AuthScreen} />
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const theme = {
    colors: {
        primary: Colors.red,
    },
};

const toastConfig = {
    info: ({ text1, props, ...rest }) => (
        <View style={{ height: 60, width: '100%', backgroundColor: 'pink' }}>
            <Text>{text1}</Text>
            <Text>{props.guid}</Text>
        </View>
    ),
    // error: () => {},
    // info: () => {},
    // any_custom_type: () => {}
};

const reduxApp = () => (
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <App />
            <Toast ref={ref => Toast.setRef(ref)} config={toastConfig} />
        </ThemeProvider>
    </Provider>
);

export default reduxApp;
