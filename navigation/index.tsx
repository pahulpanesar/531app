import React, { useContext, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './../screens/SplashScreen';
import { NavigationContainer } from '@react-navigation/native';
import { AsyncStorage } from 'react-native';
import Constants from './../Constants';
import MainNavigation from './MainNavigation';
import UserContext from './../contexts/UserContext';
import SignIn from '../screens/SignInScreen';
import { StyleSheet } from 'react-native';
const AppStack = createStackNavigator();

export default () => {
    const [isLoading, setIsLoading] =  useState(true);
    const [user, setUser] = useState(null);
    React.useEffect(() => {
        async function getUser() {
            return AsyncStorage.getItem(Constants.UserStorageKey);
        }
        getUser().then((user) => {
            console.log("USER:2 ", user);
            
            if (user) {
                const obj = JSON.parse(user);
                if (obj.exp <= Math.floor(new Date().getTime() / 1000)) {
                    AsyncStorage.removeItem(Constants.UserStorageKey);
                    setUser(null);
                }
            } else {
                setUser(user);
            }

            setIsLoading(false);
        });
    }, []);

    return (
        <NavigationContainer>
            {isLoading ?
                <SplashScreen /> :
                <UserContext.Provider value={setUser}>
                    <AppStack.Navigator headerMode="none">
                        {user == null ?
                            <AppStack.Screen name="SignIn" component={SignIn} /> :
                            <AppStack.Screen name="MainApp" component={MainNavigation} />
                        }
                    </AppStack.Navigator>
                </ UserContext.Provider>
            }
        </NavigationContainer>
    )

}

