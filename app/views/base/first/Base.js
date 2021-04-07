import React from 'react' 
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FillScreen from './FillScreen';
import LoginScreen from './LoginScreen'
import MainScreeen from '../MainScreen'

const Stack = createStackNavigator();

export default () => {

    return (
        <NavigationContainer>
            <Stack.Navigator
                headerMode="none">
                <Stack.Screen name='login' component={LoginScreen}/>
                <Stack.Screen name='option' component={FillScreen}/>
                <Stack.Screen name='mainscreen' component={MainScreeen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}