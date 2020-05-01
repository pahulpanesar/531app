import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SplashScreen from './../screens/SplashScreen';
import { AuthStackScreen } from './AuthStackScreen';
import { NavigationContainer } from '@react-navigation/native';
import { AsyncStorage } from 'react-native';
import Constants from './../Constants';
import MainNavigation from './MainNavigation';
import UserContext from './../contexts/UserContext';

export const Tab = createBottomTabNavigator();
export const MainStack = createStackNavigator();
export const CalendarStack = createStackNavigator();
export const SettingsStack = createStackNavigator();
export const AuthStack = createStackNavigator();

export default () => {
    const [isLoading, setIsLoading] = React.useState(true);
    const [user, setUser] = React.useState(null);
    React.useEffect(() => {
        async function getUser() {
            return await AsyncStorage.getItem(Constants.UserStorageKey);
        }
        let user = getUser();
        console.log("USER: ", user);
        setUser(user);
        setIsLoading(false);
        }, []);

    return (
        <NavigationContainer>
            {isLoading ? 
                <SplashScreen /> : 
                <UserContext.Provider value={setUser}>
                    {user == null ? 
                        <AuthStackScreen /> :
                        <MainNavigation />
                    }
                </ UserContext.Provider>
            }
        </NavigationContainer>
    )

}

