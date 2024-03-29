import 'react-native-gesture-handler'
import React, {useContext, useEffect} from 'react'
import FillScreen from './app/views/base/InitialScreens/FillScreen'
import SplashScreen from 'react-native-splash-screen'
import CoreApp from './app/views/base/Base';
import {Auth,AuthContext} from './app/views/base/ContentProvider'
import auth from '@react-native-firebase/auth';
import LoginScreen from './app/views/base/InitialScreens/LoginScreen'
// import FirebaseStore from './app/views/base/FirebaseStore'


// console.disableYellowBox = true;


const App = () => {
    SplashScreen.hide()
    const {ready, user,setUser, state} = useContext(AuthContext)
    
    const  onAuthStateChanged =(user) => {
        setUser(user);
    }
    
    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);
    
    if (ready) {
        if (user) {
            return state ? <CoreApp /> : <FillScreen /> 
        }
        return <LoginScreen />
    }

    return null
    
}


export default () => (
    <Auth>

        <App />

    </Auth>
)