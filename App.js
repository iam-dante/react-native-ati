
import 'react-native-gesture-handler'

import React, {useContext, useEffect, useState} from 'react'
import FillScree from './app/views/base/first/FillScreen'
// import InitialScreen from './app/views/base/first/Base'
// import ScheduleScreen from './app/views/base/MainScreen/ScheduleScreen'
// import HomeScreen from './app/views/base/MainScreen/HomeScreen'
import SplashScreen from 'react-native-splash-screen'
import CoreApp from './app/views/base/Base';
import {Auth,AuthContext} from './app/views/base/FirebaseConfig'
import auth from '@react-native-firebase/auth';
import FirebaseStore from './app/views/base/FirebaseStore'
import LoginScreen from './app/views/base/first/LoginScreen'



// console.disableYellowBox = true;

const App = () => {
    SplashScreen.hide()
    // const {ready, user,setUser, state} = useContext(AuthContext)
    
    // const  onAuthStateChanged =(user) => {
    //     setUser(user);
    //     // if (state) setstate(false);
    // }
    
    // useEffect(() => {
    //     const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    //     return subscriber; // unsubscribe on unmount
    // }, []);
    
    // // if ( !state )return null;
    // if (ready) {
        
    //     SplashScreen.hide()
    //     if (user) {
    //         return state ? <CoreApp /> : <FillScreen /> 
    //     }
    //     return <LoginScreen />
    // }

    return <FillScree/>
}


export default () => (
    <Auth>
        <App />
    </Auth>
)