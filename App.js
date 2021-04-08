import 'react-native-gesture-handler'

import React, {useContext, useEffect, useState} from 'react'
// import LoginScreen from './app/views/first/LoginScreen'
import Base from './app/views/base/first/Base'
// import InitialScreen from './app/views/base/first/Base'
// import ScheduleScreen from './app/views/base/MainScreen/ScheduleScreen'
// import HomeScreen from './app/views/base/MainScreen/HomeScreen'
import SplashScreen from 'react-native-splash-screen'
import CoreApp from './app/views/base/Base';
import {Auth,AuthContext} from './app/views/base/FirebaseConfig'
import auth from '@react-native-firebase/auth';


// console.disableYellowBox = true;

const App = () => {
    
    SplashScreen.hide()

    const {user, setUser, state, setstate} = useContext(AuthContext)
    
    const  onAuthStateChanged =(user) => {
        setUser(user);
        if (state) setstate(false);
      }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
        
    }, []);

    // if ( !state )return null;

    return (
        <>
            {/* <InitialScreen /> */}


            {
                (user) ? <CoreApp/> :  <Base/> 
            }

            {/* <FillScreen/> */}
        </>
    );r
}

export default () => (
    <Auth>
        <App />
    </Auth>
)