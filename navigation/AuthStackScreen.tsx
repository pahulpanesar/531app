import React from 'react';
import SignIn from '../screens/SignInScreen';
import { AuthStack } from './index';
export function AuthStackScreen() {
    return (
    <AuthStack.Navigator>
        <AuthStack.Screen name="SignIn" component={SignIn} />
    </AuthStack.Navigator>
    );
}
